import React from "react";
import {easeInOut, easeOut, motion, stagger} from 'framer-motion'
import { div } from "framer-motion/client";
import { Sparkle } from "lucide-react";
import sparkle from "app/(main)/(chatComponent)/sparkle.svg";
import Image  from "next/image.js";

const delays = [0, 0.06, 0.12]

const generateStarVariants = (delay: number) => ({
    upDown: {
        y: [-2, -16, -2],
        rotate: [0, -90, 90, 0],
        transition: {
        y: {
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 0.8,
            times: [0, 0.4, 0.8],
            ease: easeInOut,
            delay,
        },
        rotate: {
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 0.8,
            times: [0, 0.2, 0.4, 0.8],
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
    <motion.div
        className="w-fit flex rounded-full bg-primary px-3 py-1 gap-1 border border-background"
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
            {/* <Sparkle fill="white" stroke="grey" strokeWidth={0.24} /> */}
            </motion.div>
        ))}
    </motion.div>
    );
};
export default Loaiding