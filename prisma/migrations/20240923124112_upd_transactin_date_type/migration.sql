-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "transaction_date" DROP DEFAULT,
ALTER COLUMN "transaction_date" SET DATA TYPE DATE;
