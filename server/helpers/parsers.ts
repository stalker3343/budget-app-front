// export function gazpromParser(inputString) {
interface Spending {
  source: string;
  amount: number;
  category: string;
  type: "income" | "expense";
  cashback: number | null;
  status?: "completed" | "failed";
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

    // Parse the first line for source and amount
    const firstLine = lines[i];
    const match = firstLine.match(/(.+?)([+-])([\d\s,.]+)\s*Р/);

    if (match) {
      source = match[1].trim();
      const sign = match[2]; // + or -
      amount = parseFloat(match[3].replace(/\s+/g, "").replace(",", "."));
      type = sign === "+" ? "income" : "expense";
    }

    // Move to the next line
    i++;

    // Parse the second line for category
    if (i < lines.length) {
      category = lines[i];
    }

    // Move to the next line
    i++;

    // Check for transfer (if there's time or "Операция не выполнена")
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
    });
  }

  return spendings;
}

//   return inputString;
// }
