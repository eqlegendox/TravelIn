import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LlmModule } from './llm/llm.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ChatsModule } from './chats/chats.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaChatService } from './prisma-chat/prisma-chat.service';
import { PrismaChatModule } from './prisma-chat/prisma-chat.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PrismaUserModule } from './prisma-user/prisma-user.module';

@Module({
  imports: [
    ChatsModule,
    LlmModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([{
      name: 'short',
      ttl: 10000,
      limit: 100,
    }]),
    MyLoggerModule,
    PrismaChatModule,
    PrismaModule,
    UserModule,
    PrismaUserModule,
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }, PrismaService, PrismaChatService],
})
export class AppModule {}
