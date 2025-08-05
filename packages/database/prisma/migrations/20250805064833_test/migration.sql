-- CreateTable
CREATE TABLE "public"."TempUserChats" (
    "id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,

    CONSTRAINT "TempUserChats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TempUserChats_chat_id_key" ON "public"."TempUserChats"("chat_id");

-- AddForeignKey
ALTER TABLE "public"."TempUserChats" ADD CONSTRAINT "TempUserChats_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "public"."Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
