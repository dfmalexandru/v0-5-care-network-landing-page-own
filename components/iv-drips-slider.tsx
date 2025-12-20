"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface IVDrip {
  name: string
  slug: string
  tagline: string
  description: string
  benefits: string[]
  price: string
  duration: string
  image: string
  targetAudience: string // Added targetAudience to interface
}

interface IVDripsSliderProps {
  drips: IVDrip[]
  language?: string
}

export default function IVDripsSlider({ drips }: IVDripsSliderProps) {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState<string>("All")
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash.startsWith("iv-drip-")) {
        const dripSlug = hash.replace("iv-drip-", "")
        const dripIndex = drips.findIndex((drip) => drip.slug === dripSlug)
        if (dripIndex !== -1 && containerRef.current) {
          setSelectedFilter(drips[dripIndex].name)
          const cardWidth = containerRef.current.scrollWidth / drips.length
          containerRef.current.scrollTo({ left: cardWidth * dripIndex, behavior: "smooth" })
        }
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [drips])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !containerRef.current || !isDragging) return
    const currentTouch = e.targetTouches[0].clientX
    const diff = touchStart - currentTouch
    containerRef.current.scrollLeft = scrollPosition + diff
  }

  const handleTouchEnd = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft)
    }
    setIsDragging(false)
    setTouchStart(null)
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft)
  }

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter)
    if (filter === "All") {
      containerRef.current?.scrollTo({ left: 0, behavior: "smooth" })
      setScrollPosition(0)
    } else {
      const selectedDrip = drips.find((drip) => drip.name === filter)
      if (selectedDrip) {
        router.push(`/iv-drips/${selectedDrip.slug}`)
      }
    }
  }

  const prevSlide = () => {
    if (!containerRef.current) return
    const cardWidth = containerRef.current.scrollWidth / drips.length
    containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" })
  }

  const nextSlide = () => {
    if (!containerRef.current) return
    const cardWidth = containerRef.current.scrollWidth / drips.length
    containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" })
  }

  const getTargetAudience = (slug: string): string => {
    const audiences: Record<string, string> = {
      "weight-loss-metabolic-burn-drip":
        "Adults on supervised weight‑loss plans; low‑energy individuals; metabolic support clients.",
      "energy-boost-performance-drip": "Busy professionals, shift workers, students, recreational athletes.",
      "skin-freshness-glow-drip": "Clients wanting glowing skin; travelers; individuals exposed to sun/pollution.",
      "bariatric-surgery-drip": "Post‑bariatric patients under clinical follow‑up.",
      "diabetic-support-drip": "Adults with diabetes or insulin resistance under medical supervision.",
      "sexual-performance-vitality-drip": "Adult men with performance decline; couples optimizing fertility.",
      "chronic-fatigue-drip": "Individuals with persistent fatigue under medical evaluation.",
      "diet-detox-drip": "Clients on detox programs or exposed to lifestyle toxins.",
      "fertility-repro-boost-drip": "Men and women preparing for pregnancy; fertility optimization clients.",
      "athletic-recovery-drip": "Athletes, gym‑goers, labor‑intensive workers.",
      "hair-growth-drip": "Clients with hair thinning due to stress, postpartum, or nutrient deficiencies.",
      "depression-support-drip": "Adults with low mood or burnout (adjunct support only).",
      "motherhood-postnatal-drip": "Postpartum women needing nutritional replenishment.",
      "immune-defense-drip": "People prone to frequent infections or high stress.",
      "jet-lag-reset-drip": "Frequent travelers, flight crews, business professionals.",
      "anti-aging-renewal-drip": "Adults seeking longevity, collagen support, and vitality.",
      "anti-stress-adrenal-drip": "High‑pressure professionals, caregivers, students.",
      "cold-flu-immune-rescue-drip": "Clients recovering from flu, frequent travelers, exposed workers.",
      "migraine-neuro-calm-drip": "Adults with migraines under neurologist care.",
      "dementia-cognitive-support-drip": "Older adults with memory concerns; cognitive support patients.",
      "hangover-recovery-drip": "Adults with dehydration or nausea after alcohol intake.",
      "hydration-drip": "Athletes, dehydrated individuals, travelers.",
      "post-surgery-healing-drip": "Post‑operative patients seeking recovery support.",
      "pre-surgery-optimization-drip": "Patients preparing for elective surgery.",
      "royal-flush-mini": "Partygoers, travelers, busy individuals needing fast recovery.",
      "myers-cocktail": "Clients with chronic fatigue, stress, immune weakness.",
      "vitamin-d-drip": "Individuals with low vitamin D levels or malabsorption.",
      "super-b-complex-drip": "Vegans, fatigued clients, those with low B‑vitamin intake.",
      "vitamin-c-zinc-drip": "Clients wanting immune support during illness.",
      "vitamin-c-drip": "Individuals needing antioxidant or collagen support.",
      "zinc-drip": "Clients with low zinc, skin issues, or immune weakness.",
      "b12-drip": "Vegans, older adults, individuals with B12 deficiency.",
    }

    return audiences[slug] || "Consult with our medical team to see if this treatment is right for you."
  }

  return (
    <div className="space-y-12">
      {/* Filter Dropdown */}
      <div className="space-y-4 text-center min-h-[100px] flex flex-col justify-center">
        <h3 className="text-lg font-semibold">Filter by treatment</h3>
        <div className="flex justify-center">
          <Select value={selectedFilter} onValueChange={handleFilterChange}>
            <SelectTrigger className="w-full max-w-md">
              <SelectValue placeholder="All treatments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Treatments</SelectItem>
              {drips.map((drip) => (
                <SelectItem key={drip.slug} value={drip.name}>
                  {drip.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all md:flex hidden"
          aria-label="Previous treatments"
        >
          <span className="material-symbols-outlined leading-none block">chevron_left</span>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all md:flex hidden"
          aria-label="Next treatments"
        >
          <span className="material-symbols-outlined leading-none block">chevron_right</span>
        </button>

        {/* Slider Container */}
        <div
          ref={containerRef}
          className="py-4 overflow-x-auto overflow-y-hidden scrollbar-hide"
          style={{
            scrollSnapType: "none",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: isDragging ? "auto" : "smooth",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
        >
          <div className="flex gap-6 px-6">
            {drips.map((drip, idx) => (
              <div key={idx} className="w-[85%] md:w-[calc(33.333%-16px)] flex-shrink-0">
                <Link href={`/iv-drips/${drip.slug}`} className="block h-full">
                  <Card className="border-2 overflow-hidden h-full shadow-lg hover:shadow-xl hover:border-primary/50 transition-all pt-0">
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Image Section */}
                      <div className="relative aspect-[4/3]">
                        <Image src={drip.image || "/placeholder.svg"} alt={drip.name} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        {/* Floating Price Badge */}
                        <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-2xl">
                          <div className="text-2xl font-bold">{drip.price}</div>
                          <div className="text-xs opacity-90">SAR</div>
                          <div className="text-xs opacity-90 mt-1 pt-1 border-t border-primary-foreground/20">
                            Home visit included
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 space-y-4 flex flex-col flex-grow">
                        <div>
                          <Badge variant="secondary" className="mb-3">
                            {drip.duration}
                          </Badge>
                          <h3 className="text-xl font-bold mb-2 text-balance">{drip.name}</h3>
                          <p className="text-sm text-primary font-medium mb-2">{drip.tagline}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {drip.description}
                          </p>
                        </div>

                        {/* Target Audience Section */}
                        <div className="bg-primary/5 rounded-lg p-4 space-y-2 border border-primary/10">
                          <h4 className="font-semibold text-sm flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-lg">group</span>
                            Ideal For:
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {getTargetAudience(drip.slug)}
                          </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-2 flex-grow">
                          <h4 className="font-semibold text-sm">Key Benefits:</h4>
                          <div className="grid gap-2">
                            {drip.benefits.slice(0, 3).map((benefit) => (
                              <div key={benefit} className="flex items-center gap-2">
                                <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <Check className="h-2.5 w-2.5 text-primary" />
                                </div>
                                <span className="text-xs text-muted-foreground line-clamp-1">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
