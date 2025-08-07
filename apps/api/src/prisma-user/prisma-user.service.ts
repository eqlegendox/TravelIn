import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, UserDetail, Prisma } from 'database/generated/prisma';

@Injectable()
export class PrismaUserService {
    constructor(private readonly prisma: PrismaService) {}

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    })  : Promise<User[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async createUser(): Promise<User> {
        return this.prisma.user.create({data : {}})
    }

    async createUserDetail(data: Prisma.UserDetailCreateInput): Promise<UserDetail> {
        return this.prisma.userDetail.create({data: data})
    }
}
