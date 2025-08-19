import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaService } from '../prisma/prisma.service';
import { HotelInfo, Prisma } from 'database/generated/prisma';

@Injectable()
export class ToolsService {
    constructor(
        private prisma: PrismaService,
    ) {}

    async hotels(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.HotelInfoWhereUniqueInput;
        where?: Prisma.HotelInfoWhereInput;
        orderBy?: Prisma.HotelInfoOrderByWithRelationInput;
    }): Promise<HotelInfo[]> {
        const { skip, take, cursor, where, orderBy } = params;
        const botels = await this.prisma.hotelInfo.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })

        return botels
    }

    function orchestrateQuery (params: {
        botelName: string,
        minPrice: number,
        maxPrice: number,
        minRating: number,
        maxRating: number, // don't know why, but still an option
        minReview: number,
        maxReview: number, // to look for hidden gem maybe?
    }): Prisma.HotelInfoWhereInput {
        const where: Prisma.HotelInfoWhereInput = {}

        if (params.botelName) {
            where.hotelName = {
                contains: params.botelName,
                mode: 'insensitive'
            };
        }

        if (params.minPrice !== null || params.maxPrice !== null) {
            
        }
    }

}
