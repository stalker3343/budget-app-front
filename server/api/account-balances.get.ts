import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const res = await prisma.account_balances.findMany();
  return res;
});
