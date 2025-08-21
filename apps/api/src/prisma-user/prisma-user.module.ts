import { Module } from '@nestjs/common';
import { PrismaUserService } from './prisma-user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [PrismaUserService, PrismaService],
  exports: [PrismaUserService]
})
export class PrismaUserModule {}
