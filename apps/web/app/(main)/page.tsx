"use client"

import { Button } from "@workspace/ui/components/button"
import CurvedLoop from "@workspace/ui/components/CurvedLoop"
import TextPressure from "@workspace/ui/components/TextPressure"
import Warning from "@/components/Warning"
import { useState, useEffect, use } from "react"

export default function Page() {
  const [warning, showWarning] = useState(false)
  const triggerWarning = () => {
    showWarning(true)
  };
  useEffect(() => {
    showWarning(true)
  }, [])
  return (
    <>
    {/* {warning && (
      <Warning warnMessage="Test" closeNoti={() => showWarning(false)} />
    )} */}
    <div className="flex flex-col items-center justify-center flex-1 min-h-svh">
      {/* <CurvedLoop marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦" /> */}

      <div className="flex flex-col items-center justify-center overflow-hidden max-w-svw gap-4">
        <TextPressure text="Hello!" minFontSize={240} textColor="foreground" className="justify-center"/>
        {/* <h1 className="text-2xl primary font-bold">Hello World</h1> */}
        <Button size="sm">Button Waha</Button>
      </div>
      <div>
        <CurvedLoop className="text-primary" marqueeText="Helloo" />
          
      </div>
    </div>
    </>
  )
}
