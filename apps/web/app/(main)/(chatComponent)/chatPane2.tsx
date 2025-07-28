"use client"
import { ChatForm } from "@/components/ChatForm"
import { Button } from "@workspace/ui/components/button"
import { MoveRight } from "lucide-react"

export default function ChatPane() {
    let temp = [
        'Hello, saya John', 
        'Hello, how can i help you today?', 
        'I would like to plan a trip...', 
        'Sure, here is ...', 
    ]

    return (
        <>
        <div className="flex flex-col h-full p-1 bg-background rounded-lgcd">
            {/* Chat */}
            <div className="flex-grow p-2 w-full h-min-vh overflow-y-auto bg-secondary rounded-md ">
                {/* Current issue full page couldn't be filled and overflow isn't handled */}
                <div className="flex flex-col gap-2 text-sm">
                    { temp.map((t, i) => {
                        if (i % 2 === 0) {
                            return (
                                <div className="px-2 py-1 bg-background rounded-sm max-w-72/100 break-words place-self-end">{t}</div>
                            )
                        }
                        return (
                            <div className="px-2 py-1 bg-primary text-background rounded-sm max-w-72/100 break-words place-self-start">{t}</div>
                        )
                    }
                
                )}
                </div>
            </div>

            {/* Input Scetion */}
            <div className="p-1 flex border-t shrink-0 bg-background">
                <ChatForm />
            </div>
        </div>
        </>
    )
}