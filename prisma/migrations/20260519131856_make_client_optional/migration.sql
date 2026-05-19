-- DropForeignKey
ALTER TABLE "Obra" DROP CONSTRAINT "Obra_clientId_fkey";

-- AlterTable
ALTER TABLE "Obra" ALTER COLUMN "clientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
