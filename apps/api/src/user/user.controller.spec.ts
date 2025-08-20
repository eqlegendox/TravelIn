import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaUserService } from '../prisma-user/prisma-user.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  let prismaUserService: PrismaUserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, PrismaUserService, PrismaService]
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
