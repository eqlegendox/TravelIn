import React from "react";
import {easeInOut, easeOut, motion, stagger} from 'framer-motion'
import { div } from "framer-motion/client";
// import { Sparkle } from "lucide-react";
import sparkle from "@/app/(main)/(chatComponent)/sparkle.svg";
import Image  from "next/image.js";

const delays = [0, 0.06, 0.12]

const generateStarVariants = (delay: number) => ({
    upDown: {
        y: [-0, -12.8, -0, -2, -0],
        rotate: [0, -90, 90, 0, 0, 0],
        transition: {
        y: {
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.8,
            times: [0, 0.4, 0.8, 0.86, 0.96],
            ease: easeInOut,
            delay,
        },
        rotate: {
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.8,
            times: [0, 0.2, 0.4, 0.8, 0.86, 0.96],
            ease: easeOut,
            delay,
        },
        },
    },
});

const containerVariants = {
    animate: {
        transition: {
        staggerChildren: 0.2,
        },
    },
};

const Loaiding = () => {
    return (
    <>
    <motion.div
        className="min-w-2 py-1 bg-white z-10 absolute text-white mix-blend-overlay opacity-64 blur-sm"
        initial={{transform: "translateX(-1em)"}}
        animate={{transform: "translateX(6em)"}}
        transition={{type: "spring", duration:1.8, repeat:Infinity, repeatType:"loop"}}
    >
        j
    </motion.div>
    <motion.div
        className="w-fit flex rounded-full bg-primary px-3.5 py-1 gap-1 border border-background"
        variants={containerVariants}
        initial="animate"
        animate="animate"
        >
        {delays.map((delay, idx) => (
            <motion.div
            key={idx}
            variants={generateStarVariants(delay)}
            animate="upDown"
            >
            <Image 
                priority 
                src={sparkle}
                width={20} 
                alt="" 
                />
            {/* <Sparkly className="size-10"/> */}
            {/* <sparkle fill="white" stroke="grey" strokeWidth={0.24} /> */}
            </motion.div>
        ))}
    </motion.div>
    </>
    );
};
export default Loaiding