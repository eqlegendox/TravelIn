import { Test, TestingModule } from '@nestjs/testing';
import { ChatsService } from './chats.service';
import { PrismaClient } from "@workspace/db/generated/prisma"
import { PrismaChatService } from '../prisma-chat/prisma-chat.service';
import { LlmService } from '../llm/llm.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

describe('ChatsService', () => {
  let service: ChatsService;
  let prismaChatService: PrismaChatService;
  let llmService: LlmService;
  let prismaService: PrismaService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatsService, PrismaChatService, LlmService, PrismaService, ConfigService],
    }).compile();

    service = module.get<ChatsService>(ChatsService);
    prismaChatService = module.get<PrismaChatService>(PrismaChatService);
    llmService = module.get<LlmService>(LlmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
