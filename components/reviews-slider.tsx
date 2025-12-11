"use client"

import type React from "react"
import { useState } from "react"

interface Review {
  text: string
  author: string
}

interface ReviewsSliderProps {
  reviews: Review[]
}

export default function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Number of reviews to show at once based on screen size
  const reviewsPerView = 3

  const maxIndex = Math.max(0, reviews.length - reviewsPerView)

  const getProfilePhoto = (name: string, index: number): string => {
    // Map each reviewer to their specific photo
    const reviewerPhotos: { [key: string]: string } = {
      "khaled ali": "/reviews/khaled-ali.jpg",
      "omer alrasheed": "/reviews/omer-alrasheed.jpg",
      "abo-yazeed": "/reviews/abo-yazeed.jpg",
      "ahmed owaidan": "/reviews/ahmed-owaidan.jpg",
      "nada al-amry": "/reviews/nada-al-amry.jpg",
      "nora bin fahad": "/reviews/nora-bin-fahad.jpg",
    }

    return reviewerPhotos[name.toLowerCase()] || "/placeholder.svg?height=32&width=32"
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
        aria-label="Previous reviews"
      >
        <span className="material-symbols-outlined leading-none block">chevron_left</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex >= maxIndex}
        aria-label="Next reviews"
      >
        <span className="material-symbols-outlined leading-none block">chevron_right</span>
      </button>

      {/* Slider Container */}
      <div className="py-4" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / reviewsPerView)}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="min-w-full md:min-w-[33.333%] px-4">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-primary"
                        style={{ fontSize: "24px", fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-lg text-foreground mb-6 flex-grow leading-relaxed">"{review.text}"</p>

                  <div className="flex items-center gap-3">
                    <img
                      src={getProfilePhoto(review.author, index) || "/placeholder.svg?height=32&width=32"}
                      alt={`${review.author} profile`}
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div className="font-semibold text-primary capitalize">{review.author}</div>
                  </div>
                </div>
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
