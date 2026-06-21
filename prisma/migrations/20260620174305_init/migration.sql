/*
  Warnings:

  - The `deleteAt` column on the `Todo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "deleteAt",
ADD COLUMN     "deleteAt" TIMESTAMP(3);
