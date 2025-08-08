
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Chat, ChatMessages, Prisma } from 'database/generated/prisma';

@Injectable()
export class PrismaChatService {
  constructor(private prisma: PrismaService) {}
  
  async chat(
    where: Prisma.ChatWhereUniqueInput
  ): Promise<Chat | null> {
    return this.prisma.chat.findUnique({
      where: where
    })
  }

  async chats(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ChatWhereUniqueInput;
    where?: Prisma.ChatWhereInput;
    orderBy?: Prisma.ChatOrderByWithRelationInput;
  }): Promise<Chat[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.chat.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }

  async createChat(data: {userId: string}): Promise<Chat> {
    return await this.prisma.chat.create({data: data})
  }

  async deleteChat(where: Prisma.ChatWhereUniqueInput): Promise<Chat | null> {
    try {
      const res = await this.prisma.chat.delete({
      where: where
      })
      return res
    } catch {
       return null
    }
  }

  async createMessage(data: {chatId: string, messageRoleId: number, message: string}): Promise<ChatMessages> {
    return await this.prisma.chatMessages.create({data: data})
  }

  async messages(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ChatMessagesWhereUniqueInput;
    where?: Prisma.ChatMessagesWhereInput;
    orderBy?: Prisma.ChatMessagesOrderByWithRelationInput;
  }): Promise<ChatMessages[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.chatMessages.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }
}
