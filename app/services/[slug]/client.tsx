"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react"
import type { Service } from "@/lib/services-data"

interface ServicePageClientProps {
  service: Service
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [service.slug])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-removebg-preview-201.png"
              alt="5CARE Network"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm">
              <span className="material-symbols-outlined text-lg mr-2">arrow_back</span>
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="material-symbols-outlined text-lg">medical_services</span>
                Healthcare Service
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">{service.name}</h1>
              <p className="text-xl text-primary font-medium">{service.tagline}</p>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">{service.description}</p>

              {/* Price and Duration */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted">
                  <span className="material-symbols-outlined text-primary text-xl">payments</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="text-lg font-bold">{service.price} SAR</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted">
                  <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="text-lg font-bold">{service.duration}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl">calendar_month</span>
                    Book Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                  <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl">call</span>
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-primary text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                  <p className="font-medium text-lg">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Who Is This For?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{service.targetAudience}</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {service.howItWorks.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-balance">Ready to Get Started?</h2>
              <p className="text-lg text-primary-foreground/90 text-balance max-w-2xl mx-auto">
                Book your {service.name} today and experience the convenience of professional healthcare services.
              </p>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{service.price} SAR</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl">calendar_month</span>
                    Book Appointment
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl">support_agent</span>
                    Ask a Question
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-removebg-preview.png"
                alt="5CARE Network"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">2025 5CARE Network. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/966115127600"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="material-symbols-outlined">call</span>
              </a>
              <a
                href="https://www.instagram.com/5care_network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
