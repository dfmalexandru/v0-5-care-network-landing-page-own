"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

interface Category {
  name: string
  slug: string
  description?: string
}

interface CategoriesSectionProps {
  categories: Category[]
}

export default function CategoriesSection({ categories }: CategoriesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const categoriesPerView = 4

  const maxIndex = Math.max(0, categories.length - categoriesPerView)

  // Helper function to determine the icon for each category
  const getCategoryIcon = (slug: string) => {
    const iconMap: Record<string, string> = {
      "home-care": "home_health",
      "e-pharmacy": "local_pharmacy",
      "dental-clinic": "dentistry",
      "home-care-jeddah": "home_health",
      insurance: "shield",
      "home-laboratory-tests": "biotech",
      "urgent-care": "emergency",
      "office-medical-care": "corporate_fare",
      "nursing-care-jeddah": "health_and_safety",
      "home-baby-vaccine": "vaccines",
      "medical-consultation-video": "video_call",
      radiology: "radiology",
      "special-offers": "local_offer",
    }
    return iconMap[slug] || "medical_services"
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }

    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === 0}
        aria-label="Previous categories"
      >
        <span className="material-symbols-outlined leading-none block">chevron_left</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex >= maxIndex}
        aria-label="Next categories"
      >
        <span className="material-symbols-outlined leading-none block">chevron_right</span>
      </button>

      {/* Slider Container */}
      <div className="py-4" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / categoriesPerView)}%)`,
            }}
          >
            {categories.map((category, index) => (
              <div key={index} className="min-w-full md:min-w-[25%] px-4" id={`category-${category.slug}`}>
                <Card className="group cursor-pointer border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-background h-full">
                  <CardContent className="p-8 h-full flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">
                        {getCategoryIcon(category.slug)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg text-balance group-hover:text-primary transition-colors leading-snug">
                      {category.name}
                    </h4>
                    {category.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed text-balance">
                        {category.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
