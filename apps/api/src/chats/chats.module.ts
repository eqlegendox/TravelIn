import { Module } from '@nestjs/common';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { PrismaChatModule } from 'src/prisma-chat/prisma-chat.module';
import { LlmModule } from 'src/llm/llm.module';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [PrismaChatModule, LlmModule, UserModule],
    controllers: [ChatsController],
    providers: [ChatsService],
})
export class ChatsModule {}
