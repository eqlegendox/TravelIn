import { Module } from '@nestjs/common';
import { PrismaUserService } from './prisma-user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PrismaUserService],
  exports: [PrismaUserService]
})
export class PrismaUserModule {}
