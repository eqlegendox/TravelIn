"use client"

import { Button } from "@workspace/ui/components/button"
import TextPressure from "@workspace/ui/components/TextPressure"
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@workspace/ui/components/card"
import Image from "next/image"
import foto from "./The-Legian-Bali-Seminyak-Pool.jpg"
import { Heart, MapPin, Star } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Page() {
  const [likedItems, setLikedItems] = useState(new Set())
  
  const dummy = ["la Mija", "el Mijo", "Nina", "Nino", "Gato", "Casa", "Abuela", "Abuelo", "Leche"]
  const dumTour = ["Cafe", "Garden", "Forest", "Beach"]
  
  const toggleLike = (id) => {
    const newLiked = new Set(likedItems)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLikedItems(newLiked)
  }

  return (
    <>
      <div className="flex flex-col items-center flex-1 min-h-svh gap-6 bg-gradient-to-br from-background to-muted/20">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center overflow-hidden max-w-svw max-h-10 gap-8 min-h-screen relative">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="text-center space-y-4">
            <TextPressure text="Hello?" minFontSize={240} textColor="foreground" className="center"/>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Discover amazing hotels and tours in beautiful Bali
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link href="#hotel">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                🏨 Hotels
              </Button>
            </Link>
            <Link href="#tour">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur">
                🗺️ Tours
              </Button>
            </Link>
          </div>
        </div>

        {/* Hotel Section */}
        <div className="w-full max-w-7xl px-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-primary rounded-full"></div>
            <h1 className="font-bold text-3xl text-foreground">Hotels</h1>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" id="hotel">
            {dummy.map((val, index) => {
              const itemId = `hotel-${index}`
              const isLiked = likedItems.has(itemId)
              
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-card/80 backdrop-blur overflow-hidden">
                  <div className="relative -my-6 ">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image 
                          src={foto} 
                          alt={`Hotel ${val}`} 
                          className="rounded-t-lg w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <div className="bg-background/90 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1 text-sm font-medium">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            4.{Math.floor(Math.random() * 9) + 1}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardHeader className="py-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        Hotel {val}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        Premium hotel experience in Bali
                      </CardDescription>
                    </CardHeader>
                    
                    <CardAction className="flex gap-7 items-center p-4 pt-0">
                      <div className="text-sm text-muted-foreground">
                        From <span className="font-bold text-lg text-foreground">$120</span>/night
                      </div>
                      <div className="flex gap-2">
                        <Button className="shadow-md hover:shadow-lg transition-all duration-200">
                          Book Now
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => toggleLike(itemId)}
                          className={`shadow-md hover:shadow-lg transition-all duration-200 ${
                            isLiked ? 'bg-red-50 border-red-200 hover:bg-red-100' : ''
                          }`}
                        >
                          <Heart className={`w-4 h-4 transition-all duration-200 ${
                            isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-muted-foreground hover:text-red-500'
                          }`} />
                        </Button>
                      </div>
                    </CardAction>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Tour Section */}
        <div className="w-full max-w-7xl px-6 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-secondary rounded-full"></div>
            <h1 className="font-bold text-3xl text-foreground">Tour Locations</h1>
            <div className="flex-1 h-px bg-border ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="tour">
            {dummy.map((val, i) => {
              const loc = dumTour[i%4]
              const itemId = `tour-${i}`
              const isLiked = likedItems.has(itemId)
              const tourEmojis = { Cafe: "☕", Garden: "🌸", Forest: "🌲", Beach: "🏖️" }
              
              return (
                <Card key={i} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-card/80 backdrop-blur overflow-hidden">
                  <div className="relative -my-6">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image 
                          src={foto} 
                          alt={`${loc} ${val}`} 
                          className="rounded-t-lg w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <div className="bg-background/90 backdrop-blur rounded-full px-3 py-1 text-sm font-medium">
                            {tourEmojis[loc]} {loc}
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className="bg-background/90 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1 text-sm font-medium">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            4.{Math.floor(Math.random() * 9) + 1}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardHeader className="py-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {loc} {val}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        Authentic {loc.toLowerCase()} experience in Bali
                      </CardDescription>
                    </CardHeader>
                    
                    <CardAction className="flex gap-7 items-center p-4 pt-0">
                      <div className="text-sm text-muted-foreground">
                        From <span className="font-bold text-lg text-foreground">$45</span>/person
                      </div>
                      <div className="flex gap-2 justify-around">
                        <Button variant="secondary" className="shadow-md hover:shadow-lg transition-all duration-200">
                          Book Tour
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => toggleLike(itemId)}
                          className={`shadow-md hover:shadow-lg transition-all duration-200 ${
                            isLiked ? 'bg-red-50 border-red-200 hover:bg-red-100' : ''
                          }`}
                        >
                          <Heart className={`w-4 h-4 transition-all duration-200 ${
                            isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-muted-foreground hover:text-red-500'
                          }`} />
                        </Button>
                      </div>
                    </CardAction>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}