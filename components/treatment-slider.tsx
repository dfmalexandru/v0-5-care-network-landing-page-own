"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Check, Info, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Treatment {
  name: string
  slug?: string // Added optional slug field
  tagline: string
  description: string
  benefits: string[]
  price: string
  duration: string
  image: string
}

interface TreatmentSliderProps {
  treatments: Treatment[]
}

const getServiceSlug = (name: string): string => {
  const slugMap: Record<string, string> = {
    "Home Care Department": "home-care",
    "Home Laboratory Tests": "home-laboratory-tests",
    "Home Baby Vaccines": "home-baby-vaccine",
    "E-Pharmacy": "e-pharmacy",
    "Urgent Care": "urgent-care",
    "Medical Consultation - Video": "medical-consultation-video",
    "Office Medical Care": "office-medical-care",
    "Home Radiology": "radiology",
    "Home Nursing Care": "home-nursing-care",
    Insurance: "insurance",
  }
  return (
    slugMap[name] ||
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  )
}

export default function TreatmentSlider({ treatments }: TreatmentSliderProps) {
  const router = useRouter()
  const allTreatmentNames = treatments.map((t) => t.name)

  const [selectedFilter, setSelectedFilter] = useState<string>("All")
  const [currentIndex, setCurrentIndex] = useState(0)

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const minSwipeDistance = 50

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith("#service-")) {
        const serviceIndex = treatments.findIndex(
          (t) => t.name.toLowerCase().replace(/\s+/g, "-") === hash.replace("#service-", ""),
        )
        if (serviceIndex !== -1) {
          setCurrentIndex(serviceIndex)
        }
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [treatments])

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
    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter)
    if (filter === "All") {
      setCurrentIndex(0)
    } else {
      const slug = getServiceSlug(filter)
      router.push(`/services/${slug}`)
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? treatments.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === treatments.length - 1 ? 0 : prev + 1))
  }

  const getVisibleTreatments = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % treatments.length
      visible.push(treatments[index])
    }
    return visible
  }

  const visibleTreatments = getVisibleTreatments()

  return (
    <div className="space-y-12">
      {/* Filter Dropdown */}
      <div className="space-y-4 text-center min-h-[100px] flex flex-col justify-center">
        <h3 className="text-lg font-semibold">Filter by service</h3>
        <div className="flex justify-center">
          <Select value={selectedFilter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-full max-w-md">
              <SelectValue placeholder="All services" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Services</SelectItem>
              {allTreatmentNames.map((name) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Pagination-based display */}
      <div className="space-y-8">
        <div className="relative" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          {/* Mobile: Single Card */}
          <div className="md:hidden flex justify-center px-4">
            <div className="w-full max-w-sm">
              <Card className="border-2 overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow pt-0">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={treatments[currentIndex].image || "/placeholder.svg"}
                      alt={treatments[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-2xl">
                      <div className="text-2xl font-bold">{treatments[currentIndex].price}</div>
                      <div className="text-xs opacity-90">SAR</div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex flex-col flex-grow">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {treatments[currentIndex].duration}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 text-balance">{treatments[currentIndex].name}</h3>
                      <p className="text-sm text-primary font-medium mb-2">{treatments[currentIndex].tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {treatments[currentIndex].description}
                      </p>
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h4 className="font-semibold text-sm">Key Benefits:</h4>
                      <div className="grid gap-2">
                        {treatments[currentIndex].benefits.slice(0, 3).map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check className="h-2.5 w-2.5 text-primary" />
                            </div>
                            <span className="text-xs text-muted-foreground line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                        <Link
                          href={`/services/${treatments[currentIndex].slug || getServiceSlug(treatments[currentIndex].name)}`}
                        >
                          View Details
                          <Info className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                        asChild
                      >
                        <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                          Book Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Desktop: Three Cards */}
          <div className="hidden md:grid grid-cols-3 gap-6 px-6">
            {visibleTreatments.map((treatment, idx) => (
              <Card
                key={idx}
                className="border-2 overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow pt-0"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-2xl">
                      <div className="text-2xl font-bold">{treatment.price}</div>
                      <div className="text-xs opacity-90">SAR</div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex flex-col flex-grow">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {treatment.duration}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 text-balance">{treatment.name}</h3>
                      <p className="text-sm text-primary font-medium mb-2">{treatment.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {treatment.description}
                      </p>
                    </div>
                    <div className="space-y-2 flex-grow">
                      <h4 className="font-semibold text-sm">Key Benefits:</h4>
                      <div className="grid gap-2">
                        {treatment.benefits.slice(0, 3).map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check className="h-2.5 w-2.5 text-primary" />
                            </div>
                            <span className="text-xs text-muted-foreground line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                        <Link href={`/services/${treatment.slug || getServiceSlug(treatment.name)}`}>
                          View Details
                          <Info className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                        asChild
                      >
                        <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                          Book Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between pointer-events-none px-2 md:px-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="pointer-events-auto h-12 w-12 rounded-full bg-background/95 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform md:-translate-x-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="pointer-events-auto h-12 w-12 rounded-full bg-background/95 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform md:translate-x-6"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} of {treatments.length}
          </span>
          <div className="flex gap-2">
            {treatments.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
