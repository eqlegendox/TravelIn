import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NONAME } from 'dns';
import { writeFile } from 'fs';
import { ElementHandle, Browser, Page } from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
puppeteer.use(StealthPlugin());

interface HotelData {
  hotelName: string | null;
  hotelStarRating: number;
  location: string | null;
  facilities: string | null;
  rating: string | null;
  price: string | null;
  link: string | null;
}

@Injectable()
export class CrawlerService {
    async testCrawler(params: {area: string, minPrice?: number, maxPrice?: number, numChild?: number, childAges?: number[], numAdult?: number, numRoom? : number, starRating?: number[], sortBy: string, checkOutDate?: Date, checkInDate?: Date}): Promise<{}[]> {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const twoDaysLater = new Date(today);
        twoDaysLater.setDate(today.getDate() + 2);
        const config = {
            query: "",
            minPrice: params?.minPrice ?? null, 
            maxPrice: params?.maxPrice ?? null, 
            numChild: params?.numChild ?? 0, 
            childAges: params?.childAges     ?? [], 
            numAdult: params?.numAdult ?? null, 
            numRoom: params?.numRoom ?? null, 
            starRating: params?.starRating ?? [], 
            sortBy: params?.sortBy === "recommended" ? null : params.sortBy,
            checkInDate: params?.checkInDate ?? tomorrow.toISOString().split('T')[0],
            checkOutDate: params?.checkOutDate ?? twoDaysLater.toISOString().split('T')[0]
        }
        console.log(params)
        console.log(config)
        const dummyData = [
            {
                "hotelName": "Yans House Hotel Kuta",
                "hotelStarRating": 5,
                "location": "Kuta, Badung",
                "facilities": "100% Refund & RescheduleSarapan GratisBayar di HotelKolam Renang+2",
                "rating": "4,6/5(742)",
                "price": " IDR 912.448)",
                "link": "/hotel/indonesia/yans-house-hotel-kuta-610001696402853466?room=1&adult=2&checkin=2025-08-25&checkout=2025-08-26&child=12&searchSessionId=F51E0160-CADC-4409-851F-B9E8F64973AF&isFromSRP=true&referrer=https%3A%2F%2Fwww.tiket.com%2Fhotel%2Fsearch%3Froom%3D1%26adult%3D2%26id%3Dkuta-108001534490276350%26type%3DAREA%26q%3DKuta%26checkin%3D2025-08-25%26checkout%3D2025-08-26%26searchSessionId%3D6DF83747-2EF5-4FB0-A5CB-54B2AF65A89B%26child%3D12%26sort%3Dundefined&utm_page=searchResultPage"
            },
            {
                "hotelName": "Ramada by Wyndham Bali Sunset Road Kuta",
                "hotelStarRating": 4,
                "location": "Kuta, Badung",
                "facilities": "Sarapan GratisKolam RenangParkir GratisWifi Gratis",
                "rating": "4,1/5(1.088)",
                "price": " IDR 2.649.999)",
                "link": "/hotel/indonesia/ramada-by-wyndham-bali-sunset-road-kuta-807001751612805075?room=1&adult=2&checkin=2025-08-25&checkout=2025-08-26&child=12&searchSessionId=F51E0160-CADC-4409-851F-B9E8F64973AF&isFromSRP=true&referrer=https%3A%2F%2Fwww.tiket.com%2Fhotel%2Fsearch%3Froom%3D1%26adult%3D2%26id%3Dkuta-108001534490276350%26type%3DAREA%26q%3DKuta%26checkin%3D2025-08-25%26checkout%3D2025-08-26%26searchSessionId%3D6DF83747-2EF5-4FB0-A5CB-54B2AF65A89B%26child%3D12%26sort%3Dundefined&utm_page=searchResultPage"
            },
            {
                "hotelName": "Ramada Encore by Wyndham Bali Seminyak",
                "hotelStarRating": 4,
                "location": "Seminyak, Badung",
                "facilities": "Sarapan GratisBayar di HotelKolam RenangParkir Gratis+1",
                "rating": "4,4/5(2.580)",
                "price": " IDR 5.591.357)",
                "link": "/hotel/indonesia/ramada-encore-by-wyndham-bali-seminyak-807001752218274968?room=1&adult=2&checkin=2025-08-25&checkout=2025-08-26&child=12&searchSessionId=F51E0160-CADC-4409-851F-B9E8F64973AF&isFromSRP=true&referrer=https%3A%2F%2Fwww.tiket.com%2Fhotel%2Fsearch%3Froom%3D1%26adult%3D2%26id%3Dkuta-108001534490276350%26type%3DAREA%26q%3DKuta%26checkin%3D2025-08-25%26checkout%3D2025-08-26%26searchSessionId%3D6DF83747-2EF5-4FB0-A5CB-54B2AF65A89B%26child%3D12%26sort%3Dundefined&utm_page=searchResultPage"
            },
        ]
        return dummyData
    }
    async hotelCrawler(params: {area: string, minPrice?: number, maxPrice?: number, numChild?: number, childAges?: number[], numAdult?: number, numRoom? : number, starRating?: number[], sortBy: string, checkOutDate?: Date, checkInDate?: Date}): Promise<{}[]> {
        console.log("U call me?")
        
        const sourceUrls = [""] // Hotel Website Links

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const twoDaysLater = new Date(today);
        twoDaysLater.setDate(today.getDate() + 2);

        const config = {
            query: "",
            minPrice: params?.minPrice ?? null, 
            maxPrice: params?.maxPrice ?? null, 
            numChild: params?.numChild ?? 0, 
            childAges: params?.childAges ?? [], 
            numAdult: params?.numAdult ?? null, 
            numRoom: params?.numRoom ?? null, 
            starRating: params?.starRating ?? [], 
            sortBy: params?.sortBy === "recommended" ? null : params.sortBy,
            checkInDate: params?.checkInDate ?? tomorrow.toISOString().split('T')[0],
            checkOutDate: params?.checkOutDate ?? twoDaysLater.toISOString().split('T')[0]
        }

        console.log(params, config)

        const operations = {
            minPrice: value => { 
                config.query = config.query + `&minPrice=${config.minPrice}`
                if (!config.query.includes('&priceFilterCurrency=IDR'))  config.query = config.query + '&priceFilterCurrency=IDR'
            },
            maxPrice: value => { 
                config.query = config.query + `&maxPrice=${config.maxPrice}`
                if (!config.query.includes('&priceFilterCurrency=IDR'))  config.query = config.query + '&priceFilterCurrency=IDR'
            },
            numChild: value => { 
                for (let i = 1; i <= config.numChild; i++) {
                    config.query = config.query + `&child=${config.childAges[i-1]? config.childAges[i-1] : 12}`
                }
            },
            numAdult: value => { config.query = config.query.replace('&adult=1', `&adult=${config.numAdult}`) },
            numRoom: value => { config.query = config.query.replace('&room=1', `&room=${config.numRoom}`) },
            starRating: value => { 
                for (let i = 1; i <= config.starRating.length; i++) {
                    if (i > 1) {
                        config.query = config.query + `%2C${config.starRating[i-1]}`
                    } else {
                        config.query = config.query + `&starRatings=${config.starRating[i-1]}`
                    }
                }
            },
            sortBy: value => { config.query = config.query + `&sort=${config.sortBy}` },
            checkInDate: value => { config.query = config.query.replace(/&checkin=\d{4}-\d{2}-\d{2}/, `&checkin=${config.checkInDate}`) },
            checkOutDate: value => { config.query = config.query.replace(/&checkout=\d{4}-\d{2}-\d{2}/, `&checkout=${config.checkOutDate}`) }
        };

        let browser: Browser
        try {
            browser = await puppeteer.launch({
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-blink-features=AutomationControlled'
                ]
            })

            const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
            const page: Page = await browser.newPage();
            await page.setUserAgent(ua);
            await page.setViewport({
                width: 1366,
                height: 768,
                deviceScaleFactor: 1,
                isMobile: false
            });

            const hoverAndClick = async (element: ElementHandle<Element>): Promise<void> => {
                const box = await element.boundingBox();
                if (box) {
                await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
                await new Promise(resolve => setTimeout(resolve, 300));
                await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
                } else {
                throw new Error('Element bounding box not found');
                }
            };

            

            await page.goto('https://www.tiket.com/hotel', { waitUntil: 'networkidle2' });
            console.log('Page Title:', await page.title());

            try {
                const locationChoser = await page.waitForSelector("div[class*='SearchForm_input_var_b__frc_L SearchForm_input_destination__']", { visible: true, timeout: 10000 });
                await locationChoser?.click()
                
                const locationInput = await page.waitForSelector("div[class*='SearchBox_placeholder__']", {timeout: 5000})
                const locationTextField = await locationInput?.$('label > input')
                await locationTextField?.type(params.area, {delay: 200})

                const locationButton = await page.waitForSelector('[class*="HotelListItem_heading_text__"]', { visible: true, timeout: 5000 })
                const locationButtonText = await page.evaluate(el => el?.textContent, locationButton)
                if (locationButtonText?.toLowerCase() !== params.area.toLowerCase()) {
                    throw new HttpException('Area not found', HttpStatus.NOT_FOUND)
                }
                await locationButton?.click()
                
                const searchSubmitButton = await page.waitForSelector('[aria-label="search"]', { visible: true, timeout: 5000 });
                console.log(await page.evaluate(el => el?.textContent, searchSubmitButton))
                searchSubmitButton? await hoverAndClick(searchSubmitButton) : null
                
                if (await page.waitForSelector('[class*="FullProductCard_container__"]', { visible: true, timeout: 30000 })) {
                    let currentUrl = await page.url()
                    
                    config.query = currentUrl
                    const updateURL = async () => {
                        for (const [key, value] of Object.entries(config)) {
                            if (value !== null && operations[key]) {
                                operations[key](value);
                            }
                        }
                    }
                    await updateURL()

                    console.log(config.query)
                    await page.goto(config.query)
                    console.log('Page Title:', await page.title());
                    const hotelsData = [{}]
                    const seenLinks = new Set();
                    
                    let tries = 1
                    let isNew = false
                    while (hotelsData.length <= 10 && tries <= 3) {
                        await page.evaluate(() => {
                            window.scrollBy(0, window.innerHeight)
                        })
                        await new Promise(resolve => setTimeout(resolve, 1000))

                        const hotels = await page.$$('[class*="main_list_item__"]')
                        console.log(hotels.length)
                        for (const hot of hotels) {
                            let hotelName, location, starCount, facilities, rating, price, link;

                            const hotelNameEl = await hot.waitForSelector('::-p-xpath(.//div[contains(@class,"FullProductCard_content_wrapper__")]//h3)', { timeout: 5000 });
                            hotelName = await hotelNameEl?.evaluate(el => el.textContent);

                            location = await hot.$eval('::-p-xpath(.//span[contains(@class,"FullProductCard_hotel_address__")])', el => el.textContent);

                            try {
                                const starsBox = await hot.waitForSelector('::-p-xpath(.//div[contains(@class,"PropertyStarRating_property_star_rating_container__")])', { timeout: 500 });
                                starCount = await starsBox?.evaluate(el => {
                                    const svgCount = el.querySelectorAll('svg').length;
                                    return svgCount > 0 ? svgCount : el.querySelectorAll('div').length || "unknown";
                                });
                            } catch {
                                starCount = "unknown";
                            }

                            facilities = await hot.$eval('::-p-xpath(.//div[contains(@class,"ProductBenefits_benefits_wrapper__")])', el => el.textContent);
                            rating = await hot.$eval('::-p-xpath(.//div[contains(@class,"ProductRatingAndReviews_rating_text__")])', el => el.textContent);
                            price = await hot.$eval('::-p-xpath(.//div[contains(@class,"PriceArea_price_description__")])', el => el.textContent);
                            link = await hot.$eval('::-p-xpath(.//a[contains(@class,"FullProductCard_container__")])', el => el.getAttribute('href'));

                            const data = {
                                hotelName: hotelName,
                                hotelStarRating: starCount,
                                location: location,
                                facilities: facilities,
                                rating: rating,
                                price: price,
                                link: link
                            }

                            if (!seenLinks.has(link)) {
                                seenLinks.add(link);
                                isNew = true
                                hotelsData.push(data)
                                console.log("New data found")
                            }
                        }

                        if (!isNew) {
                            tries = tries + 1
                            console.log("No new data found!")
                        } else {
                            isNew = false
                        }
                    }
                    
                    hotelsData.shift()
                    writeFile("hotelsInfo.json", JSON.stringify(hotelsData), err => {
                        if (err) console.error("Error writing to file:", err);
                        else console.log("File written successfully!");
                    });
                    console.log(hotelsData)
                    console.log(hotelsData.length)
                    await browser.close();
                    return hotelsData
                } else if(await page.waitForSelector('[class*="NoSearchResult_no_result_found_wrapper__eGoN9"]', { visible: true, timeout: 30000 })) {
                    console.log("Nothing found")
                    throw new HttpException('Nothing found', HttpStatus.NOT_FOUND)
                }
            } catch (err) {
                console.log(err)
            }
            await browser.close();
        } catch (e) {
            console.log(e)
            return e
        }
        throw new HttpException('Crawl failed', HttpStatus.INTERNAL_SERVER_ERROR)
    }
}
