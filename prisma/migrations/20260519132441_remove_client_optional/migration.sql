/*
  Warnings:

  - Made the column `clientId` on table `Obra` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Obra" DROP CONSTRAINT "Obra_clientId_fkey";

-- AlterTable
ALTER TABLE "Obra" ALTER COLUMN "clientId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
