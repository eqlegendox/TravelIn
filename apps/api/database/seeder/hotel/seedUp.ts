import data from './hotel'
// import { PrismaService } from '../../../src/prisma/prisma.service';
import { PrismaClient, Prisma, HotelInfo } from '../../generated/prisma'

const prisma = new PrismaClient()
const batch = 30

const batch_size = Math.floor(data.length / batch)
const batch_remainder = data.length - (batch_size * batch)

let batch_array: number[] = []
for (let i = 0; i < batch; i++) {
    batch_array[i] = i < batch_remainder ? batch_size + 1 : batch_size
}

console.log('Batch Sizes:', batch_array)

async function uploadBatches() {
    let counter = 0

    for (const btch_size of batch_array) {
        const batch_data = data.slice(counter, counter + btch_size)

        // console.log(batch_data[0])


        try {
            await prisma.hotelInfo.createMany({
                data: batch_data.map(({ id, ...hotel }) => hotel)

                // Filter out records missing any required fields
                .filter(hotel =>
                hotel.hotelName &&
                hotel.location &&
                hotel.price !== undefined &&
                hotel.link &&
                hotel.description
                )

                // Default nullable values to 0
                .map(hotel => ({
                ...hotel,
                rating: hotel.rating ?? 0,
                reviews: hotel.reviews ?? 0,
                star: hotel.star ?? 0
                })),
                skipDuplicates: true 
            })
            console.log(`Uploaded batch of ${btch_size} records.`)
        } catch (error) {
            console.error(`Error uploading batch at index ${counter}:`, error)
        }

        counter += btch_size
    }

    console.log('All batches uploaded.')
    await prisma.$disconnect()
}

uploadBatches()
