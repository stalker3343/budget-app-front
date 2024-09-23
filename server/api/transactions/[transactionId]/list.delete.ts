import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { z } from "zod";

const accountIdSchema = z.object({
  transactionId: z.coerce.number().positive(),
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
  const { transactionId } = result.data;

  await prisma.transactions.delete({
    where: {
      transaction_id: transactionId,
    },
  });

  return {
    success: true,
  };
});
