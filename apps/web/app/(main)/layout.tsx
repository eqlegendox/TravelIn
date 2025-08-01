// "use client"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import ChatToggler from "./(chatComponent)/chatToggler"
import { Metadata, Viewport } from "next"
import { v4 as uuidv4} from "uuid";

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

export const viewport : Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased flex w-vw`}
      >
        <Providers>{children}</Providers>
        <ChatToggler uUID={uuidv4()}/>

      </body>
    </html>
  )
}
