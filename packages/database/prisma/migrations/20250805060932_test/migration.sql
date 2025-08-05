-- CreateTable
CREATE TABLE "public"."Chat" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserChats" (
    "id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,

    CONSTRAINT "UserChats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserChats_chat_id_key" ON "public"."UserChats"("chat_id");

-- AddForeignKey
ALTER TABLE "public"."UserChats" ADD CONSTRAINT "UserChats_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "public"."Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
