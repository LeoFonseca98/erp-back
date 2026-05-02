-- CreateTable
CREATE TABLE "Obra" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Obra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Obra" ADD CONSTRAINT "Obra_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
