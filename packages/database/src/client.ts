import { PrismaClient } from "../generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";


const test = new PrismaClient()

async function create() {
  // const test1 = await test.chat.create({data: {}})
  // console.log("Created1: ", test1)
  // const test2 = await test.tempUserChats.create({
  //   data: {
  //     chat_id: "99e34a44-6905-4bad-89f8-2bac9bba1182"
  //   }
  // })
  // console.log("Created2: ", test2)
}

async function main() {
  
  const b = await test.userChats.deleteMany()
  const c = await test.tempUserChats.deleteMany()
  const a = await test.chat.deleteMany()

  const user1 = await test.userChats.findMany()
  const user2 = await test.tempUserChats.findMany()
  const user3 = await test.userChats.findMany()
  console.log(user1, "a\n", user2, "b\n", user3)
}

create()
main()
  .catch( e => {
    console.error(e.message)
  })
  .finally( async() => {
    await test.$disconnect()
  })