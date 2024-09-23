import { PrismaClient, transaction_type } from "@prisma/client";

const prisma = new PrismaClient();
import { transaferTransactionSchema } from "../../validation/transactions/types";

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    transaferTransactionSchema.safeParse(body)
  );

  if (!result.success) {
    throw createError({
      status: 400,
      message: JSON.stringify(result.error.issues),
    });
  }

  await prisma.transactions.create({
    data: {
      account_id: result.data.account_id_from,
      amount: result.data.amount,
      transaction_date: result.data.transaction_date,
      transaction_type: transaction_type.SetExpense,
    },
  });

  await prisma.transactions.create({
    data: {
      account_id: result.data.account_id_to,
      amount: result.data.amount,
      transaction_date: result.data.transaction_date,
      transaction_type: transaction_type.SetIncome,
    },
  });

  return {
    success: true,
  };
});
