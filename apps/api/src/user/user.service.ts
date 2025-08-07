import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaUserService } from 'src/prisma-user/prisma-user.service';

@Injectable()
export class UserService {
    constructor(private readonly prismaUserService: PrismaUserService) {}

    async createUser() {
        const users = await this.prismaUserService.users({orderBy: {createdAt: 'desc'}, take: 1})
        if (users.length >= 1) {
            const year = users[0].createdAt.getFullYear()
            const month = users[0].createdAt.getMonth()
            const date = users[0].createdAt.getDate()
            const lastUserDate = `${date}-${month}-${year}`
            const today = new Date()
            const todayDate = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`
            if (lastUserDate !== todayDate) {
                return this.prismaUserService.createUser()
            }   else {
                return users[0]
            }
        }
        return this.prismaUserService.createUser()
    }

    async createUserDetail() {
        // TODO
    }
}
