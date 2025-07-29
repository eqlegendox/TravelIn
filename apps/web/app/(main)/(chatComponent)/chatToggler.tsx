"use client"

import { useState } from "react"
import { X, Lollipop } from "lucide-react"
import ChatPane from "./chatPane"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Logo from "./logobos.svg"

export default function ToggleChat() {
    const [show, setShow] = useState(true)
    // const logoPath = "D:\Kuliah\Internship\Code\travl-in\apps\web\components\logobos.svg"
    const imgPath = 'logobos.svg'

    const toggleShow = () => {
        setShow(!show)
    }

    if (show) {
        return (
            <AnimatePresence>
                <motion.div 
                    className="float-right fixed right-2 bottom-2 border-1 rounded-lg h-9/24 w-11/24 lg:w-9/24"

                    key="miniPane"
                    initial = {{ x: 1000}}
                    animate = {{ x: 0 }}
                    exit={{ x: 1000}}
                    transition = {{ type: 'spring', stiffness: 100, damping: 16, duration: 0.1 }}
                >
                    <X className="opacity-30 absolute right-1 bg-background rounded-full p-1 m-2 z-10 hover:bg-red" onClick= {toggleShow} />
                    <ChatPane />
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