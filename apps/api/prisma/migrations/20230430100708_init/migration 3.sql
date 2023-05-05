/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Technologie` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Technologie_name_key" ON "Technologie"("name");
