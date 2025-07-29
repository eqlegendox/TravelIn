"use client"

import { useState } from "react"
import { Maximize, Minimize } from "lucide-react"
import ChatPane from "./chatPane2"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Logo from "./logobos.svg"
import { set } from "zod"
import { div } from "framer-motion/client"

export default function ToggleChat() {
    const [show, setShow] = useState(true)
    const [xpand, setXpand] = useState(false)

    const toggleShow = () => {
        setShow(!show)
        setXpand(false)
    }

    const toggleXpand = () => {
        setXpand(!xpand)
    }

    if (show) {
        if (xpand) {
            return (
                <div className="flex">
                    <Minimize className=" right-1 bg-background rounded-full p-1 m-1 w-5 h-5 hover:bg-red" onClick= {toggleXpand} />
                    a
                </div>
            )
        }
        
        
        return (
            <AnimatePresence>
                <motion.div 
                    className="parent flex flex-col float-right fixed right-2 bottom-9 h-[42vh] w-[48vw] lg:w-[42vw]"
                    key="miniPane"
                    initial = {{ x: 1000}}
                    animate = {{ x: 0 }}
                    exit={{ x: 1000}}
                    transition = {{ type: 'spring', stiffness: 100, damping: 16, duration: 0.1 }}
                >
                    <div className="bg-primary flex self-end px-2 pl-6 rounded-tl-4xl rounded-tr-md">
                        <Maximize className=" right-1 bg-background rounded-full p-1 m-1 w-5 h-5 hover:bg-red" onClick={toggleXpand} />
                        <Minimize className=" right-1 bg-background rounded-full p-1 m-1 w-5 h-5 hover:bg-red" onClick= {toggleShow} />
                    </div>
                    <div className="flex-1 max-h-full min-h-full h-auto border-1 rounded-lg rounded-tr-none ">
                        <ChatPane />
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    }

    return (
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
    )
}