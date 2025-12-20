"use client"

import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import TreatmentSlider from "@/components/treatment-slider"
import ReviewsSlider from "@/components/reviews-slider"
import PartnersSlider from "@/components/partners-slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Menu } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import IVDripsSlider from "@/components/iv-drips-slider"
import { ivDripsData } from "@/lib/iv-drips-data"
import { servicesData } from "@/lib/services-data"
import { useState } from "react"
import { LanguageSelector } from "@/components/language-selector"
import { CoverageMap } from "@/components/coverage-map"

export default function HomePage() {
  const { language, t } = useLanguage()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [ivDripsOpen, setIvDripsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const allServices = [
    {
      name: "Home Care Department",
      tagline: "Medical care at your doorstep",
      description:
        "Licensed healthcare pros come to you. Routine checkups, specialized care, or ongoing treatment—all in the comfort of home.",
      benefits: [
        "Licensed medical professionals",
        "Comprehensive health assessments",
        "Personalized care plans",
        "Safe and sterile environment",
      ],
      price: "Starting from 500",
      duration: "Varies",
      image: "/saudi-doctor-visiting-patient-home-medical-care.jpg",
      reverse: false,
    },
    {
      name: "Home Laboratory Tests",
      tagline: "Lab tests without the trip",
      description: "Certified techs collect your samples at home. Fast, accurate results delivered securely to you.",
      benefits: [
        "Wide range of tests available",
        "Quick results delivery",
        "Certified lab technicians",
        "Safe sample collection",
      ],
      price: "Starting from 200",
      duration: "15-30 min",
      image: "/saudi-lab-technician-home-blood-test-collection.jpg",
      reverse: true,
    },
    {
      name: "Home Baby Vaccines",
      tagline: "Keep your child protected",
      description:
        "Pediatric nurses give essential vaccines at home. Follow WHO schedules in a safe, comfortable environment.",
      benefits: [
        "Pediatric-trained professionals",
        "WHO-recommended vaccines",
        "Comfortable home environment",
        "Vaccination schedule tracking",
      ],
      price: "Starting from 300",
      duration: "20-30 min",
      image: "/saudi-nurse-baby-vaccination-home-pediatric-care.jpg",
      reverse: false,
    },
    {
      name: "E-Pharmacy",
      tagline: "Meds delivered fast",
      description: "Order prescriptions and OTC medications with same-day delivery. Pharmacist consultation included.",
      benefits: [
        "Fast delivery service",
        "Licensed pharmacist consultation",
        "Wide medication selection",
        "Prescription management",
      ],
      price: "Variable",
      duration: "Same-day delivery",
      image: "/saudi-pharmacist-medication-delivery-e-pharmacy.jpg",
      reverse: true,
    },
    {
      name: "Urgent Care",
      tagline: "Fast care when you need it",
      description: "Non-emergency medical help, fast. Our team responds quickly for urgent health concerns.",
      benefits: ["Rapid response times", "24/7 availability", "Experienced emergency team", "Comprehensive assessment"],
      price: "Starting from 800",
      duration: "Immediate",
      image: "/saudi-paramedic-urgent-care-emergency-response.jpg",
      reverse: false,
    },
    {
      name: "Medical Consultation - Video",
      tagline: "Doctor visits from anywhere",
      description: "Talk to licensed physicians via video. Get advice, renew prescriptions, and follow up—all online.",
      benefits: [
        "Licensed physicians available",
        "Secure video platform",
        "Prescription services",
        "Convenient scheduling",
      ],
      price: "Starting from 150",
      duration: "20-30 min",
      image: "/saudi-doctor-video-consultation-telemedicine.jpg",
      reverse: true,
    },
    {
      name: "Office Medical Care",
      tagline: "Keep your team healthy",
      description: "On-site medical services for businesses. Staff clinics, health screenings, and wellness programs.",
      benefits: ["On-site medical staff", "Health screening programs", "Emergency response", "Wellness initiatives"],
      price: "Custom packages",
      duration: "Varies",
      image: "/saudi-medical-team-office-corporate-health-screening.jpg",
      reverse: false,
    },
    {
      name: "Home Radiology",
      tagline: "Imaging at your location",
      description: "X-rays, ultrasounds, and diagnostic imaging with portable equipment and certified radiologists.",
      benefits: ["Portable medical equipment", "Certified radiologists", "Quick results delivery", "Home convenience"],
      price: "Starting from 400",
      duration: "30-45 min",
      image: "/saudi-radiologist-portable-xray-home-imaging.jpg",
      reverse: true,
    },
    {
      name: "Home Nursing Care",
      tagline: "Skilled nursing at home",
      description: "Licensed nurses for ongoing care. Wound care, meds, IV therapy, and monitoring—all at home.",
      benefits: [
        "Licensed professional nurses",
        "Personalized care plans",
        "24/7 care options available",
        "Medical equipment provided",
      ],
      price: "Starting from 600",
      duration: "Custom schedules",
      image: "/saudi-nurse-home-nursing-care-patient-monitoring.jpg",
      reverse: false,
    },
  ]

  const ivDrips = ivDripsData.map((drip) => ({
    name: drip.name,
    slug: drip.slug,
    tagline: drip.tagline,
    description: drip.description,
    benefits: drip.benefits,
    price: drip.price,
    duration: drip.duration,
    image: drip.image,
  }))

  const reviews = [
    {
      text: "They provided home vaccination service to my child, frankly their service is excellent",
      author: "khaled ali",
      date: "2 months ago",
    },
    {
      text: "it was a great experience and wonderful serves",
      author: "omer alrasheed",
      date: "3 months ago",
    },
    {
      text: "Speed, ease of delivery and punctuality",
      author: "abo-yazeed",
      date: "1 month ago",
    },
    {
      text: "Very excellent service, speed of communication and achievement, and distinguished medical staff, thank you",
      author: "ahmed owaidan",
      date: "2 weeks ago",
    },
    {
      text: "Excellent but they lack vital data for the child",
      author: "nada al-amry",
      date: "4 months ago",
    },
    {
      text: "It was a good experience with you.",
      author: "Nora Bin Fahad",
      date: "1 month ago",
    },
  ]

  const categories = [
    {
      name: "Home Care Department",
      slug: "home-care",
      description: "Licensed pros deliver medical care at home. Nursing, rehab, and chronic disease management.",
    },
    {
      name: "E-Pharmacy",
      slug: "e-pharmacy",
      description: "Order meds online with fast delivery and 24/7 pharmacist consultation.",
    },
    {
      name: "Insurance",
      slug: "insurance",
      description: "Medical insurance support. We work with major providers for seamless billing.",
    },
    {
      name: "Home Laboratory Tests",
      slug: "home-laboratory-tests",
      description: "Pro lab testing at your location. Fast, accurate results delivered securely.",
    },
    {
      name: "Urgent Care",
      slug: "urgent-care",
      description: "Fast medical attention for non-emergencies. 24/7 response for urgent concerns.",
    },
    {
      name: "Office Medical Care - Staff Clinic",
      slug: "office-medical-care",
      description: "On-site medical services for businesses. Clinics, screenings, and wellness programs.",
    },
    {
      name: "Home Baby Vaccine",
      slug: "home-baby-vaccine",
      description: "Baby vaccines at home by pediatric nurses. Follow WHO schedules safely.",
    },
    {
      name: "Medical Consultation - Video",
      slug: "medical-consultation-video",
      description: "Video consultations with licensed doctors. Advice, prescriptions, and follow-ups.",
    },
    {
      name: "Radiology",
      slug: "radiology",
      description: "Diagnostic imaging at home. X-rays, ultrasounds with portable equipment.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-removebg-preview-201.png"
              alt="5CARE Network"
              width={160}
              height={60}
              className="w-auto text-center h-[51px]"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                {t("nav.services")} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[700px] p-6">
                <div>
                  {/* Services Section */}
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {t("nav.services")}
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {allServices.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <a
                          href={`#service-${service.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[^a-z0-9-]/g, "")}`}
                          className="cursor-pointer block py-2 px-3 rounded-md hover:bg-accent"
                          onClick={(e) => {
                            e.preventDefault()
                            const hash = `#service-${service.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")
                              .replace(/[^a-z0-9-]/g, "")}`
                            // Scroll to services section first
                            const servicesSection = document.getElementById("services")
                            if (servicesSection) {
                              servicesSection.scrollIntoView({ behavior: "smooth" })
                            }
                            // Then update hash to trigger slider scroll
                            setTimeout(() => {
                              window.location.hash = hash
                            }, 500)
                          }}
                        >
                          <div className="font-medium text-sm">{service.name}</div>
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                IV Drips <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[700px] p-6 max-h-[500px] overflow-y-auto">
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    IV Drips
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {ivDripsData.map((drip) => (
                      <DropdownMenuItem key={drip.slug} asChild>
                        <a
                          href={`#iv-drip-${drip.slug}`}
                          className="cursor-pointer block py-2 px-3 rounded-md hover:bg-accent"
                          onClick={(e) => {
                            e.preventDefault()
                            const hash = `#iv-drip-${drip.slug}`
                            // Scroll to IV drips section first
                            const ivDripsSection = document.getElementById("iv-drips")
                            if (ivDripsSection) {
                              ivDripsSection.scrollIntoView({ behavior: "smooth" })
                            }
                            // Then update hash to trigger slider scroll
                            setTimeout(() => {
                              window.location.hash = hash
                            }, 500)
                          }}
                        >
                          <div className="font-medium text-sm">{drip.name}</div>
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t("nav.howItWorks")}
            </a>
            <a href="#why-5cn" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {t("nav.why5cn")}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-bold px-2 py-1.5">
              EN
            </span>
            <LanguageSelector />

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] p-0 overflow-y-auto">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="p-6 border-b">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                      <Image
                        src="/images/logo-removebg-preview-201.png"
                        alt="5CARE Network"
                        width={140}
                        height={50}
                        className="w-auto h-[45px]"
                      />
                    </Link>
                  </div>

                  {/* Mobile Menu Navigation */}
                  <nav className="flex-1 p-4">
                    {/* Services Accordion */}
                    <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground hover:text-primary transition-colors">
                        {t("nav.services")}
                        <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 pb-2 max-h-[300px] overflow-y-auto">
                        <div className="flex flex-col gap-1">
                          {servicesData.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* IV Drips Accordion */}
                    <Collapsible open={ivDripsOpen} onOpenChange={setIvDripsOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground hover:text-primary transition-colors">
                        IV Drips
                        <ChevronDown className={`h-5 w-5 transition-transform ${ivDripsOpen ? "rotate-180" : ""}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4 pb-2 max-h-[300px] overflow-y-auto">
                        <div className="flex flex-col gap-1">
                          {ivDripsData.map((drip) => (
                            <Link
                              key={drip.slug}
                              href={`/iv-drips/${drip.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                            >
                              {drip.name}
                            </Link>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Direct Links */}
                    <a
                      href="#how-it-works"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {t("nav.howItWorks")}
                    </a>
                    <a
                      href="#why-5cn"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {t("nav.why5cn")}
                    </a>
                  </nav>

                  {/* Mobile Menu Footer with CTA */}
                  <div className="p-6 border-t mt-auto">
                    <div className="mb-4 pb-4 border-b">
                      <div className="text-sm font-medium text-muted-foreground mb-2">Language</div>
                      <div className="flex flex-col gap-2">
                        <button className="flex items-center gap-2 py-2 px-3 text-sm text-foreground bg-accent rounded-md">
                          <span>🇬🇧</span>
                          English
                        </button>
                        <a
                          href="https://ae.5cn.site/"
                          className="flex items-center gap-2 py-2 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                        >
                          <span>🇸🇦</span>
                          العربية
                        </a>
                      </div>
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                        {t("nav.bookNow")}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                {t("nav.bookNow")}
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10" />
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecca1ce8-f022-44b4-99ca-53b8bad2b9f9-5ocY18eiO5eYuvOneuJoC0V97cPjFP.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto max-w-6xl relative z-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-sm px-6 py-2 border-primary/30 bg-background/80 backdrop-blur-sm">
              <span className="md:hidden">
                {t("hero.badgeMobile1")}
                <br />
                {t("hero.badgeMobile2")}
              </span>
              <span className="hidden md:inline">{t("hero.badge")}</span>
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
              {t("hero.title1")}
              <br />
              <span className="text-primary">{t("hero.title2")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed md:text-xl">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 h-14 shadow-lg shadow-primary/20"
                asChild
              >
                <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                  {t("nav.bookNow")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 h-14 bg-background/80 backdrop-blur-sm"
                asChild
              >
                <a href="#services">{t("hero.exploreServices")}</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
              <div className="text-center space-y-2 bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="font-bold text-primary text-3xl">10+</div>
                <div className="text-sm text-muted-foreground">{t("hero.years")}</div>
              </div>
              <div className="text-center space-y-2 bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="font-bold text-primary text-3xl">10+</div>
                <div className="text-sm text-muted-foreground">{t("hero.services")}</div>
              </div>
              <div className="text-center space-y-2 bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="font-bold text-primary text-3xl">100%</div>
                <div className="text-sm text-muted-foreground">{t("hero.licensed")}</div>
              </div>
              <div className="text-center space-y-2 bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="font-bold text-primary text-3xl">24/7</div>
                <div className="text-sm text-muted-foreground">{t("hero.support")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 px-6 bg-sidebar">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
          </div>

          <PartnersSlider
            partners={[
              {
                name: "Saudi Aramco",
                logo: "/images/95848976-d434-4830-85cf-c6b976aa630b-removebg-preview.png",
                bgColor: "#ffffff",
              },
              {
                name: "Bupa",
                logo: "/images/66f070cc-d9c1-4d98-864c-030e4d248632-removebg-preview.png",
                bgColor: "#ffffff",
              },
              {
                name: "Tawuniya",
                logo: "/images/3b5aa925-c524-4285-a586-27a12ed00b4e-removebg-preview.png",
                bgColor: "#ffffff",
              },
              {
                name: "Mobily",
                logo: "/images/05aa9c7d-cb8b-4ae3-8e51-6156866a2d0d-removebg-preview.png",
                bgColor: "#ffffff",
              },
              {
                name: "Al Rajhi Takaful",
                logo: "/images/al.png",
                bgColor: "#ffffff",
              },
              {
                name: "Meena",
                logo: "/images/partners/meena-logo.svg",
                bgColor: "#ffffff",
              },
              {
                name: "Medgulf",
                logo: "/images/partners/medgulf-logo.png",
                bgColor: "#ffffff",
              },
              {
                name: "Walaa",
                logo: "/images/partners/walaa-logo.png",
                bgColor: "#ffffff",
              },
            ]}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6 text-balance font-bold">
            {t("services.title1")}
            <br />
            {t("services.title2")}
          </h2>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">{t("services.description")}</p>
        </div>

        {/* TreatmentSlider Component */}
        <TreatmentSlider treatments={allServices} />
      </section>

      {/* IV Drips Section */}
      <section id="iv-drips" className="py-24 md:py-32 container mx-auto px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 text-base px-4 py-2 border-none font-bold"
            style={{ backgroundColor: "#E4F4F8", color: "#13AACF" }}
          >
            {t("ivdrips.badge")}
          </Badge>
          <h2 className="text-5xl md:text-6xl mb-6 text-balance font-bold text-primary">
            {t("ivdrips.title1")}
            <br />
            {t("ivdrips.title2")}
          </h2>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">{t("ivdrips.description")}</p>
        </div>

        {/* IV Drips Slider Component */}
        <IVDripsSlider drips={ivDrips} language={language} />
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 text-sm px-6 py-2 border-primary/30 border-none bg-background text-foreground"
            >
              {t("categories.badge")}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              {t("categories.title1")}
              <br />
              <span className="text-primary">{t("categories.title2")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              {t("categories.description")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              // Icon mapping for each category
              const getIcon = (slug: string) => {
                const iconMap: Record<string, string> = {
                  "home-care": "home_health",
                  "e-pharmacy": "medication",
                  "dental-clinic": "dentistry",
                  "home-care-jeddah": "location_home",
                  insurance: "shield",
                  "home-laboratory-tests": "science",
                  "urgent-care": "emergency",
                  "office-medical-care": "business",
                  "nursing-care-jeddah": "medical_services",
                  "home-baby-vaccine": "vaccines",
                  "medical-consultation-video": "video_call",
                  radiology: "radiology",
                  "special-offers": "local_offer",
                }
                return iconMap[slug] || "medical_services"
              }

              // Image mapping for each category
              const getImageUrl = (slug: string) => {
                const imageMap: Record<string, string> = {
                  "home-care": "/medical-home-care-bag-no-background.jpg",
                  "e-pharmacy": "/medicine-pill-bottles-transparent.jpg",
                  "dental-clinic": "/dental-tools-white-background.jpg",
                  "home-care-jeddah": "/medical-stethoscope-white-background.jpg",
                  insurance: "/medical-insurance-clipboard-white-background.jpg",
                  "home-laboratory-tests": "/lab-test-tubes-white-background.jpg",
                  "urgent-care": "/emergency-medical-kit-white-background.jpg",
                  "office-medical-care": "/office-medical-supplies-white-background.jpg",
                  "nursing-care-jeddah": "/nursing-care-equipment-white-background.jpg",
                  "home-baby-vaccine": "/vaccine-syringe-white-background.jpg",
                  "medical-consultation-video": "/laptop-video-call-white-background.jpg",
                  radiology: "/xray-film-white-background.jpg",
                  "special-offers": "/gift-box-medical-discount-white-background.jpg",
                }
                return imageMap[slug] || "/medical-home-care-bag-no-background.jpg"
              }

              const icon = getIcon(category.slug)
              const image = getImageUrl(category.slug)

              return (
                <Link key={category.slug} href={`/categories/${category.slug}`}>
                  <Card className="group relative overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer h-full">
                    <CardContent className="p-8 relative z-10">
                      <div className="flex flex-col h-full">
                        <div className="rounded-2xl bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                          <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed flex-grow">{category.description}</p>

                        <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                          <span>{t("categories.explore")}</span>
                          <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                      </div>
                    </CardContent>

                    {/* Background Object Photo */}
                    <div className="absolute bottom-0 right-0 w-48 h-48 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                      <Image src={image || "/placeholder.svg"} alt="" fill className="object-cover object-center" />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section id="why-5cn" className="py-32 px-6 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/images/screenshot-202025-11-11-20at-2019.png" alt="" fill className="object-cover" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 text-sm px-6 py-2 border-primary/30 border-none bg-sidebar-accent text-foreground"
            >
              {t("why.badge")}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              {t("why.title1")}
              <br />
              <span className="text-primary">{t("why.title2")}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-background/80 backdrop-blur-sm">
              <CardContent className="p-10 space-y-4">
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center bg-primary">
                  <span className="material-symbols-outlined text-background" style={{ fontSize: "32px" }}>
                    shield
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{t("why.card1.title")}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("why.card1.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background/80 backdrop-blur-sm">
              <CardContent className="p-10 space-y-4">
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center bg-primary">
                  <span className="material-symbols-outlined text-background" style={{ fontSize: "32px" }}>
                    workspace_premium
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{t("why.card2.title")}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("why.card2.description")}</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-background/80 backdrop-blur-sm">
              <CardContent className="p-10 space-y-4">
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center bg-primary">
                  <span className="material-symbols-outlined text-background" style={{ fontSize: "32px" }}>
                    star
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{t("why.card3.title")}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{t("why.card3.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 text-sm px-6 py-2 border-primary/30 border-none bg-sidebar-accent text-foreground"
            >
              {t("how.badge")}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t("how.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line 1-2 */}
            <div className="hidden md:block absolute top-12 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/50 to-primary/50 transform -translate-x-1/2 -z-[2]" />
            {/* Connecting line 2-3 */}
            <div className="hidden md:block absolute top-12 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-primary/50 to-primary/50 transform -translate-x-1/2 -z-[2]" />

            <div className="relative text-center z-10">
              <div className="mb-8 relative inline-block">
                <div className="h-24 w-24 rounded-3xl flex items-center justify-center text-4xl font-bold text-primary mx-auto shadow-lg bg-card">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("how.step1.title")}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{t("how.step1.description")}</p>
            </div>

            <div className="relative text-center z-10">
              <div className="mb-8 relative inline-block">
                <div className="h-24 w-24 rounded-3xl flex items-center justify-center text-4xl font-bold text-primary mx-auto shadow-lg bg-card">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("how.step2.title")}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{t("how.step2.description")}</p>
            </div>

            <div className="relative text-center z-10">
              <div className="mb-8 relative inline-block">
                <div className="h-24 w-24 rounded-3xl flex items-center justify-center text-4xl font-bold text-primary mx-auto shadow-lg bg-card">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("how.step3.title")}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{t("how.step3.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/homepage-final-535x535-qrwxs0fbol1p82nsry5kbnvwvzo8ezok6cg8ir9qfk.jpg"
                alt="5CN Client Testimonial"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="flex gap-1">
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
              <blockquote className="text-3xl md:text-4xl font-medium leading-relaxed text-balance">
                {t("testimonial.quote")}
              </blockquote>
              <div>
                <div className="font-semibold text-xl">{t("testimonial.name")}</div>
                <div className="text-muted-foreground">{t("testimonial.role")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-6 text-sm px-6 py-2 border-primary/30 border-none bg-background text-foreground"
            >
              {t("reviews.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("reviews.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("reviews.description")}</p>
          </div>

          {/* Reviews Slider */}
          <ReviewsSlider reviews={reviews} />
        </div>
      </section>

      {/* Coverage Map Section */}
      <CoverageMap />

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 bg-cyan-600">
        <div className="container mx-auto max-w-4xl relative z-20">
          <div className="text-center space-y-8 text-primary-foreground">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">{t("cta.title")}</h2>
            <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto text-balance leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-10 h-14 shadow-xl" asChild>
                <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                  {t("cta.button")}
                  <ChevronDown className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* About Section */}
            <div className="md:col-span-1">
              <Image
                src="/images/logo-removebg-preview.png"
                alt="5CARE Network"
                width={180}
                height={60}
                className="h-14 w-auto mb-6"
              />
              <h4 className="font-semibold mb-4">{t("footer.tagline")}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t("footer.description")}</p>

              {/* CHANGE: Hidden download app CTAs for now */}
              {/* Mobile Apps - Hidden for now */}
              {/*
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{t("footer.downloadApp")}</h4>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://apps.apple.com/app/id6450383779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img src="/images/mobile-20app-20store-20badge-1.png" alt="App Store" className="h-10" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.appsbunches.carenetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img src="/images/mobile-20app-20store-20badge.png" alt="Google Play" className="h-10" />
                  </a>
                </div>
              </div>
              */}
            </div>

            {/* Important Links - Column 1 */}
            <div>
              <h4 className="font-semibold mb-4">{t("footer.importantLinks")}</h4>
              <div className="space-y-2">
                <a
                  href="/pages/shipping-and-payment"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.shippingPayment")}
                </a>
                <a
                  href="/pages/medical-blog/54327"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.medicalBlog")}
                </a>
                <a
                  href="/pages/qa/54329"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.qa")}
                </a>
                <a
                  href="/pages/terms-and-conditions/54337"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.terms")}
                </a>
                <a
                  href="/pages/return-and-refund-policy/58575"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.returnRefund")}
                </a>
              </div>
            </div>

            {/* Important Links - Column 2 */}
            <div>
              <h4 className="font-semibold mb-4">&nbsp;</h4>
              <div className="space-y-2">
                <a
                  href="/pages/google-location/54081"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.location")}
                </a>
                <a
                  href="/pages/about-us/54328"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.aboutUs")}
                </a>
                <a
                  href="/pages/privacy-policy/54330"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.privacy")}
                </a>
                {/* Updated Contact us link to WhatsApp */}
                <a
                  href="https://wa.me/966115127600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.contact")}
                </a>
              </div>
            </div>

            {/* Social Networks & Contact */}
            <div>
              <h4 className="font-semibold mb-4">{t("footer.followUs")}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                <a
                  href="https://www.instagram.com/5care_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  @5care_network
                </a>
              </p>

              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://www.facebook.com/5CARENetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <img
                    src="/images/facebook.svg"
                    alt=""
                    className="w-6 h-6"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(500%) hue-rotate(160deg) brightness(95%)",
                    }}
                  />
                </a>
                <a
                  href="https://www.snapchat.com/add/fivecarenetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Snapchat"
                >
                  <img
                    src="/images/snapchat.svg"
                    alt=""
                    className="w-6 h-6"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(500%) hue-rotate(160deg) brightness(95%)",
                    }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/5care_network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <img
                    src="/images/instagram.svg"
                    alt=""
                    className="w-6 h-6"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(500%) hue-rotate(160deg) brightness(95%)",
                    }}
                  />
                </a>
                <a
                  href="tel:+966920035182"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Phone"
                >
                  <img
                    src="/images/phone.svg"
                    alt=""
                    className="w-6 h-6"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(500%) hue-rotate(160deg) brightness(95%)",
                    }}
                  />
                </a>
                <a
                  href="https://www.5cn-sa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Website"
                >
                  <img
                    src="/images/website.svg"
                    alt=""
                    className="w-6 h-6"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(500%) hue-rotate(160deg) brightness(95%)",
                    }}
                  />
                </a>
                <a
                  href="mailto:customer.service@5cn-sa.com"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <img
                    src="/images/email.svg"
                    alt=""
                    className="w-6 h-6"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(500%) hue-rotate(160deg) brightness(95%)",
                    }}
                  />
                </a>
                <a
                  href="https://maps.google.com/?q=24.56017538075526,46.70830428600311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Location"
                >
                  <img
                    src="/images/map.svg"
                    alt=""
                    className="w-6 h-6"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(500%) hue-rotate(160deg) brightness(95%)",
                    }}
                  />
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "18px" }}>
                    call
                  </span>
                  <a href="tel:+966920035182" className="hover:text-foreground transition-colors">
                    +966 920 035 182
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: "18px" }}>
                    mail
                  </span>
                  <a href="mailto:customer.service@5cn-sa.com" className="hover:text-foreground transition-colors">
                    customer.service@5cn-sa.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="flex items-center gap-3">
                <a href="/pages/shipping-and-payment" className="hover:opacity-80 transition-opacity" title="Apple Pay">
                  <img src="https://media.zid.store/static/apple_pay.svg" alt="Apple Pay" className="h-8 w-auto" />
                </a>
                <a href="/pages/shipping-and-payment" className="hover:opacity-80 transition-opacity" title="Mada">
                  <img src="/images/design-mode/mada-circle.png" alt="Mada" className="h-8 w-auto" />
                </a>
                <a href="/pages/shipping-and-payment" className="hover:opacity-80 transition-opacity" title="Visa">
                  <img src="/images/design-mode/visa-circle.png" alt="Visa" className="h-8 w-auto" />
                </a>
                <a
                  href="/pages/shipping-and-payment"
                  className="hover:opacity-80 transition-opacity"
                  title="Mastercard"
                >
                  <img src="/images/design-mode/mastercard-circle.png" alt="Mastercard" className="h-8 w-auto" />
                </a>
                <a
                  href="/pages/shipping-and-payment"
                  className="hover:opacity-80 transition-opacity"
                  title="American Express"
                >
                  <img src="/images/design-mode/amex.png" alt="American Express" className="h-8 w-auto" />
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <div className="text-sm text-muted-foreground">{t("footer.copyright")}</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "18px" }}>
                  receipt_long
                </span>
                <span>Tax ID: 1010213642</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: "18px" }}>
                shield
              </span>
              <span>{t("hero.badge")}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
