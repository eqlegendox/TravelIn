/*
  Warnings:

  - You are about to drop the column `id` on the `UserDetail` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `UserDetail` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `UserDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."ChatMessages" DROP CONSTRAINT "ChatMessages_chatId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserDetail" DROP CONSTRAINT "UserDetail_id_fkey";

-- DropIndex
DROP INDEX "public"."UserDetail_id_key";

-- AlterTable
ALTER TABLE "public"."UserDetail" DROP COLUMN "id",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "UserDetail_pkey" PRIMARY KEY ("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDetail_userId_key" ON "public"."UserDetail"("userId");

-- AddForeignKey
ALTER TABLE "public"."UserDetail" ADD CONSTRAINT "UserDetail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChatMessages" ADD CONSTRAINT "ChatMessages_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "public"."Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
