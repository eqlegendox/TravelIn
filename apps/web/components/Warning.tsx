import {motion, AnimatePresence} from "framer-motion"
import { X, MailWarningIcon } from "lucide-react";

export default function Warning ({warnMessage, closeNoti}) {
    const warningMess = warnMessage || "There's seems to be an issue!";
    
    return (
        <>
        <AnimatePresence custom={-1000}>
            <motion.div
                className="float-left fixed min-w-24 w-fit text-center top-0 bg-foreground text-background p-3 m-2 rounded-lg z-20"
                key="notification"
                initial = {{ x:-1000 }}
                animate = {{ x:0 }}
                exit = {{ x:-1000 }}
                transition = {{ type: 'spring', stiffness: 100, damping: 16, duration: 0.1 }}
                >
                <div className="grid gap-2">
                    <div className="flex flex-row items-center justify-between">
                        <MailWarningIcon className="text-destructive" />
                        <X className="w-5 cursor-pointer" onClick={closeNoti}/>
                    </div>
                    <div>
                        {warningMess}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
        </>
    )
}