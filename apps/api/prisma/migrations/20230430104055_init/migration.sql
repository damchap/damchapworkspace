/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_addressStreet_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "Address";

-- CreateTable
CREATE TABLE "Adress" (
    "idAdress" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,

    CONSTRAINT "Adress_pkey" PRIMARY KEY ("idAdress")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adress_street_key" ON "Adress"("street");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressStreet_fkey" FOREIGN KEY ("addressStreet") REFERENCES "Adress"("street") ON DELETE RESTRICT ON UPDATE CASCADE;
