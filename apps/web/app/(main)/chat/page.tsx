"use client"

import { Button } from "@workspace/ui/components/button"
import { useEffect, useState, useRef } from "react"

export default function ChatPane() {
    return (
        <div className="flex flex-col w-max h-full">
            <div className="flex overflow-scroll bg-secondary w-100 flex-col text-sm text-pretty">
                {/* Chat */}
                <div className="text-wrap">AShhasdhasdddddddddddddddddddddddddddddddddddddddddddddddddas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
                <div>AShhasdhas</div>
            </div>
            <div className="p-3 flex border-t-1 gap-2">
                <input type="text" className="flex p-1 max-w-3/10"/>
                <Button>Send</Button>
            </div>
        </div>
    )
}