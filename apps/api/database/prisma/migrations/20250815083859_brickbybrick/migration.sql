-- CreateTable
CREATE TABLE "public"."UserDetail" (
    "id" TEXT NOT NULL,
    "userName" VARCHAR(24) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "isTemporary" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Chat" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ChatMessages" (
    "id" SERIAL NOT NULL,
    "chatId" TEXT NOT NULL,
    "messageRoleId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatMessages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MessageRole" (
    "id" SMALLSERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "MessageRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."HotelInfo" (
    "id" SERIAL NOT NULL,
    "hotelName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "reviews" INTEGER NOT NULL,
    "star" SMALLINT NOT NULL,

    CONSTRAINT "HotelInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserDetail_id_key" ON "public"."UserDetail"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserDetail_userName_key" ON "public"."UserDetail"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "UserDetail_email_key" ON "public"."UserDetail"("email");

-- CreateIndex
CREATE INDEX "ChatMessages_chatId_createdAt_idx" ON "public"."ChatMessages"("chatId", "createdAt");

-- CreateIndex
CREATE INDEX "HotelInfo_location_price_rating_reviews_star_idx" ON "public"."HotelInfo"("location", "price", "rating", "reviews", "star");

-- AddForeignKey
ALTER TABLE "public"."UserDetail" ADD CONSTRAINT "UserDetail_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Chat" ADD CONSTRAINT "Chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChatMessages" ADD CONSTRAINT "ChatMessages_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "public"."Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ChatMessages" ADD CONSTRAINT "ChatMessages_messageRoleId_fkey" FOREIGN KEY ("messageRoleId") REFERENCES "public"."MessageRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
