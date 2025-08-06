
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Chat, Prisma } from 'database/generated/prisma';

@Injectable()
export class PrismaChatService {
  constructor(private prisma: PrismaService) {}

  async chats(): Promise<Chat[] | []> {
    return this.prisma.chat.findMany();
  }
}
