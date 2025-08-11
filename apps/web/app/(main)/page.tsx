"use client"

import { Button } from "@workspace/ui/components/button"
import TextPressure from "@workspace/ui/components/TextPressure"
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components/card"
import Image from "next/image"
import foto from "./The-Legian-Bali-Seminyak-Pool.jpg"
import { Heart } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
// import CurvedLoop from "@workspace/ui/components/CurvedLoop"
// import Beams from "@workspace/ui/components/Beams"
// import Warning from "@/components/Warning"

export default function Page() {
  // const [warning, showWarning] = useState(false)
  // const triggerWarning = () => {
  //   showWarning(true)
  // };
  // useEffect(() => {
  //   showWarning(true)
  // }, [])
  const dummy = ["la Mija", "el Mijo", "Nina", "Nino", "Gato", "Casa", "Abuela", "Abuelo", "Leche"]
  return (
    <>
    {/* {warning && (
      <Warning warnMessage="Test" closeNoti={() => showWarning(false)} />
    )} */}
    {/* <div className="w-screen h-screen static z-0">
      <Beams 
        beamWidth={3}
        beamHeight={20}
        beamNumber={6}
        lightColor="#ba0000ff"
        speed={1.6}
        noiseIntensity={1}
        scale={0.24}
        rotation={30}
      />
    </div> */}
    <div className="flex flex-col items-center flex-1 min-h-svh gap-6">
      {/* <CurvedLoop marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦" /> */}

      <div className="flex flex-col items-center justify-center overflow-hidden max-w-svw max-h-10 gap-4 min-h-screen">
        <TextPressure text="Hello?" minFontSize={240} textColor="foreground" className="center"/>
        {/* <h1 className="text-2xl primary font-bold">Hello World</h1> */}
        <Link href="#hotel"><Button size="lg">Hotel?</Button></Link>
      </div>
      <h1 className="self-start font-bold text-2xl mx-6 -my-2">Hotel</h1>
      <div className="grid grid-flow-dense grid-cols-2 md:grid-cols-3 auto-rows-auto gap-2 p-3" id="hotel">
        {dummy.map((val) => {
          return (
            <Card className="w-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Hotel {val}</CardTitle>
                <CardDescription>Hotel {val} is the best hotel in Bali</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={foto} alt="meow" className="rounded-lg"/>
              </CardContent>
              <div className="flex justify-end">
                <CardAction className="flex gap-1 p-4">
                  <Button>Book This</Button>
                  <Button variant={"destructive"}><Heart/></Button>
                </CardAction>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
    </>
  )
}
