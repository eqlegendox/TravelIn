"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize, Minimize, Minus } from "lucide-react"
import ChatPane from "./chatPane"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Logo from "./logobos.svg"
import { set } from "zod"
import { div } from "framer-motion/client"
// import {Dimensions}

export default function ToggleChat() {
    const [show, setShow] = useState(true)
    const [xpand, setXpand] = useState(false)

    const toggleShow = () => {
        setShow(!show)
        // setXpand(false)
    }

    const toggleXpand = () => {
        setXpand(!xpand)
    }
    
    const messagesEndRef = useRef<null| HTMLDivElement>(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "instant"})
    }
    useEffect(() =>{
        scrollToBottom()
        console.log("WAYAW")
        console.log("WAYAW")
        console.log("WAYAW")
        console.log("WAYAW")
        console.log("WAYAW")
        console.log("WAYAW")
    }, [show, xpand]);

    if (show) {
        if (xpand) {
            return (
                // Issue overflow is handled but static, any values below w40 couldn't be handled
                <>
                <AnimatePresence custom={-1000}>
                    <motion.div
                        className="fixed flex h-[100vh] w-[100vw] md:relative md:max-w-[40vw] "
                        key="megaPane"
                        initial = {{ x:1000 }}
                        animate = {{ x:0 }}
                        exit = {{ x:1000 }}
                        transition = {{ type: 'spring', stiffness: 100, damping: 16, duration: 0.1 }}
                        >
                        <div className="bg-primary fixed right-2 top-2 flex self-end p-1 rounded-full">
                            <Minimize className=" right-1 bg-background rounded-full p-1 m-1 w-5 h-5 hover:bg-red" onClick={toggleXpand} />
                            <Minus className=" right-1 bg-background rounded-full p-1 m-1 w-5 h-5 hover:bg-red" onClick= {toggleShow} />
                        </div>
                        <div className="pt-12 flex-1 max-h-full min-h-full h-auto border-1 rounded-lg ">
                            <ChatPane bottomRef={messagesEndRef} />
                        </div>
                    </motion.div>
                </AnimatePresence>
                </>
            )
        }
        
        
        return (
            <>
            <AnimatePresence custom={-1000}>
                <motion.div 
                    className="parent flex flex-col float-right bottom-7 fixed h-[42vh] w-[100vw] md:w-[42vw] md:right-2 md:bottom-9 lg:w-[38vw] "
                    key="miniPane"
                    initial = {{ x: 1000}}
                    animate = {{ x: 0 }}
                    exit={{ x: 1000}}
                    transition = {{ type: 'spring', stiffness: 100, damping: 16, duration: 0.1 }}
                    >
                    <div className="bg-primary flex self-end px-2 pl-6 rounded-tl-4xl rounded-tr-md">
                        <Maximize className=" right-1 bg-background rounded-full p-1 m-1 w-5 h-5 hover:bg-red" onClick={toggleXpand}/>
                        <Minus className=" right-1 bg-background rounded-full p-1 m-1 w-5 h-5 hover:bg-red" onClick= {toggleShow} />
                    </div>
                    <div className="flex-1 max-h-full min-h-full h-auto border-1 rounded-lg rounded-tr-none">
                        <ChatPane bottomRef={messagesEndRef}/>
                    </div>
                </motion.div>
            </AnimatePresence>
            </>
        )
    }

    return (
        <>
        <AnimatePresence custom={-1000}>
            <motion.div 
                className="fixed right-4 bottom-4 p-1.5 bg-primary rounded-full aspect-square content-center"
                
                key="paneButton"
                initial = {{ x: 1000}}
                animate = {{ x: 0}}
                transition={{ type: "spring", stiffness:100, damping: 16, duration: 0.1 }}
                onClick={toggleShow}
                >
                <Image
                    priority
                    src={Logo}
                    alt=""
                    width={40}
                    />
                {/* <Lollipop onClick={toggleShow} className="text-white"/> */}
            </motion.div>
        </AnimatePresence>
        </>
    )
}