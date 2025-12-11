"use client"

import type React from "react"
import { createContext, useContext } from "react"

interface LanguageContextType {
  language: "en"
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const t = (key: string) => {
    return translations[key] || key
  }

  return <LanguageContext.Provider value={{ language: "en", t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations: Record<string, string> = {
  // Navigation
  "nav.services": "Services",
  "nav.ivDrips": "IV Drips",
  "nav.howItWorks": "How It Works",
  "nav.why5cn": "Why Us",
  "nav.bookNow": "Book Now",

  // Hero Section
  "hero.badge": "Licensed by Ministry of Health - License 1410101201200633",
  "hero.badgeMobile1": "Licensed by Ministry of Health",
  "hero.badgeMobile2": "License #1410101201200633",
  "hero.title1": "Healthcare,",
  "hero.title2": "delivered.",
  "hero.description": "Licensed medical care at home. Pick your service, book your time, and we will be there.",
  "hero.exploreServices": "Explore Services",
  "hero.years": "Years in Service",
  "hero.services": "Medical Services",
  "hero.licensed": "Licensed Pros",
  "hero.support": "Always Available",

  // Services Section
  "services.badge": "Our Services",
  "services.title1": "Everything you need",
  "services.title2": "to stay healthy",
  "services.description": "Home visits, lab tests, dental care, and more. Medical care without the hassle.",
  "services.filterAll": "All Services",

  // IV Drips Section
  "ivdrips.badge": "13 IV Treatments",
  "ivdrips.title1": "IV therapy tailored",
  "ivdrips.title2": "to your needs",
  "ivdrips.description":
    "Medical-grade IV drips for energy, beauty, immunity, and recovery. Done by licensed professionals.",
  "ivdrips.filterAll": "All Drips",
  "ivdrips.filterWellness": "Wellness",
  "ivdrips.filterBeauty": "Beauty",
  "ivdrips.filterPerformance": "Performance",
  "ivdrips.filterRecovery": "Recovery",
  "ivdrips.duration": "Duration",
  "ivdrips.from": "From",
  "ivdrips.sar": "SAR",
  "ivdrips.bookNow": "Book Now",
  "ivdrips.keyBenefits": "Key Benefits",

  // Categories Section
  "categories.badge": "All Services",
  "categories.title1": "Browse Our",
  "categories.title2": "Services",
  "categories.description": "Find what you need by category",
  "categories.explore": "View All",
  "categories.exploreServices": "Explore Services",
  "categories.backToHome": "Back to Home",

  // Why 5CN Section
  "why.badge": "Why Choose Us",
  "why.title1": "Top-tier care,",
  "why.title2": "five-star service",
  "why.card1.title": "Licensed Medical Team",
  "why.card1.description": "Every healthcare provider is certified and licensed. We do not compromise on safety.",
  "why.card2.title": "Full-Service Care",
  "why.card2.description": "Testing, treatment, follow-ups - we have got you covered with pro equipment.",
  "why.card3.title": "Easy & Convenient",
  "why.card3.description": "Book in minutes, pick your slot, and get white-glove service from start to finish.",

  // How It Works Section
  "how.badge": "Simple Process",
  "how.title": "Get care in three steps",
  "how.step1.title": "Pick Your Service",
  "how.step1.description": "Choose from home care, lab tests, IV therapy, and more.",
  "how.step2.title": "Book Your Time",
  "how.step2.description": "Select your date and location. We handle everything else.",
  "how.step3.title": "Get Expert Care",
  "how.step3.description": "Our licensed team shows up on time and takes care of you.",

  // Testimonial Section
  "testimonial.quote":
    "Been with 5CARE since 2013. The care is top-notch, and having pros come to your home changes everything.",
  "testimonial.name": "Fatima Al-Qahtani",
  "testimonial.role": "Client Since 2013",

  // Partners Section
  "partners.badge": "Our Partners",
  "partners.title": "Who We Work With",
  "partners.description": "Partnering with leading organizations across Saudi Arabia",

  // Reviews Section
  "reviews.badge": "Reviews",
  "reviews.title": "What People Say",
  "reviews.description": "Real reviews from families across the Kingdom",

  // CTA Section
  "cta.title": "Ready for better care?",
  "cta.description": "Join thousands of Riyadh families who trust us with their health. Book today.",
  "cta.button": "Schedule Now",

  // Footer
  "footer.tagline": "A Saudi company specialized in medical services since 2013",
  "footer.description":
    "Professional healthcare for families across Saudi Arabia. From diagnosis to treatment, our experienced team delivers quality primary care at home.",
  "footer.downloadApp": "Get the App",
  "footer.importantLinks": "Quick Links",
  "footer.shippingPayment": "Shipping & Payment",
  "footer.medicalBlog": "Blog",
  "footer.qa": "FAQs",
  "footer.terms": "Terms & Conditions",
  "footer.returnRefund": "Refunds",
  "footer.location": "Location",
  "footer.aboutUs": "About",
  "footer.privacy": "Privacy",
  "footer.contact": "Contact",
  "footer.copyright": "2025 5CARE Network. All rights reserved.",
  "footer.followUs": "Follow Us",
  "footer.email": "Email",
  "footer.phone": "Phone",
  "footer.address": "Address",
  "footer.appStore": "App Store",
  "footer.googlePlay": "Google Play",

  // Category Pages
  "category.whatWeOffer": "What We Offer",
  "category.browseProducts": "Browse Products & Services",
  "category.viewProducts": "View Products & Book",
  "category.contactDirect": "Contact Us Directly",
  "category.whyChoose": "Why Choose Us",
  "category.readyToStart": "Ready to Get Started?",
  "category.readyDescription":
    "Experience exceptional healthcare services with 5CARE Network. Book your appointment today and let our professionals take care of you.",
  "category.scheduleAppointment": "Schedule Appointment",
  "category.talkToExpert": "Talk to Expert",
  "category.needHelp": "Need Help Choosing?",
  "category.helpDescription": "Our healthcare experts are here to guide you to the right service for your needs",
  "category.contactUs": "Contact Us",
  "category.liveChat": "Live Chat",
  "category.allCategories": "All Categories",
  "category.exploreMedical": "Explore Our Medical Services",
  "category.browseComprehensive": "Browse our comprehensive range of healthcare services organized by specialty",
  "category.available": "Available Products & Services",
  "category.viewCatalog": "View our complete catalog on our main platform",
}
