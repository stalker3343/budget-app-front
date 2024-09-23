import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const totalSumm: { total_balance: number }[] = await prisma.$queryRaw`
    SELECT SUM(
    CASE 
        WHEN transaction_type IN ('Income', 'SetIncome') THEN amount
        WHEN transaction_type IN ('Expense', 'SetExpense') THEN -amount
        ELSE 0
    END
) AS total_balance
FROM transactions;
   `;

  return {
    totalSumm: totalSumm[0].total_balance,
  };
});
