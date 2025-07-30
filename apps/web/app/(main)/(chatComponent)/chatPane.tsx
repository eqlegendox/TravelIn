"use client"

import { Button } from "@workspace/ui/components/button"
import { MoveRight } from "lucide-react"
import { useState, useEffect } from 'react';
import { fetchData, postData, fetchLlmResponse } from "./routing/serverSide";
import { boolean } from "zod";
import { Loading } from "@/components/RespondLoading";


export default function ChatPane() {
    const [messages, setMessages] = useState(null);
    const [userMessage, setUserMessage] = useState("");
    const [lastUserMessage, setLastUserMessage] = useState("")
    const [isResponded, setIsResponded] = useState(true)

    const handlePost = async () => {
        const temp = { "userMessage" : userMessage};
        const postResult = await postData(temp);
        if (postResult.idMessage) { // True if exist returned message
            const valid = true
            console.log("Result: ", postResult)
            setLastUserMessage(userMessage)
            setUserMessage("")
            loadMessages()
        }
    }

    const loadMessages = async () => {
        const fetchResult = await fetchData();
        setMessages(fetchResult.messages)
        console.log(fetchResult)
    }

    const handleRespond = async () => {
        const temp = { "userMessage" : lastUserMessage};
        setIsResponded(false)
        const postResult = await fetchLlmResponse(temp);
        setIsResponded(true)
        loadMessages()
    }

    useEffect(() => {
        const t = async () => {
            await handleRespond()
        }
        t()
    }, [lastUserMessage]);
    
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
                <div>
                    <h2>{isResponded? null : < Loading />}</h2> {/* rightside of the : is when ai is still responding maybe change to something better later */}
                </div>
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