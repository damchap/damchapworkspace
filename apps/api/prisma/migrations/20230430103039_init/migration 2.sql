-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_addressStreet_fkey";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressStreet_fkey" FOREIGN KEY ("addressStreet") REFERENCES "Address"("street") ON DELETE SET NULL ON UPDATE CASCADE;
