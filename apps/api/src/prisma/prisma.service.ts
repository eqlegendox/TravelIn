
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../database/generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  static $disconnect() {
      throw new Error('Method not implemented.');
  }
  async onModuleInit() {
    await this.$connect();
  }
}
