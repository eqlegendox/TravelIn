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
    // const result = input.str + "wayaw";
    // return `Hotel Adi Permana ${input.area}, 1690 dollar a night, 5/5 reviews (4200 people);
    // Villa Kokonut, 20 dollar per hour, 4.6/5 reviews (123 people) `;
    return ` Amandaya Canggu	Canggu	Rp 947,206	9.1 (1,208 reviews)	4 out of 5	https://www.booking.com/hotel/id/amandaya-canggu.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaGiIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4AsPk9cQGwAIB0gIkZjAzODQyMmMtYTE1Zi00MDJiLTk4YTQtZGMyYjkyNmRjZmE32AIB4AIB&sid=ac81507b73df4bb67ba0d6a194114c67&aid=304142&ucfs=1&arphpl=1&checkin=2025-08-30&checkout=2025-08-31&dest_id=835&dest_type=region&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=17&hapos=17&sr_order=popularity&nflt=ht_id%3D204%3Bht_id%3D213&srpvid=ab302af6159c052e&srepoch=1755151802&all_sr_blocks=1002290901_0_1_1_0&highlighted_blocks=1002290901_0_1_1_0&matching_block_id=1002290901_0_1_1_0&sr_pri_blocks=1002290901_0_1_1_0__94720578&from=searchresults	You might be eligible for a Genius discount at Amandaya Canggu. To check if a Genius discount is available for your selected dates sign in. Genius discounts at this property are subject to book dates, stay dates and other available deals. About this property Comfortable Accommodations: Amandaya Canggu in Canggu offers family rooms with garden or pool views. Each room includes air-conditioning, a private bathroom, and modern amenities such as a minibar and free WiFi. Exceptional Facilities: Guests can relax on the sun terrace or in the lush garden. The hotel features a year-round outdoor swimming pool, outdoor seating areas, and a fitness centre. Free WiFi is available throughout the property. Delicious Breakfast: A variety of breakfast options are provided, including continental, American, and full English/Irish. Specialties include local specialities, warm dishes, fresh pastries, and vegetarian, vegan, and gluten-free choices. Prime Location: Located 16 km from Ngurah Rai International Airport, Amandaya Canggu is an 18-minute walk from Berawa Beach. Nearby attractions include Petitenget Temple (6 km) and Ubud Bus Station (10 km). Surfing is available in the surroundings. Solo travellers particularly like the location â€” they rated it 9.1 for a one-person stay. Distance in property description is calculated using Â© OpenStreetMap
    Guru Canggu	Canggu	Rp 1,500,000	9.3 (714 reviews)	4 out of 5	https://www.booking.com/hotel/id/guru-canggu-boutique-hostel.en-gb.html?label=gen173nr-10CAEoggI46AdIM1gEaGiIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4AsPk9cQGwAIB0gIkZjAzODQyMmMtYTE1Zi00MDJiLTk4YTQtZGMyYjkyNmRjZmE32AIB4AIB&sid=ac81507b73df4bb67ba0d6a194114c67&aid=304142&ucfs=1&arphpl=1&checkin=2025-08-30&checkout=2025-08-31&dest_id=835&dest_type=region&group_adults=1&req_adults=1&no_rooms=1&group_children=0&req_children=0&hpos=12&hapos=12&sr_order=popularity&nflt=ht_id%3D204%3Bht_id%3D213&srpvid=ab302af6159c052e&srepoch=1755151802&all_sr_blocks=676235108_403298625_2_0_0_396419&highlighted_blocks=676235108_403298625_2_0_0_396419&matching_block_id=676235108_403298625_2_0_0_396419&sr_pri_blocks=676235108_403298625_2_0_0_396419_150000000&from=searchresults	You might be eligible for a Genius discount at Guru Canggu. To check if a Genius discount is available for your selected dates sign in. Genius discounts at this property are subject to book dates, stay dates and other available deals. About this property Elegant Accommodation: Guru Canggu in Canggu offers a 4-star adults-only hotel with a spa, sun terrace, garden, bar, outdoor swimming pool, and free WiFi. Private check-in and check-out, a lounge, and beauty services enhance the guest experience. Comfortable Amenities: Rooms feature air-conditioning, private bathrooms with walk-in showers, garden or pool views, and modern amenities such as minibars and flat-screen TVs. Additional facilities include a hot tub, balcony, and outdoor dining area. Prime Location: Located 15 km from Ngurah Rai International Airport, Guru Canggu is a 9-minute walk from Berawa Beach. Nearby attractions include Petitenget Temple (6 km) and Ubung Bus Station (10 km). Surfing and yoga classes are available. Highly rated for excellent service and beach access. Solo travellers particularly like the location â€” they rated it 9.6 for a one-person stay. Distance in property description is calculated using Â© OpenStreetMap
`
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
