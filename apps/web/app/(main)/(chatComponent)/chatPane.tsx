"use client"

import { Button } from "@workspace/ui/components/button"
import { MoveRight } from "lucide-react"
import { useState, useEffect } from 'react';
import { fetchData, postData, fetchLlmResponse } from "./routing/serverSide";


export default function ChatPane() {
    const [messages, setMessages] = useState(null);
    const [userMessage, setUserMessage] = useState("");
    const [lastUserMessage, setLastUserMessage] = useState("")
    const [tick, setTick] = useState(0)

    const handlePost = async () => {
        const temp = { "userMessage" : userMessage};
        const postResult = await postData(temp);
        if (postResult.idMessage) {
            const valid = true
            console.log("Result: ", postResult)
            setLastUserMessage(userMessage)
            setUserMessage("")
            setTick(tick + 1)
            loadMessages()
        }
    }

    const loadMessages = async () => {
        const fetchResult = await fetchData();
        setMessages(fetchResult.messages)
        console.log(fetchResult)
    }

    const handleRespond = async () => {
        // console.log("handleRespond")
        const temp = { "userMessage" : lastUserMessage};
        const postResult = await fetchLlmResponse(temp);
        loadMessages()
    }

    useEffect(() => {
        // console.log("yeah")
        const t = async () => {
            await handleRespond()
        }
        t()
    }, [tick]);
    
    useEffect(() => {
        loadMessages()
    }, []);

    return (
        <>
        <div className="flex flex-col h-full p-1 bg-background rounded-lg">
            {/* Chat */}
            <div className="flex-grow p-2 w-full overflow-y-auto bg-secondary rounded-md ">
                {/* Current issue text size isn't working properly */}
                <div className="flex flex-col gap-2 text-sm md:text-md lg:text-lg">
                    { Array.isArray(messages) ? messages.map((i, t) => {
                        if (i.userMessage) {
                            return (
                                <div className="px-2 py-1 bg-background rounded-sm max-w-72/100 break-words place-self-end">{i.userMessage}</div>
                            )
                        }
                        return (
                            <div className="px-2 py-1 bg-primary text-background rounded-sm max-w-72/100 break-words place-self-start">{i.aiMessage}</div>
                        )
                    }
                ): "Loading..." }
                </div>
            </div>

            {/* Input Scetion */}
            <div className="p-1 flex border-t shrink-0 bg-background">
                <div className="flex items-center gap-1 w-full">
                    <input
                        type="text" 
                        name="user_message"
                        id="user_message"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        placeholder="Type a message.."
                        className="flex-grow w-full lg:text-lg sm:text-sm p-2 border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                        />
                    <Button onClick={handlePost}><MoveRight className="w-2 h-2 font-bold"/></Button>
                </div>
            </div>
        </div>
        </>
    )
}