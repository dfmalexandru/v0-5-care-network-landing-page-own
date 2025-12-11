"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Partner {
  name: string
  logo: string
  bgColor?: string
}

interface PartnersSliderProps {
  partners: Partner[]
}

export default function PartnersSlider({ partners }: PartnersSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1))
  }

  // Calculate which partners to show (3 at a time on desktop, 1 on mobile)
  const getVisiblePartners = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % partners.length
      visible.push(partners[index])
    }
    return visible
  }

  const visiblePartners = getVisiblePartners()

  return (
    <div className="space-y-8">
      {/* Partners Display */}
      <div className="relative" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        {/* Mobile: Single Partner */}
        <div className="md:hidden flex justify-center">
          <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white flex items-center justify-center p-8">
            <img
              src={partners[currentIndex].logo || "/placeholder.svg"}
              alt={partners[currentIndex].name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Desktop: Three Partners */}
        <div className="hidden md:grid grid-cols-3 gap-12 items-center justify-items-center">
          {visiblePartners.map((partner, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white flex items-center justify-center p-8"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between pointer-events-none px-4 md:px-0">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="pointer-events-auto h-12 w-12 rounded-full bg-background/95 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform md:-translate-x-1/2"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="pointer-events-auto h-12 w-12 rounded-full bg-background/95 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform md:translate-x-1/2"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-4">
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} of {partners.length}
        </span>
        <div className="flex gap-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to partner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
