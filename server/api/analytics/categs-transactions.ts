import { Prisma, PrismaClient, transaction_type } from "@prisma/client";

const prisma = new PrismaClient();
import { z } from "zod";

const filtersSchema = z.object({
  // startDate: z.string().pipe(z.coerce.date()),
  // endDate: z.string().pipe(z.coerce.date()),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  accountId: z.optional(z.coerce.number().positive()),
  transactionType: z.enum([transaction_type.Expense, transaction_type.Income]),
});

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, filtersSchema.parse);

  const { startDate, endDate, accountId, transactionType } = query;

  const transactionSummary: {
    category_id: number;
    category_name: string;
    category_type: string;
    category_sum: string;
    transactions: {
      transaction_id: number;
      amount: string;
      transaction_date: Date;
      notes: string | null;
    }[];
  }[] = await prisma.$queryRaw`
      SELECT
        c.category_id,
        c.category_name,
        c.category_type,
        SUM(t.amount) AS category_sum,
        json_agg(json_build_object(
          'transaction_id', t.transaction_id,
          'amount', t.amount,
          'transaction_date', t.transaction_date,
          'notes', t.notes
        )) AS transactions
      FROM
        transactions t
      JOIN
        categories c ON t.category_id = c.category_id
      WHERE
        t.transaction_date BETWEEN ${startDate}::date AND ${endDate}::date 
        ${accountId ? Prisma.sql`AND t.account_id = ${accountId}` : Prisma.sql``}
        ${transactionType ? Prisma.sql`AND t.transaction_type = ${transactionType}::transaction_type` : Prisma.sql``}
      GROUP BY
        c.category_id, c.category_name, c.category_type
      `;

  const totalSum = transactionSummary.reduce((prev, curr) => {
    console.log(prev, curr.category_sum);
    return prev + +curr.category_sum;
  }, 0);

  // Шаг 3: Формируем итоговый результат с расчётом процентов
  return transactionSummary.map((category) => ({
    category_id: category.category_id,
    category_name: category.category_name,
    category_type: category.category_type,
    category_sum: category.category_sum,
    category_percent:
      totalSum > 0 ? ((+category.category_sum / totalSum) * 100).toFixed(0) : 0,
    transactions: category.transactions,
  }));
});
