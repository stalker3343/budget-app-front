import { z } from "zod";

export const transactionCreateSchema = z.object({
  amount: z.number(),
  account_id: z.coerce.number().min(1),
  transaction_type: z.enum(["Income", "Expense", "SetIncome", "SetExpense"]),
  transaction_date: z.coerce.date(),
  category_id: z.coerce.number(),
  cashback: z.number().nullable(),
  notes: z.string(),
});

export const transaferTransactionSchema = z.object({
  amount: z.number(),
  account_id_from: z.coerce.number().min(1),
  account_id_to: z.coerce.number().min(1),
  transaction_date: z.coerce.date(),
});

export type ITransactionCreate = z.infer<typeof transactionCreateSchema>;
export type ITransaferTransaction = z.infer<typeof transaferTransactionSchema>;
