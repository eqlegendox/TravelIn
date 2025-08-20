import { Test, TestingModule } from '@nestjs/testing';
import { PrismaUserService } from './prisma-user.service';
import { PrismaService } from '../prisma/prisma.service';

describe('PrismaUserService', () => {
  let service: PrismaUserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaUserService, PrismaService],
    }).compile();

    service = module.get<PrismaUserService>(PrismaUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
