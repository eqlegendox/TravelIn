"use client"

import { Button } from "@workspace/ui/components/button"
import { MoveRight } from "lucide-react"
import { useState, useEffect, useRef } from 'react';
import { fetchData, postData, fetchLlmResponse, createNewChat } from "./routing/serverSide";
import { Loading } from "@/components/RespondLoading";
import Loaiding from "@/components/Loaiding"
import { v4 as uuidv4} from "uuid";

export default function ChatPane({bottomRef}) {
    bottomRef = useRef(null)
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        })
    })

    const [messages, setMessages] = useState(null);
    const [userMessage, setUserMessage] = useState("");
    const [lastUserMessage, setLastUserMessage] = useState("")
    const [isResponded, setIsResponded] = useState(true)
    const [currentIdV4, setCurrentIdV4] = useState("")
    const [persistence, setPersistence] = useState(true)

    const handlePost = async () => {
        const temp = { "userMessage" : userMessage};
        const postResult = await postData(currentIdV4,temp);

        if (!currentIdV4) {
            console.log("Creating new chat1")
            instantiateNewChat()
        }
        if (postResult.idMessage) { // True if exist returned message
            console.log("Result: ", postResult)
            setLastUserMessage(userMessage)
            setUserMessage("")
            loadMessages()
        }
    }

    const loadMessages = async () => {
        const fetchResult = await fetchData(currentIdV4);
        setMessages(fetchResult.messages)
        console.log(fetchResult)
    }

    const handleRespond = async () => {
        if (isResponded) {
            const temp = { "userMessage" : lastUserMessage};
            setIsResponded(false)
            const postResult = await fetchLlmResponse(currentIdV4, temp);
            setIsResponded(true)
        }
    }

    const instantiateNewChat = async () => {
        const tempUuid = uuidv4();
        setCurrentIdV4(tempUuid)

        if (tempUuid) {
            console.log("Creating new chat2")
            const tempNewChat = createNewChat(tempUuid)
            console.log("Creating new chat3")
        }
    }

    useEffect(() => {
        const t = async () => {
            await handleRespond()
            loadMessages()
        }
        t()
    }, [lastUserMessage]);
    
    useEffect(() => {
        loadMessages()
    }, []);
    
    return (
        <>
        {/* <Loaiding /> */}
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
                        if (i.aiMessage) {
                            return (
                                <div className="px-2 py-1 bg-primary text-background rounded-sm max-w-72/100 break-words place-self-start">{i.aiMessage}</div>
                            )
                        }
                    }
                ): "No conversation found, try asking something!" }
                <div>
                    <h2>{isResponded? null : < Loaiding />}</h2> {/* rightside of the : is when ai is still responding maybe change to something better later */}
                </div>
                    <div className="float clear" ref={bottomRef} />
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