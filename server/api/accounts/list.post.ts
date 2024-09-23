import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { z } from "zod";

const userSchema = z.object({
  account_name: z.string().min(1),
  balance: z.number().int(), // Make sure it's an integer,
});

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    userSchema.safeParse(body)
  );

  if (!result.success) {
    throw createError({
      status: 400,
      message: JSON.stringify(result.error.issues),
    });
  }

  const newAccount = await prisma.accounts.create({
    data: {
      account_name: result.data.account_name,
      user_id: 3,
    },
  });

  await prisma.transactions.create({
    data: {
      amount: result.data.balance,
      account_id: newAccount.account_id,
      transaction_type: "SetIncome",
    },
  });

  return newAccount;
});
