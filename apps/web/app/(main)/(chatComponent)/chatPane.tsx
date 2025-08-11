"use client"

import { Button } from "@workspace/ui/components/button"
import { MoveRight } from "lucide-react"
import { fetchMessage, postMessage, fetchLlmResponse, createNewChat, fetchUserId, fetchChat } from "./routing/serverSide";
import { useState, useEffect, useRef, useReducer } from 'react';
import Loaiding from "@/components/Loaiding"
import Warning from "@/components/Warning";
import reducer from "./messageHandler";

export default function ChatPane({bottomRef, CurrentChatId, CurrentUserId}) {
    const initialState = {
        messages: [],
        userMessage: "",
        lastUserMessage: "",
        isResponded: true,
        currentChatId: CurrentChatId,
        currentUserId: CurrentUserId,
    }

    
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        })
    })

    const [state, dispatch] = useReducer(reducer, initialState)
    const [isWarned, setIsWarned] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");

    const handlePostError = async () => {
        setWarningMessage("Please wait before sending a message again")
        setIsWarned(true)
    }; const fetchError = async () => {
        setWarningMessage("Connection error, please try reloading the page again")
        setIsWarned(true)
    }

    const handlePost = async () => {
        console.log("Posting...", state)
        if (!state.isResponded) {
            handlePostError();
            return
        }
      
        const postResult = await postMessage(state.currentChatId,{ "userMessage" : state.userMessage});
        if (postResult.id) { // True if exist returned message
            const updatedMessages = await loadMessages();// !!!!!!!!!!!!!!! REMEMBER TO DELETE BEFORE LAUNCH !!!!!!!!!!!!!!!!!!!!
            dispatch({type: 'POSTHANDLE', payload: updatedMessages});
        }
    }

    const inputKeyUp = (e) => {
        e.which = e.which || e.keyCode;
        if (e.which === 13) { // "Enter" key?
            handlePost()
        }
    }

    const loadMessages = async () => {
        if (state.currentChatId !== "") {
            const fetchResult = await fetchMessage(await state.currentChatId);
            {fetchResult.error? fetchError() : dispatch({type: "SETMESSAGE", payload: fetchResult})}
            console.log("Fetched: ", fetchResult)
            return fetchResult
        }
    }

    const handleRespond = async () => {
        if (state.isResponded) {
            dispatch({type: 'SETISRESPONDED', payload: false})
            const postResult = await fetchLlmResponse(state.currentChatId, { "userMessage" : state.lastUserMessage});
            dispatch({type: "RESPONDHANDLE"}); loadMessages();
        }
    }

    const instantiateNewChat = async () => {
        const handleNewChat = async () => {
            const newChat = await createNewChat(await state.currentUserId)
            dispatch({type: 'SETCURRENTCID', payload: newChat.id})
        }
        if (state.currentUserId !== ""){
            const response = await fetchChat(state.currentUserId)
            handleNewChat()
            // {response.response? await handleNewChat() : dispatch({type: 'SETCURRENTCID', payload: response[0].id})}
        }
    }

    useEffect(() => {
        const t = async () => {
            if (state.lastUserMessage !== ""){
                await handleRespond()
            }
        }; t()
    }, [state.lastUserMessage]);

    useEffect(() => {
        if (!isWarned){
            setWarningMessage("")
        }
    }, [isWarned]);
    
    useEffect(() => {
        loadMessages()
    }, [state.currentChatId]); 
    
    return (
        <>
        { isWarned? (<Warning warnMessage={warningMessage} closeNoti={() => setIsWarned(false)} />) : null }
        <div className="flex flex-col h-full p-1 bg-background rounded-lg inset-shadow-md">
            {/* Chat */}
            <div className="flex-grow p-2 w-full overflow-y-auto bg-secondary rounded-md inset-shadow-md/100">
                <div className="flex py-1 flex-col gap-2 text-sm md:text-md drop-shadow-sm">
                    {/* <Loaiding /> */}
                    { state.messages.length !== 0 ? state.messages.map((i) => {
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
                    <h2>{state.isResponded? null : < Loaiding />}</h2> {/* rightside of the : is when ai is still responding maybe change to something better later */}
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
                        value={state.userMessage}
                        onChange={(e) => dispatch({type: 'SETUSERMESSAGE', payload: e.target.value})}
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