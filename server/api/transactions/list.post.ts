import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { transactionCreateSchema } from "../../validation/transactions/types";

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    transactionCreateSchema.safeParse(body)
  );

  if (!result.success) {
    throw createError({
      status: 400,
      message: JSON.stringify(result.error.issues),
    });
  }

  return await prisma.transactions.create({
    data: {
      ...result.data,
    },
  });
});
