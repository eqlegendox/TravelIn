import { PrismaClient } from '../generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient()

async function createUser() {
  const newUser = await prisma.user.create({ data: {}})
  console.log("Created user: ", newUser)
  return newUser.id
}

async function createChat(id: string) {
  const newChat = await prisma.chat.create({
    data: {
      userId: id, //insert uuid
    }
  })

  console.log("Created chat: ", newChat)
  return newChat.id
}

async function createUserDetail(id: string) {
  const newUserDetail = await prisma.userDetail.create({
    data: {
      id: id,
      email: "test@gmail.com",
      password: "123"
    }
  })
  console.log(newUserDetail)
}

async function createChatMessage(id: string) {
  const newChatMessage = await prisma.chatMessages.create({
    data: {
      chatId: id,
      message: "a",
      messageRoleId: 1
    }
  })
  console.log(newChatMessage)
}
async function deleteTable(id: string) {
  const deleted = await prisma.user.delete({
    where: {
      id: id
    }
  })
  console.log("Deleted: ", deleted)
}

async function main() {
  // const id = await createUser()
  // const chatId = await createChat(id)
  // await createUserDetail(id)
  // await createChatMessage(chatId)
  await deleteTable("c7d83350-bb37-4b14-85f4-c9fae88c9eaa")
  const user = await prisma.user.findMany()
  console.log("List: ", user)
}


main()
  .catch( e => {
    console.error(e.message)
  })
  .finally( async() => {
    await prisma.$disconnect()
  })