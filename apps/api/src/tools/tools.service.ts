import { Injectable, Param } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaService } from '../prisma/prisma.service';
import { HotelInfo, TourInfo, Prisma } from '../../database/generated/prisma';


@Injectable()
export class ToolsService {
    constructor(
        private readonly prisma: PrismaService,
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

    public orchestrateQuery(params: {
        area?: string,
        minPrice?: number,
        maxPrice?: number,
        minRating?: number,
        maxRating?: number, // don't know why, but still an option
        minReview?: number,
        maxReview?: number, // to look for hidden gem maybe?
        star?: number, 
        minStar?: number, 
    }): Prisma.HotelInfoWhereInput {
        const where: Prisma.HotelInfoWhereInput = {}

        if (params.area) {
            where.location = {
                contains: params.area,
                mode: 'insensitive'
            };
        }

        if (params.minPrice !== null || params.maxPrice !== null) {
            where.price = {}
            if (params.minPrice !== null) {
                where.price.gte = params.minPrice;
            } if (params.maxPrice !== null) {
                where.price.lte = params.maxPrice;
            }
        }
        
        if (params.minRating !== null || params.maxRating !== null) {
            where.rating = {}
            if (params.minRating !== null) {
                where.rating.gte = params.minRating;
            } if (params.maxRating !== null) {
                where.rating.lte = params.maxRating;
            }
        }

        if (params.minReview !== null || params.maxReview !== null) {
            where.reviews = {}
            if (params.minReview !== null) {
                where.reviews.gte = params.minReview;
            } if (params.maxReview !== null) {
                where.reviews.lte = params.maxReview;
            }
        }

        if (params.star !== null || params.minStar !== null) {
            where.star = {}
            if (params.star !== null) {
                where.star = params.star;
            } else if (params.minStar !== null) {
                where.star.gte = params.minStar;
            }
        }
            

        return where;
    }

    
    async tours(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TourInfoWhereUniqueInput;
        where?: Prisma.TourInfoWhereInput;
        orderBy?: Prisma.TourInfoOrderByWithRelationInput;
    }): Promise<TourInfo[]> {
        const { skip, take, cursor, where, orderBy } = params;
        const touristTours = await this.prisma.tourInfo.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })

        return touristTours
    }


    public orchestrateQueryOne(params: {
        area?: string,
        minPrice?: number,
        maxPrice?: number,
        minRating?: number,
        maxRating?: number,
    }): Prisma.TourInfoWhereInput {
        const where: Prisma.TourInfoWhereInput = {}

        if (params.area) {
            where.location = {
                contains: params.area,
                mode: 'insensitive'
            };
        }

        if (params.minPrice !== null || params.maxPrice !== null) {
            where.price = {}
            if (params.minPrice !== null) {
                where.price.gte = params.minPrice;
            } if (params.maxPrice !== null) {
                where.price.lte = params.maxPrice;
            }
        }

        if (params.minRating !== null || params.maxRating !== null) {
            where.rating = {}
            if (params.minRating !== null) {
                where.rating.gte = params.minRating;
            } if (params.maxRating !== null) {
                where.rating.lte = params.maxRating;
            }
        }


        return where;

    }

}
