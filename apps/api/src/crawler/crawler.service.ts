import { HttpException, HttpStatus, Injectable, OnModuleInit } from '@nestjs/common';
import { ElementHandle, Browser, Page } from 'puppeteer';
import { MyLoggerService } from '../my-logger/my-logger.service';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
puppeteer.use(StealthPlugin());

@Injectable()
export class CrawlerService{
    private logger: MyLoggerService
    constructor() {
        this.logger = new MyLoggerService()
    }

    async hotelCrawler(params: {area: string, minPrice?: number, maxPrice?: number, numChild?: number, childAges?: number[], numAdult?: number, numRoom? : number, starRating?: number[], sortBy: string, checkOutDate?: Date, checkInDate?: Date}): Promise<{}[] | void> {
        const startTime = performance.now()

        let error;
        let errorLink;

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

            const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
            const page: Page = await browser.newPage();
            await page.setUserAgent(userAgent);
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
                    error = new Error('Element bounding box not found');
                }
            };

            await page.goto('https://www.tiket.com/hotel', { waitUntil: 'networkidle2' });

            try {
                const locationChoser = await page.waitForSelector("div[class*='SearchForm_input_var_b__frc_L SearchForm_input_destination__']", { visible: true, timeout: 10000 });
                await locationChoser?.click()
                
                const locationInput = await page.waitForSelector("div[class*='SearchBox_placeholder__']", {timeout: 5000})
                const locationTextField = await locationInput?.$('label > input')
                await locationTextField?.type(params.area, {delay: 200})

                let locationButton
                try {
                    locationButton = await page.waitForSelector('[class*="HotelListItem_heading_text__"]', { visible: true, timeout: 5000 })
                    const locationButtonText = await page.evaluate(el => el?.textContent, locationButton)
                    if (locationButtonText?.toLowerCase() !== params.area.toLowerCase()) {
                        error = new HttpException('Area not found', HttpStatus.NOT_FOUND)
                    }
                } catch {
                    error = new HttpException('Area not found', HttpStatus.NOT_FOUND)
                    throw error
                }
                await locationButton?.click()
                
                const searchSubmitButton = await page.waitForSelector('[aria-label="search"]', { visible: true, timeout: 5000 });
                searchSubmitButton? await hoverAndClick(searchSubmitButton) : null
                
                try {
                    await page.waitForSelector('[class*="FullProductCard_container__"]', { visible: true, timeout: 30000 })
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
                    errorLink = config.query
                    await page.goto(config.query)
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
                        for (const hot of hotels) {
                            let hotelName, location, starCount, facilities, rating, price, link;
                            
                            let isPromotion: boolean
                            try {
                                await hot.waitForSelector('::-p-xpath(.//div[contains(@class,"main_intercept_banner_wrapper__")])', { timeout: 500 });
                                isPromotion = true
                            } catch { isPromotion = false }
                            if (isPromotion) continue

                            const hotelNameEl = await hot.waitForSelector('::-p-xpath(.//div[contains(@class,"FullProductCard_content_wrapper__")]//h3)', { timeout: 500 });
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
                            try {
                                rating = await hot.$eval('::-p-xpath(.//div[contains(@class,"ProductRatingAndReviews_rating_text__")])', el => el.textContent);
                            } catch {
                                rating = "unknown"
                            }
                            try {
                                price = await hot.$eval('::-p-xpath(.//div[contains(@class,"PriceArea_price_description__")])', el => el.textContent);
                            } catch {
                                price = "unknown"
                            }
                            try {
                                link = await hot.$eval('::-p-xpath(.//a[contains(@class,"FullProductCard_container__")])', el => el.getAttribute('href'));
                                link = "//tiket.com".concat(link)
                            } catch {
                                link = "unknown"
                            }

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
                            }
                        }

                        if (!isNew) {
                            tries = tries + 1
                        } else {
                            isNew = false
                        }
                    }

                    if (tries >= 3 && hotelsData.length == 0){
                        error = new HttpException(`Nothing found, link: ${errorLink}`, HttpStatus.NOT_FOUND)
                        throw error
                    }
                    hotelsData.shift()
                    await browser.close();
                    // console.log(errorLink, hotelsData)
                    this.logger.log(`Hotel Crawl Success, duration: ${performance.now() - startTime}`)
                    return hotelsData
                } catch (error) {
                    error = new HttpException(`${error}`, HttpStatus.NOT_FOUND)
                    throw error
                }
            } catch (err) {
                error = new HttpException(`${err}`, HttpStatus.INTERNAL_SERVER_ERROR)
                throw error
            }
        } catch (e) {
            error = new HttpException(`${e}`, HttpStatus.INTERNAL_SERVER_ERROR)
            throw error
        }
    }
}
