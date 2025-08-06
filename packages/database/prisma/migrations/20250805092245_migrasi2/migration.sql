-- DropForeignKey
ALTER TABLE "public"."UserDetail" DROP CONSTRAINT "UserDetail_id_fkey";

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."UserDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
