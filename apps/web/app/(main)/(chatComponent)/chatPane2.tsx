"use client"

import { Button } from "@workspace/ui/components/button"
import { MoveRight } from "lucide-react"
import { useState, useEffect } from 'react';
import { fetchData, postData } from "../testingStuff/serverSide";
import { boolean } from "zod";

export default function ChatPane() {
    // let temp = [
    //     'Hello, saya John', 
    //     'Hello, how can i help you today?', 
    //     'I would like to plan a trip...', 
    //     'Sure, here is ...', 
    // ]

    const [tick, setTick] = useState(0);
    const [messages, setMessages] = useState(null);
    const [userMessage, setUserMessage] = useState("");

    useEffect(() => {
        const loadMessages = async () => {
            const fetchResult = await fetchData();
            setMessages(fetchResult)
            console.log(fetchResult)
        }
        loadMessages()
    }, [tick]);

    const handlePost = async () => {
        const temp = { "user_message" : userMessage};
        const postResult = await postData(temp);
        if (postResult) {
            setUserMessage("")
            setTick(tick + 1)
        }
    }
    

    return (
        <>
        <div className="flex flex-col h-full p-1 bg-background rounded-lgcd">
            {/* Chat */}
            <div className="flex-grow p-2 w-full h-min-vh overflow-y-auto bg-secondary rounded-md ">
                {/* Current issue full page couldn't be filled and overflow isn't handled */}
                <div className="flex flex-col gap-2 text-sm">
                    { Array.isArray(messages) ? messages.map((i, t) => {
                        if (i.user_message) {
                            return (
                                <div className="px-2 py-1 bg-background rounded-sm max-w-72/100 break-words place-self-end">{i.user_message}</div>
                            )
                        }
                        return (
                            <div className="px-2 py-1 bg-primary text-background rounded-sm max-w-72/100 break-words place-self-start">{i.ai_message}</div>
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
                        className="flex-grow w-full text-sm p-2 border rounded-md focus:ring-2 focus:ring-ring focus:outline-none"
                        />
                    <Button onClick={handlePost}><MoveRight className="w-2 h-2 font-bold"/></Button>
                </div>
            </div>
        </div>
        </>
    )
}