import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaUserModule } from '../prisma-user/prisma-user.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaUserModule],
  providers: [UserService, PrismaService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
