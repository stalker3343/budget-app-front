interface Spending {
  source: string;
  amount: number;
  category: string;
  type: "income" | "expense";
  status?: "completed" | "failed";
  cashback: number | null;
}

/**
 * Clean the source string by trimming non-alphabetical characters from both ends.
 * @param source - The raw source string to clean.
 * @returns The cleaned source.
 */
function cleanSource(source: string): string {
  // Regular expression to match the first and last valid alphabetic character (Russian or English)
  const match = source.match(/[A-Za-zА-Яа-я].*[A-Za-zА-Яа-я]/);
  return match ? match[0].trim() : source.trim();
}

export function gazpromParser(text: string): Spending[] {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  const spendings: Spending[] = [];

  let i = 0;

  while (i < lines.length) {
    let source = "";
    let amount = 0;
    let category = "";
    let type: "income" | "expense" = "expense";
    let status: "completed" | "failed" = "completed";
    let cashback: number | null = null;

    // Parse the first line for source and amount
    const firstLine = lines[i];
    // Adjusted regex to handle both cases: with or without space before 'Р'
    const match = firstLine.match(/(.+?)([+-])([\d\s,.]+)\s*Р/);

    if (match) {
      source = cleanSource(match[1].trim()); // Clean the source
      const sign = match[2]; // + or -
      amount = parseFloat(match[3].replace(/\s+/g, "").replace(",", "."));
      type = sign === "+" ? "income" : "expense";
    }

    // Move to the next line
    i++;

    // Parse the second line for category and cashback
    if (i < lines.length) {
      const secondLine = lines[i];

      // Check for cashback pattern "+<amount> Б"
      const cashbackMatch = secondLine.match(/\+([\d\s,.]+)\s*Б/);
      if (cashbackMatch) {
        cashback = parseFloat(
          cashbackMatch[1].replace(/\s+/g, "").replace(",", ".")
        );
        category = secondLine.replace(cashbackMatch[0], "").trim(); // Remove cashback part from category
      } else {
        category = secondLine; // No cashback, treat entire line as category
      }
    }

    // Move to the next line
    i++;

    // Check for special cases (failed operation or transfer time)
    if (i < lines.length) {
      const nextLine = lines[i];
      if (nextLine.includes("Операция не выполнена")) {
        status = "failed";
        i++; // Skip this line
      } else if (/^\d{2}:\d{2}$/.test(nextLine)) {
        // Time format indicates transfer
        i++; // Skip the time line
      }
    }

    // Store the parsed spending entry
    spendings.push({
      source,
      amount,
      category,
      type,
      status,
      cashback,
    });
  }

  return spendings;
}
