
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Chat, ChatMessages, MessageRole, Prisma } from '../../database/generated/prisma';

@Injectable()
export class PrismaChatService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async chat(
    where: Prisma.ChatWhereUniqueInput
  ): Promise<Chat | null> {
    const res = await this.prisma.chat.findUnique({
      where: where
    })
    return res
  }

  async chats(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ChatWhereUniqueInput;
    where?: Prisma.ChatWhereInput;
    orderBy?: Prisma.ChatOrderByWithRelationInput;
  }): Promise<Chat[]> {
    const { skip, take, cursor, where, orderBy } = params;
    const res = await this.prisma.chat.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
    return res
  }

  async createChat(data: {userId: string}): Promise<Chat> {
    const res = await this.prisma.chat.create({data: data})
    return res
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
    const res = await this.prisma.chatMessages.create({data: data})
    return res
  }

  async messages(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ChatMessagesWhereUniqueInput;
    where?: Prisma.ChatMessagesWhereInput;
    orderBy?: Prisma.ChatMessagesOrderByWithRelationInput;
  }): Promise<ChatMessages[]> {
    const { skip, take, cursor, where, orderBy } = params;
    const res = await this.prisma.chatMessages.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
    return res
  }

  async roles(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MessageRoleWhereUniqueInput;
    where?: Prisma.MessageRoleWhereInput;
    orderBy?: Prisma.MessageRoleOrderByWithRelationInput;
  }): Promise<MessageRole[]> {
    const { skip, take, cursor, where, orderBy } = params;
    const res = await this.prisma.messageRole.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
    return res
  }
}
