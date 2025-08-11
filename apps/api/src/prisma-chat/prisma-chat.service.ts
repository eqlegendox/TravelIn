
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Chat, ChatMessages, MessageRole, Prisma } from 'database/generated/prisma';
import { MyLoggerService } from 'src/my-logger/my-logger.service';

@Injectable()
export class PrismaChatService {
  constructor(
    private prisma: PrismaService,
  ) {}
  private readonly logger = new MyLoggerService(PrismaChatService.name)
  
  async chat(
    where: Prisma.ChatWhereUniqueInput
  ): Promise<Chat | null> {
    this.logger.log("Querying for a chat")
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
    this.logger.log("Querying for chats")
    return this.prisma.chat.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }

  async createChat(data: {userId: string}): Promise<Chat> {
    this.logger.log("Creating new chat")
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
    this.logger.log("Creating new message")
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
    this.logger.log("Querying for messages")
    return this.prisma.chatMessages.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }

  async roles(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MessageRoleWhereUniqueInput;
    where?: Prisma.MessageRoleWhereInput;
    orderBy?: Prisma.MessageRoleOrderByWithRelationInput;
  }): Promise<MessageRole[]> {
    const { skip, take, cursor, where, orderBy } = params;
    console.log("Querying for roles")
    return this.prisma.messageRole.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy
    });
  }
}
