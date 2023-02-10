/*
  Warnings:

  - Added the required column `testname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `testname` VARCHAR(191) NOT NULL;
