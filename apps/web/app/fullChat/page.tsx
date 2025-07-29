"use client"

import { div } from "framer-motion/client"
import ChatPane from "../(main)/(chatComponent)/chatPane2"

export default function FullChat() {
    return (
        <>
            <div className="parent flex flex-col h-screen">
                <div className="flex-1">
                    <ChatPane />
                </div>

            </div>
        </>
    )
}