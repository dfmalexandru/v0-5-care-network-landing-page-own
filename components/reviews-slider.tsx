"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface Review {
  text: string
  author: string
  date: string
}

interface ReviewsSliderProps {
  reviews: Review[]
}

export default function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [reviewsPerView, setReviewsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setReviewsPerView(1)
      } else {
        setReviewsPerView(3)
      }
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const newMaxIndex = Math.max(0, reviews.length - reviewsPerView)
    if (currentIndex > newMaxIndex) {
      setCurrentIndex(newMaxIndex)
    }
  }, [reviewsPerView, reviews.length, currentIndex])

  const maxIndex = Math.max(0, reviews.length - reviewsPerView)

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
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === 0}
        aria-label="Previous reviews"
      >
        <span className="material-symbols-outlined leading-none block text-xl md:text-2xl">chevron_left</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex >= maxIndex}
        aria-label="Next reviews"
      >
        <span className="material-symbols-outlined leading-none block text-xl md:text-2xl">chevron_right</span>
      </button>

      {/* Slider Container */}
      <div
        className="overflow-hidden py-4 mx-6 md:mx-0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / reviewsPerView)}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="px-2 md:px-4 flex-shrink-0" style={{ width: `${100 / reviewsPerView}%` }}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg h-full flex flex-col">
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
                  <p className="text-base md:text-lg text-foreground mb-6 flex-grow leading-relaxed">"{review.text}"</p>

                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-primary capitalize">{review.author}</div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6 md:mt-8 flex-wrap max-w-xs mx-auto">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-6 md:w-8 bg-primary" : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
