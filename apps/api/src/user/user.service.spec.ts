import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaUserService } from '../prisma-user/prisma-user.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UserService', () => {
  let service: UserService;
  let prismaUserService: PrismaUserService;
  let prismaService: PrismaService;
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaUserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
