"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react"
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const minSwipeDistance = 50

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash.startsWith("iv-drip-")) {
        const dripSlug = hash.replace("iv-drip-", "")
        const dripIndex = drips.findIndex((drip) => drip.slug === dripSlug)
        if (dripIndex !== -1) {
          setSelectedFilter(drips[dripIndex].name)
          setCurrentIndex(dripIndex)
        }
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [drips])

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
      const selectedDrip = drips.find((drip) => drip.name === filter)
      if (selectedDrip) {
        router.push(`/iv-drips/${selectedDrip.slug}`)
      }
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? drips.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === drips.length - 1 ? 0 : prev + 1))
  }

  const getVisibleDrips = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % drips.length
      visible.push(drips[index])
    }
    return visible
  }

  const visibleDrips = getVisibleDrips()

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

      <div className="space-y-8">
        <div className="relative" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          {/* Mobile: Single Card */}
          <div className="md:hidden flex justify-center px-4">
            <div className="w-full max-w-sm">
              <Link href={`/iv-drips/${drips[currentIndex].slug}`} className="block h-full">
                <Card className="border-2 overflow-hidden h-full shadow-lg hover:shadow-xl hover:border-primary/50 transition-all pt-0">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={drips[currentIndex].image || "/placeholder.svg"}
                        alt={drips[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-2xl">
                        <div className="text-2xl font-bold">{drips[currentIndex].price}</div>
                        <div className="text-xs opacity-90">SAR</div>
                        <div className="text-xs opacity-90 mt-1 pt-1 border-t border-primary-foreground/20">
                          Home visit included
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4 flex flex-col flex-grow">
                      <div>
                        <Badge variant="secondary" className="mb-3">
                          {drips[currentIndex].duration}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2 text-balance">{drips[currentIndex].name}</h3>
                        <p className="text-sm text-primary font-medium mb-2">{drips[currentIndex].tagline}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {drips[currentIndex].description}
                        </p>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4 space-y-2 border border-primary/10">
                        <h4 className="font-semibold text-sm flex items-center gap-2 text-primary">
                          <span className="material-symbols-outlined text-lg">group</span>
                          Ideal For:
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {getTargetAudience(drips[currentIndex].slug)}
                        </p>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <h4 className="font-semibold text-sm">Key Benefits:</h4>
                        <div className="grid gap-2">
                          {drips[currentIndex].benefits.slice(0, 3).map((benefit) => (
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
          </div>

          {/* Desktop: Three Cards */}
          <div className="hidden md:grid grid-cols-3 gap-6 px-6">
            {visibleDrips.map((drip, idx) => (
              <Link key={idx} href={`/iv-drips/${drip.slug}`} className="block h-full">
                <Card className="border-2 overflow-hidden h-full shadow-lg hover:shadow-xl hover:border-primary/50 transition-all pt-0">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative aspect-[4/3]">
                      <Image src={drip.image || "/placeholder.svg"} alt={drip.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-2xl">
                        <div className="text-2xl font-bold">{drip.price}</div>
                        <div className="text-xs opacity-90">SAR</div>
                        <div className="text-xs opacity-90 mt-1 pt-1 border-t border-primary-foreground/20">
                          Home visit included
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4 flex flex-col flex-grow">
                      <div>
                        <Badge variant="secondary" className="mb-3">
                          {drip.duration}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2 text-balance">{drip.name}</h3>
                        <p className="text-sm text-primary font-medium mb-2">{drip.tagline}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{drip.description}</p>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4 space-y-2 border border-primary/10">
                        <h4 className="font-semibold text-sm flex items-center gap-2 text-primary">
                          <span className="material-symbols-outlined text-lg">group</span>
                          Ideal For:
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{getTargetAudience(drip.slug)}</p>
                      </div>
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
            {currentIndex + 1} of {drips.length}
          </span>
          <div className="flex gap-2">
            {Array.from({ length: Math.min(10, drips.length) }).map((_, index) => {
              // Map dot index to actual drip index
              const step = drips.length / Math.min(10, drips.length)
              const mappedIndex = Math.floor(index * step)
              const isActive =
                drips.length <= 10
                  ? index === currentIndex
                  : currentIndex >= mappedIndex && currentIndex < Math.floor((index + 1) * step)

              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(mappedIndex)}
                  className={`h-2 rounded-full transition-all ${
                    isActive ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to treatment ${mappedIndex + 1}`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
