import { Test, TestingModule } from '@nestjs/testing';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { PrismaChatService } from '../prisma-chat/prisma-chat.service';
import { LlmService } from '../llm/llm.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

describe('ChatsController', () => {
  let controller: ChatsController;
  let chatService: ChatsService;
  let prismaChatService: PrismaChatService;
  let llmService: LlmService;
  let prismaService: PrismaService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatsController],
      providers: [ChatsService, PrismaChatService, LlmService, PrismaService, ConfigService],
    }).compile();

    controller = module.get<ChatsController>(ChatsController);
    chatService = module.get<ChatsService>(ChatsService);
    prismaChatService = module.get<PrismaChatService>(PrismaChatService);
    llmService = module.get<LlmService>(LlmService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


});
