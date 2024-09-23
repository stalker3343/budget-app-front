/*
  Warnings:

  - Changed the type of `alias_bank` on the `category_aliases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "aliases_bank" AS ENUM ('GPB', 'TKS');

-- AlterTable
ALTER TABLE "category_aliases" DROP COLUMN "alias_bank",
ADD COLUMN     "alias_bank" "aliases_bank" NOT NULL;
