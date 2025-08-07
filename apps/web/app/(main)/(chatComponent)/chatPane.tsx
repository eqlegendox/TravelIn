"use client"

import { Button } from "@workspace/ui/components/button"
import { MoveRight } from "lucide-react"
import { fetchMessage, postMessage, fetchLlmResponse, createNewChat, fetchUserId, fetchChat } from "./routing/serverSide";
import { useState, useEffect, useRef, useReducer } from 'react';
import { Loading } from "@/components/RespondLoading";
import Loaiding from "@/components/Loaiding"
import Warning from "@/components/Warning";
// import reducer from "./messageHandler";

export default function ChatPane({bottomRef, uUID}) {
    const currentIdV4 = uUID;
    
    // bottomRef = useRef(null)
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        })
    })

    // const [state, dispatch] = useReducer(reducer, )

    const [messages, setMessages] = useState(null);
    const [userMessage, setUserMessage] = useState("");
    const [lastUserMessage, setLastUserMessage] = useState("");
    const [isResponded, setIsResponded] = useState(true);
    const [currentChatId, setCurrentChatId] = useState("");
    const [isWarned, setIsWarned] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");
    const [currentUserId, setCurrentUserId] = useState(""); 

    const handlePostError = async () => {
        setWarningMessage("Please wait before sending a message again")
        setIsWarned(true)
    }

    const fetchError = async () => {
        setWarningMessage("Connection error, please try reloading the page again")
        setIsWarned(true)
    }


    const handlePost = async () => {
        console.log("Posting...")
        if (!isResponded) {
            handlePostError();
            return
        }
      
        const postResult = await postMessage(currentChatId,{ "userMessage" : userMessage});
        if (postResult.id) { // True if exist returned message
            console.log("Result: ", postResult); // !!!!!!!!!!!!!!! REMEMBER TO DELETE BEFORE LAUNCH !!!!!!!!!!!!!!!!!!!!
            setLastUserMessage(userMessage); setUserMessage(""); loadMessages();
        }
    }

    const inputKeyUp = (e) => {
        e.which = e.which || e.keyCode;
        if (e.which === 13) { // "Enter" key?
            handlePost()
        }
    }

    const loadMessages = async () => {
        if (currentChatId !== "") {
            const fetchResult = await fetchMessage(currentChatId);
            {fetchResult.error? fetchError() : setMessages(fetchResult)}
            console.log("Fetched: ", fetchResult)
            return fetchResult
        }
    }

    const handleRespond = async () => {
        if (isResponded) {
            setIsResponded(false)
            const postResult = await fetchLlmResponse(currentChatId, { "userMessage" : lastUserMessage});
            setIsResponded(true); setLastUserMessage(""); loadMessages();
        }
    }

    const instantiateNewChat = async () => {
        const handleNewChat = async () => {
            const newChat = await createNewChat(currentUserId)
            setCurrentChatId(newChat.id)
        }
        if (currentUserId !== ""){
            const response = await fetchChat(currentUserId)
            {response.response? await handleNewChat() : handleNewChat()}
        }
    }

    const getUserId = async() => {
        const response = await fetchUserId();
        response.error? null : setCurrentUserId(response.id);
    }

    useEffect(() => {
        const t = async () => {
            if (lastUserMessage !== ""){
                await handleRespond()
            }
        }
        t()
    }, [lastUserMessage]);

    useEffect(() => {
        if (!isWarned){
            setWarningMessage("")
        }
    }, [isWarned]);

    useEffect(() => {
        getUserId()
    }, []); 
    
    useEffect(() => {
        instantiateNewChat()
    }, [currentUserId]); 

    useEffect(() => {
        loadMessages()
    }, [currentChatId]); 
    
    return (
        <>
        { isWarned? (<Warning warnMessage={warningMessage} closeNoti={() => setIsWarned(false)} />) : null }
        <div className="flex flex-col h-full p-1 bg-background rounded-lg inset-shadow-md">
            {/* Chat */}
            <div className="flex-grow p-2 w-full overflow-y-auto bg-secondary rounded-md inset-shadow-md/100">
                <div className="flex py-1 flex-col gap-2 text-sm md:text-md drop-shadow-sm">
                    {/* <Loaiding /> */}
                    { messages.length !== 0 ? messages.map((i) => {
                        if (i.messageRoleId === 2) {
                            return (
                                <div className="px-2 py-1.5 bg-background rounded-sm max-w-72/100 break-words place-self-end">{i.message}</div>
                            )
                        }
                        if (i.messageRoleId === 3) {
                            return (
                                <div className="px-2 py-1.5 bg-primary text-background rounded-sm max-w-72/100 break-words place-self-start">{i.message}</div>
                            )
                        }
                    }
                ): <div className="opacity-32">No conversation found, try asking something!</div> }
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
                        onKeyUp={inputKeyUp}
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