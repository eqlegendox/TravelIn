import { Test, TestingModule } from '@nestjs/testing';
import { ToolsService } from './tools.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ToolsService', () => {
  let service: ToolsService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToolsService, PrismaService],
    }).compile();

    service = module.get<ToolsService>(ToolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
