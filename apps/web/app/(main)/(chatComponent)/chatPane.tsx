"use client"

import { Button } from "@workspace/ui/components/button"
import { ChevronRight } from "lucide-react"
import { fetchMessage, postMessage, fetchLlmResponse, createNewChat, fetchUserId, fetchChat } from "./routing/serverSide";
import { useState, useEffect, useRef, useReducer } from 'react';
import Loaiding from "@/components/Loaiding"
import Warning from "@/components/Warning";
import reducer from "./messageHandler";
import ProgressiveBlur from "@workspace/ui/components/magicui/progressive-blur";
import { marked } from "marked"

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
            behavior: "instant",
            block: "start",
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
        
        const postResult = await postMessage(state.currentChatId,{ "userMessage" : state.userMessage, "userId": state.currentUserId});
        if (postResult.id) { // True if exist returned message
            dispatch({type: 'PREPOSTHANDLE', payload: state.userMessage});
            dispatch({type: 'SETMESSAGE', payload: state.messages.concat(postResult)});
        }
    }

    const handleRespond = async () => {
        if (state.isResponded) {
            dispatch({type: 'SETISRESPONDED', payload: false})
            const postResult = await fetchLlmResponse(state.currentChatId, { "userMessage" : state.lastUserMessage, "userId": state.currentUserId});
            dispatch({type: "RESPONDHANDLE"});
            dispatch({type: 'SETMESSAGE', payload: state.messages.concat(postResult)});
        }
    }
    
    const inputKeyUp = (e) => {
        e.which = e.which || e.keyCode;
        if (e.which === 13) { // "Enter" key?
            handlePost()
        }
    }

    const loadMessages = async () => {
        const fetchResult = await fetchMessage(await state.currentChatId, state.currentUserId);
        {fetchResult.error? fetchError() : dispatch({type: "SETMESSAGE", payload: fetchResult})}
        console.log("Fetched: ", fetchResult)
        return fetchResult
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
        }
        t()
    }, [state.lastUserMessage]);

    useEffect(() => {
        if (!isWarned){
            setWarningMessage("")
        }
    }, [isWarned]);
    
    useEffect(() => {
        if (state.currentChatId !== "") {
            loadMessages()
        }
    }, [state.currentChatId]);  
    
    return (
        <>
        { isWarned? (<Warning warnMessage={warningMessage} closeNoti={() => setIsWarned(false)} />) : null }
        <div className="flex flex-col h-full p-1 bg-background rounded-lg inset-shadow-md inset-shadow-lg/100 overflow-clip">
            {/* Chat */}
            <div className="flex-grow p-2 w-full overflow-y-auto bg-secondary rounded-md inset-shadow-sm">
                <div className="flex py-1 flex-col gap-2 text-sm md:text-md">
                    {console.log("this is the messages: ", state.messages)}
                    { state.messages.length !== 0 ? state.messages.map((i) => {
                        // const parsedMess = ""
                        // if (i.message) {
                            const parsedMess = marked.parse(i.message)
                        // }
                        if (i.messageRoleId === 2) {
                            return (
                                <div className="px-2 py-1.5 bg-background rounded-sm max-w-72/100 break-words place-self-end shadow-md" dangerouslySetInnerHTML={{__html: parsedMess}} />
                            )
                        }
                        if (i.messageRoleId === 3) {
                            return (
                                <div className="px-2 py-1.5 bg-primary text-background rounded-sm max-w-72/100 break-words place-self-start shadow-md" dangerouslySetInnerHTML={{__html: parsedMess}} />
                            )
                        }
                    }
                ): <div className="opacity-32">No conversation found, try asking something!</div> }
                <div>
                    <h2>{state.isResponded? null : < Loaiding />}</h2> {/* rightside of the : is when ai is still responding maybe change to something better later */}
                </div>
                <div className="float clear min-h-16" ref={bottomRef} /></div>
                <ProgressiveBlur position="bottom" height="18%" className="z-1"/>
                
                {/* Input Scetion */}
                <div className="absolute bottom-2 left-2 right-2 p-1 flex rounded-lg bg-background shadow-md shadow-black z-2">
                    <div className="flex items-center gap-1 w-full">
                        <input
                            type="text" 
                            name="user_message"
                            id="user_message"
                            value={state.userMessage}
                            onChange={(e) => dispatch({type: 'SETUSERMESSAGE', payload: e.target.value})}
                            onKeyUp={inputKeyUp}
                            placeholder="Type a message.."
                            className="flex-grow w-full lg:text-lg sm:text-sm p-2 border rounded-md focus:ring-2 focus:ring-ring/15 focus:outline-none inset-shadow-sm shadow-black"
                            />
                        <Button onClick={handlePost} className="h-full shadow-xs "><ChevronRight className="h-4 w-4 font-bold"/></Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}