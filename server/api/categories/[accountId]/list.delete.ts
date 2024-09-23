import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { z } from "zod";

const accountIdSchema = z.object({
  accountId: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  const result = await getValidatedRouterParams(
    event,
    accountIdSchema.safeParse
  );

  if (!result.success) {
    throw createError({
      status: 400,
      message: JSON.stringify(result.error.issues),
    });
  }
  const accountId = +result.data.accountId;

  const deletedAccountBalance = await prisma.account_balances.findFirstOrThrow({
    where: {
      account_id: accountId,
    },
  });

  await prisma.transactions.create({
    data: {
      amount: deletedAccountBalance.balance,
      account_id: accountId,
      transaction_type: "SetExpense",
    },
  });

  await prisma.accounts.update({
    where: {
      account_id: accountId,
    },
    data: {
      is_hidden: true,
    },
  });

  return {
    success: true,
  };
});
