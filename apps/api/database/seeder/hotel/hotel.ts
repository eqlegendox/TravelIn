import Papa from 'papaparse'
import fs from 'node:fs'

type Hotel = {
    id: number,
    hotelName: string,
    location: string,
    price: number,
    link: string,
    description: string,
    rating: number,
    reviews: number,
    star: number,
}

const file = fs.readFileSync('./final_hotel_real.csv', 'utf-8');

const parsed = Papa.parse<Hotel>(file, {
    dynamicTyping: true,
    header: true,
    skipEmptyLines: true,
})

const {data} = parsed 

export default data



