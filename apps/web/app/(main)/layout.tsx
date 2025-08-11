"use client"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import ChatToggler from "./(chatComponent)/chatToggler"
import { Metadata, Viewport } from "next"
import { v4 as uuidv4} from "uuid";
import { useEffect, useState } from "react"
import { createNewChat, fetchUserId, fetchChat } from "./(chatComponent)/routing/serverSide"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})


// export const metadata : Metadata = {
//   title: "TravelIn",
//   description: "Travel di bali Ingat TravelIn",
// }

// export const viewport : Viewport = {
//   width: 'device-width',
//   initialScale: 1,
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [currentUserId, setCurrentUserId] = useState("")
  const [currentChatId, setCurrentChatId] = useState("")

  const instantiateNewChat = async () => {
    const handleNewChat = async () => {
      const newChat = await createNewChat(currentUserId)
      setCurrentChatId(newChat.id)
      sessionStorage.setItem("chatId", newChat.id)
    }
    const prevChatId = sessionStorage.getItem("chatId")
    if (prevChatId === null){
      console.log("No prev chat id found")
      handleNewChat()
    } else {
      console.log("Using prev chat id")
      setCurrentChatId(prevChatId)
    }
  }

  const getUserId = async() => {
    const response = await fetchUserId();
    if (!response.error) {
        setCurrentUserId(response.id)
    }
  }

  useEffect(() => {
    getUserId()
  }, [])

  useEffect(() => {
    if (currentUserId !== ""){
      instantiateNewChat()
    }
  }, [currentUserId])

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased flex w-vw`}
      >
        <Providers>{children}</Providers>
        <div>{currentChatId? <ChatToggler currentChatId={currentChatId} currentUserId={currentUserId}/> : null}</div>
      </body>
    </html>
  )
}
