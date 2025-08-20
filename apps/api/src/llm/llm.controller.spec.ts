import { Test, TestingModule } from '@nestjs/testing';
import { LlmController } from './llm.controller';
import { LlmService } from './llm.service';
import { ConfigService } from '@nestjs/config';

describe('LlmController', () => {
  let controller: LlmController;
  let llmService: LlmService;
  let configService: ConfigService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LlmController],
      providers: [LlmService, ConfigService]
    }).compile();

    controller = module.get<LlmController>(LlmController);
    llmService = module.get<LlmService>(LlmService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
