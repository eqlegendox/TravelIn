const { tool } = require("@langchain/core/tools");
import { CrawlerController } from "src/crawler/crawler.controller";
import { CrawlerService } from "src/crawler/crawler.service";
// const { z } = require("zod");
import * as z from "zod";
const dbHotelSchema = z.object({
  area: z.string(),
});

const dbHotelTool = tool(
  async (input) => {
    const result = input.str + "wayaw";
    return `Hotel Adi Permana ${input.area}, 1690 dollar a night, 5/5 reviews (4200 people);
    Villa Kokonut, 20 dollar per hour, 4.6/5 reviews (123 people) `;
  
  },
  {
    name: "hotelDatabaseQuery",
    description: `You need to call this tool when user ask for hotel detail,
    it accepts a general location in bali (please only pass one location, either the general or specific area) 
    and will output some top hotel detail refering to the query.
    after receiving this output please present it to the user as beautifully as possible`,
    schema: dbHotelSchema,
  }
);


const dbTourSchema = z.object({
    area: z.string(),
});

const dbTourTool = tool(
    async (input) => {
        // define prisma query here
        return `Taman Pancing ${input.area}, 20 dollar ticket fee, 1/5 reviews (4200 people);
    Taman boxing ${input.area}, 54k rupiah pay per view, 4.6/5 reviews (13223 people) `
    },
    {
        name: "tourDatabaseQuery",
        description: `You need to call this tool when user ask for tour destination detail,
        it accepts a general location in bali (please only pass one location, either the general or specific area) 
        and will output some random destination in that area.
        after receiving this output please present it to the user as beautifully as possible`,
        schema: dbTourSchema,
    }
)

const crawlerParamaters = z.object({
  area: z.string().min(1).max(30),
  minPrice: z.number().min(0).optional().transform(e => e === 0 ? undefined : e),
  maxPrice: z.number().min(0).optional().transform(e => e === 0 ? undefined : e),
  numChild: z.number().min(0).optional().transform(e => e === 0 ? undefined : e),
  childAges: z.array(z.number()).optional().transform(e => e?.length === 0 ? undefined : e),
  numAdult: z.number().min(0).optional().transform(e => e === 0 ? undefined : e),
  numRoom: z.number().min(0).optional().transform(e => e === 0 ? undefined : e),
  starRating: z.array(z.number()).optional().transform(e => e?.length === 0 ? undefined : e),
  sortBy: z.enum(["lowest_price", "highest_price", "review", "highest_star", "recommended"]),
  checkInDate: z.string().optional().transform(e => e === "" ? undefined : e),
  checkOutDate: z.string().optional().transform(e => e === "" ? undefined : e)
});

const hotelCrawlerTool = tool(
  async (input) => {
    const crawler = new CrawlerService()
    const data = crawler.hotelCrawler(input)
    return JSON.stringify(await data)
  },
  {
    name: "hotelWebCrawler",
    description: `You need to call this tool when user asks for hotel information that doesn't
     exist in the hotelDatabase or when you want to search for hotel with specific requirements.
     It accepts a general location in Bali (pass only one location, specific area or general area)
     and hotel requirements. Date format is 'YYYY-MM-DD.`,
     schema: crawlerParamaters
  }
)
const TOOLS = [dbHotelTool, dbTourTool, hotelCrawlerTool]

// module.exports = { TOOLS };
export { TOOLS }
