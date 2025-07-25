"use client"

import { Button } from "@workspace/ui/components/button"
import { MoveRight } from "lucide-react"

export default function ChatPane() {
    let temp = ['aha', 'ehe', 'wahwa', 'wihiw', 'hello', 'heyo', 'halo', 'hola', 'bola', 'kola', 'kelo', 'moga', 'mogi','aha', 'ehe', 'wahwa', 'wihiw', 'hello', 'heyo', 'halo', 'hola', 'bola', 'kola', 'kelo', 'moga', 'mogi','aha', 'ehe', 'wahwa', 'wihiw', 'hello', 'heyo', 'halo', 'hola', 'bola', 'kola', 'kelo', 'moga', 'mogi',]

    return (
        <>
        <div className="flex flex-col h-full p-1">
            {/* Chat */}
            <div className="flex-grow p-2 w-full overflow-y-auto bg-secondary self-center rounded-md max-h-80%">
                <div className="flex flex-col gap-1 w-full text-sm overflow-wrap">
                    {/* current issues is how to wrap text */}
                    { temp.map((t, i) => {
                        if (i % 2 === 0) {
                            return (
                                <div className="px-2 bg-background rounded-sm w-fit place-self-end">{t}</div>
                            )
                        }
                        return (
                            <div className="px-2 bg-primary text-background rounded-sm w-fit place-self-start">{t}</div>
                        )
                    }
                
                )}
                </div>
            </div>

            {/* Input Scetion */}
            <div className="p-1 flex border-t shrink-0 bg-background">
                <div className="flex items-center gap-1">
                    <input
                        type="text" 
                        placeholder="Type a message.."
                        className="flex-grow text-sm p-2 size-full border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                        />
                    <Button><MoveRight className="w-2 h-2 font-bold"/></Button>
                </div>
            </div>
        </div>
        </>
    )
}