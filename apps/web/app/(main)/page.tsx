"use client"

import { Button } from "@workspace/ui/components/button"
import CurvedLoop from "@workspace/ui/components/CurvedLoop"
import TextPressure from "@workspace/ui/components/TextPressure"

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-svh">
      {/* <CurvedLoop marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦" /> */}

      <div className="flex flex-col items-center justify-center overflow-hidden max-w-svw gap-4">
        <TextPressure text="Hello!" minFontSize={240} textColor="foreground" className="justify-center"/>
        {/* <h1 className="text-2xl primary font-bold">Hello World</h1> */}
        <Button size="sm">Button Wahhahaa</Button>
      </div>
    </div>
  )
}
