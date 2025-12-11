import CategoryPageClient from "./client"

const categories = [
  {
    name: "Home Care Department",
    slug: "home-care",
    categoryId: 636897,
    description: "Licensed healthcare pros come to you for nursing, rehab, and chronic disease care.",
    icon: "home_health",
    features: [
      "Licensed Medical Pros",
      "Full Health Assessments",
      "Custom Care Plans",
      "24/7 Support",
      "Safe Environment",
      "Chronic Disease Care",
    ],
    benefits: [
      "Get care without leaving home",
      "Avoid hospital infections",
      "Flexible scheduling",
      "Family can be present",
    ],
    image: "/saudi-doctor-visiting-patient-home-medical-care.jpg",
  },
  {
    name: "E-Pharmacy",
    slug: "e-pharmacy",
    categoryId: 641133,
    description: "Order meds online with fast delivery and 24/7 pharmacist consultation.",
    icon: "local_pharmacy",
    features: [
      "Fast Delivery",
      "Pharmacist Consultation",
      "Wide Selection",
      "Prescription Management",
      "Refill Reminders",
      "Secure Ordering",
    ],
    benefits: ["Save time ordering online", "Get expert advice", "Never miss a dose", "Discreet service"],
    image: "/saudi-pharmacist-medication-delivery-e-pharmacy.jpg",
  },
  {
    name: "Dental Clinic",
    slug: "dental-clinic",
    categoryId: 641132,
    description: "Complete dental care from checkups to advanced treatments with modern equipment.",
    icon: "dentistry",
    features: [
      "Experienced Dentists",
      "Modern Equipment",
      "Full Dental Treatments",
      "Cosmetic Services",
      "Flexible Scheduling",
      "Emergency Care",
    ],
    benefits: ["Maintain healthy teeth", "Improve your smile", "Latest technology", "Comfortable experience"],
    image: "/saudi-dentist-dental-clinic-checkup-patient.jpg",
  },
  {
    name: "Home Care Department - Jeddah",
    slug: "home-care-jeddah",
    categoryId: 920082,
    description: "Specialized home healthcare in Jeddah with local pros who know the area.",
    icon: "home_health",
    features: [
      "Local Pros",
      "Regional Knowledge",
      "Full Home Services",
      "Culturally Aware",
      "Emergency Response",
      "Custom Treatment Plans",
    ],
    benefits: [
      "Quality care in Jeddah",
      "Pros who understand local culture",
      "Arabic and English care",
      "Quick response times",
    ],
    image: "/saudi-doctor-visiting-patient-home-medical-care.jpg",
  },
  {
    name: "Insurance",
    slug: "insurance",
    categoryId: 640942,
    description: "Medical insurance support. We work with major providers for easy billing.",
    icon: "shield",
    features: [
      "Multiple Providers",
      "Direct Billing",
      "Claims Support",
      "Coverage Check",
      "Pre-Auth Help",
      "Clear Pricing",
    ],
    benefits: ["Easy claims processing", "Works with your insurer", "Clear coverage info", "Lower costs"],
    image: "/insurance-healthcare-coverage.jpg",
  },
  {
    name: "Home Laboratory Tests",
    slug: "home-laboratory-tests",
    categoryId: 640935,
    description: "Pro lab tests at your location. Certified techs, fast results, complete privacy.",
    icon: "biotech",
    features: [
      "Many Tests Available",
      "Certified Techs",
      "Fast Results",
      "Safe Collection",
      "Digital Results",
      "Follow-up Available",
    ],
    benefits: ["Convenient home testing", "Skip waiting rooms", "Fast, accurate results", "Complete privacy"],
    image: "/saudi-lab-technician-home-blood-test-collection.jpg",
  },
  {
    name: "Urgent Care",
    slug: "urgent-care",
    categoryId: 640934,
    description: "Fast care for non-emergencies. Quick response with experienced teams, available 24/7.",
    icon: "emergency",
    features: [
      "24/7 Available",
      "Fast Response",
      "Experienced Team",
      "Full Assessment",
      "Mobile Equipment",
      "Hospital Coordination",
    ],
    benefits: ["Get care fast", "Skip ER wait times", "Pro assessment at home", "Round-the-clock access"],
    image: "/saudi-paramedic-urgent-care-emergency-response.jpg",
  },
  {
    name: "Office Medical Care - Staff Clinic",
    slug: "office-medical-care",
    categoryId: 640923,
    description: "On-site medical services for businesses. Staff clinics, screenings, and wellness programs.",
    icon: "corporate_fare",
    features: [
      "On-site Staff",
      "Health Screenings",
      "Vaccination Programs",
      "Emergency Response",
      "Wellness Programs",
      "Occupational Health",
    ],
    benefits: ["Fewer sick days", "Better productivity", "Meet health requirements", "Convenient office care"],
    image: "/saudi-medical-team-office-corporate-health-screening.jpg",
  },
  {
    name: "Nursing Care - Jeddah",
    slug: "nursing-care-jeddah",
    categoryId: 920083,
    description: "Pro nursing in Jeddah. Wound care, meds, IV therapy, and monitoring by skilled nurses.",
    icon: "health_and_safety",
    features: [
      "Licensed Nurses",
      "Wound Care Specialists",
      "IV Therapy",
      "Patient Monitoring",
      "Post-Surgery Care",
      "Chronic Care",
    ],
    benefits: ["Expert nursing in Jeddah", "Custom care plans", "Comfortable home recovery", "Family involvement"],
    image: "/saudi-nurse-home-nursing-care-patient-monitoring.jpg",
  },
  {
    name: "Home Baby Vaccine",
    slug: "home-baby-vaccine",
    categoryId: 640927,
    description: "Baby vaccines at home by pediatric nurses. Follow WHO schedules in a safe environment.",
    icon: "vaccines",
    features: [
      "Pediatric Nurses",
      "WHO Vaccines",
      "Schedule Tracking",
      "Comfortable Home",
      "Parent Support",
      "Digital Records",
    ],
    benefits: [
      "Keep your child protected",
      "Less stressful than clinics",
      "Stay on schedule",
      "Safe, familiar setting",
    ],
    image: "/saudi-nurse-baby-vaccination-home-pediatric-care.jpg",
  },
  {
    name: "Medical Consultation - Video",
    slug: "medical-consultation-video",
    categoryId: 640922,
    description: "Video consultations with licensed doctors. Get advice, renew prescriptions, and follow up.",
    icon: "video_call",
    features: [
      "Licensed Doctors",
      "Secure Platform",
      "Prescription Services",
      "Easy Scheduling",
      "Medical Records",
      "Follow-up Care",
    ],
    benefits: ["Consult from anywhere", "Save time and money", "Quick expert access", "Great for follow-ups"],
    image: "/saudi-doctor-video-consultation-telemedicine.jpg",
  },
  {
    name: "Radiology",
    slug: "radiology",
    categoryId: 640941,
    description: "Diagnostic imaging at home. X-rays, ultrasounds with portable equipment and certified radiologists.",
    icon: "radiology",
    features: [
      "Portable Equipment",
      "Certified Radiologists",
      "Multiple Imaging Types",
      "Fast Results",
      "Digital Storage",
      "Expert Analysis",
    ],
    benefits: ["Advanced imaging at home", "Accurate diagnosis", "Skip hospital visits", "Fast turnaround"],
    image: "/saudi-radiologist-portable-xray-home-imaging.jpg",
  },
  {
    name: "Special Offers",
    slug: "special-offers",
    categoryId: 640940,
    description: "Healthcare packages at great value. Check regularly for seasonal deals and bundles.",
    icon: "local_offer",
    features: [
      "Seasonal Packages",
      "Bundled Discounts",
      "Preventive Programs",
      "Family Packages",
      "Limited Promotions",
      "Member Benefits",
    ],
    benefits: ["Save on premium care", "Comprehensive packages", "Great for preventive care", "Exclusive member perks"],
    image: "/special-offers-healthcare-discount.jpg",
  },
]

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return {
      title: "Category Not Found - 5CARE Network",
    }
  }

  return {
    title: `${category.name} - 5CARE Network`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)

  return <CategoryPageClient category={category} slug={slug} />
}
