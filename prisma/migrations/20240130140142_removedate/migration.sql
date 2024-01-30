/*
  Warnings:

  - You are about to drop the column `createdAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "category" DROP COLUMN "createdAt";
ALTER TABLE "category" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "createdAt";
ALTER TABLE "product" DROP COLUMN "updatedAt";
