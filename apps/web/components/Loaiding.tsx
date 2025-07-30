import React from "react";
import {easeInOut, easeOut, motion, stagger} from 'framer-motion'
import { div } from "framer-motion/client";
import { Sparkle } from "lucide-react";

const transitions = {
    staggerino: {
        transition: {
            staggerChildren: 0.9,
            // delayChildren: stagger(0.9),
            duration: 1
        }
    }
}
const dlay = [0.164, 0.2]

const starVariants = {
    upDown: {
        y: [-2, -32],
        rotate: [0, 90],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.2,

                times: [0, 0.4],
                ease: easeInOut,
                // delay: 4,
            },
            rotate: {
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.2,

                times: [0, 0.2],
                ease: easeOut,
                // delay: 1
            }
        }
    }
}
const starVariants2 = {
    upDown: {
        y: [-2, -32],
        rotate: [0, 90],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.2,

                times: [0, 0.4],
                ease: easeInOut,
                delay: dlay[0],
            },
            rotate: {
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.2,

                times: [0, 0.2],
                ease: easeOut,
                delay: dlay[0]
            }
        }
    }
}
const starVariants3 = {
    upDown: {
        y: [-2, -32],
        rotate: [0, 90],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.2,

                times: [0, 0.4],
                ease: easeInOut,
                delay: dlay[1],
            },
            rotate: {
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.2,

                times: [0, 0.2],
                ease: easeOut,
                delay: dlay[1],
            }
        }
    }
}

const Loaiding = () => {
    return (
        <motion.div className="w-fit flex rounded-full bg-primary px-2 border-1 border-background" variants={transitions} initial="stagerino" animate="stagerino" >
            <motion.div variants={starVariants} animate="upDown" className=""><Sparkle className="" fill="white" stroke="grey" strokeWidth={0.24}/></motion.div>
            <motion.div variants={starVariants2} animate="upDown" className=""><Sparkle className="" fill="white" stroke="grey" strokeWidth={0.24}/></motion.div>
            <motion.div variants={starVariants3} animate="upDown" className=""><Sparkle className="" fill="white" stroke="grey" strokeWidth={0.24}/></motion.div>
        </motion.div>
    )
}
export default Loaiding