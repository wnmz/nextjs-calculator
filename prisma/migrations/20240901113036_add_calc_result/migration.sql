/*
  Warnings:

  - Added the required column `result` to the `Calculation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Calculation" ADD COLUMN     "result" DOUBLE PRECISION NOT NULL;
