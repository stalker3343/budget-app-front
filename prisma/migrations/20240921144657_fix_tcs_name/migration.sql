/*
  Warnings:

  - The values [TKS] on the enum `aliases_bank` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "aliases_bank_new" AS ENUM ('GPB', 'TCS');
ALTER TABLE "category_aliases" ALTER COLUMN "alias_bank" TYPE "aliases_bank_new" USING ("alias_bank"::text::"aliases_bank_new");
ALTER TYPE "aliases_bank" RENAME TO "aliases_bank_old";
ALTER TYPE "aliases_bank_new" RENAME TO "aliases_bank";
DROP TYPE "aliases_bank_old";
COMMIT;
