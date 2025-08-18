import { PrismaClient } from '../generated/prisma'

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
      userName: "arsd",
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
  const query = await prisma.messageRole.findMany()
  console.log("List: ", query)
}

async function createRoles(role: string) {
    const newRoles = await prisma.messageRole.create({
        data: {
            role: role
        },
    })
    console.log(newRoles)
}
createUser()
createRoles("system")
createRoles("human")
createRoles("ai")
createRoles("tool")
main()
  .catch( e => {
    console.error(e.message)
  })
  .finally( async() => {
    await prisma.$disconnect()
  })