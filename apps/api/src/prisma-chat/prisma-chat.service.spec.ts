import { Test, TestingModule } from '@nestjs/testing';
import { PrismaChatService } from './prisma-chat.service';
import { PrismaService } from '../prisma/prisma.service';

describe('PrismaChatService', () => {
  let service: PrismaChatService;
  let prismaService: PrismaService
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaChatService, PrismaService],
    }).compile();

    service = module.get<PrismaChatService>(PrismaChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
