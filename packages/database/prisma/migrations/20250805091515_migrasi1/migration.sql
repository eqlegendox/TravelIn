-- DropForeignKey
ALTER TABLE "public"."Chat" DROP CONSTRAINT "Chat_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ChatMessages" DROP CONSTRAINT "ChatMessages_chatId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserDetail" DROP CONSTRAINT "UserDetail_id_fkey";

-- AddForeignKey
ALTER TABLE "public"."UserDetail" ADD CONSTRAINT "UserDetail_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chat" ADD CONSTRAINT "Chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChatMessages" ADD CONSTRAINT "ChatMessages_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "public"."Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
