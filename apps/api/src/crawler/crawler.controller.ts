import { Body, Controller, Get, Post } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Controller('crawler')
export class CrawlerController {
    constructor(
        private crawlerService: CrawlerService
    ) {}
    @Post()
    async getHotelInfo(@Body() params: {area: string, minPrice?: number, maxPrice?: number, numChild?: number, childAges?: number[], numAdult?: number, numRoom? : number, starRating?: number[], sortBy: string, checkOutDate?: Date, checkInDate?: Date}){
        const res = this.crawlerService.hotelCrawler(params)
        return res
    }
}
