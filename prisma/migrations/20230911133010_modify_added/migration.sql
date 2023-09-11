/*
  Warnings:

  - You are about to drop the column `studentCompletedCreadit` on the `student_academic_infos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "student_academic_infos" DROP COLUMN "studentCompletedCreadit",
ADD COLUMN     "studentCompletedCredit" INTEGER DEFAULT 0;
