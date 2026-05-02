/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Obra` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `budget` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expectedEndDate` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Obra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Obra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Obra" ADD COLUMN     "actualEndDate" TIMESTAMP(3),
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "budget" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expectedEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "totalSpent" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Despesa" (
    "id" TEXT NOT NULL,
    "obraId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Despesa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Obra_code_key" ON "Obra"("code");

-- AddForeignKey
ALTER TABLE "Despesa" ADD CONSTRAINT "Despesa_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
