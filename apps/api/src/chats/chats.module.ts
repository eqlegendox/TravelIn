import { Module } from '@nestjs/common';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { PrismaChatModule } from 'src/prisma-chat/prisma-chat.module';
import { LlmModule } from 'src/llm/llm.module';
import { UserModule } from 'src/user/user.module';
import { PrismaChatService } from 'src/prisma-chat/prisma-chat.service';
import { LlmService } from 'src/llm/llm.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [PrismaChatModule, LlmModule, UserModule],
    controllers: [ChatsController],
    providers: [ChatsService, PrismaChatService, LlmService, PrismaService, ConfigService],
})
export class ChatsModule {}
