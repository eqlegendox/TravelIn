import { Test, TestingModule } from '@nestjs/testing';
import { PrismaChatService } from './prisma-chat.service';

describe('PrismaChatService', () => {
  let service: PrismaChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaChatService],
    }).compile();

    service = module.get<PrismaChatService>(PrismaChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
