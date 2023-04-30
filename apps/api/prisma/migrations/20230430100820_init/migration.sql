/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `idAdress` was added to the `Address` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_addressStreet_fkey";

-- AlterTable
ALTER TABLE "Address" DROP CONSTRAINT "Address_pkey",
ADD COLUMN     "idAdress" TEXT NOT NULL,
ADD CONSTRAINT "Address_pkey" PRIMARY KEY ("idAdress");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressStreet_fkey" FOREIGN KEY ("addressStreet") REFERENCES "Address"("idAdress") ON DELETE SET NULL ON UPDATE CASCADE;
