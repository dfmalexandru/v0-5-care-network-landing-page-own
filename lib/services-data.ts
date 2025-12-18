export interface Service {
  name: string
  slug: string
  tagline: string
  description: string
  benefits: string[]
  price: string
  duration: string
  image: string
  targetAudience: string
  howItWorks: {
    title: string
    description: string
  }[]
}

export const servicesData: Service[] = [
  {
    name: "Home Care Department",
    slug: "home-care",
    tagline: "Medical care at your doorstep",
    description:
      "Licensed healthcare pros come to you. Routine checkups, specialized care, or ongoing treatment—all in the comfort of home.",
    benefits: [
      "Licensed medical professionals",
      "Comprehensive health assessments",
      "Personalized care plans",
      "Safe and sterile environment",
      "Flexible scheduling",
      "Family involvement in care",
    ],
    price: "Starting from 500",
    duration: "Varies",
    image: "/saudi-doctor-visiting-patient-home-medical-care.jpg",
    targetAudience:
      "Elderly patients, post-surgery recovery patients, individuals with chronic conditions, and families seeking convenient medical care at home.",
    howItWorks: [
      { title: "Book", description: "Schedule your home visit via WhatsApp or phone" },
      { title: "We Come to You", description: "Our licensed medical team arrives at your home" },
      { title: "Assessment", description: "Comprehensive health evaluation and care" },
      { title: "Follow-up", description: "Ongoing support and care plan adjustments" },
    ],
  },
  {
    name: "Home Laboratory Tests",
    slug: "home-laboratory-tests",
    tagline: "Lab tests without the trip",
    description: "Certified techs collect your samples at home. Fast, accurate results delivered securely to you.",
    benefits: [
      "Wide range of tests available",
      "Quick results delivery",
      "Certified lab technicians",
      "Safe sample collection",
      "Digital results access",
      "Insurance accepted",
    ],
    price: "Starting from 200",
    duration: "15-30 min",
    image: "/saudi-lab-technician-home-blood-test-collection.jpg",
    targetAudience:
      "Busy professionals, elderly patients, individuals with mobility issues, and anyone preferring convenient lab testing at home.",
    howItWorks: [
      { title: "Book", description: "Select your tests and schedule a visit" },
      { title: "Sample Collection", description: "Certified technician collects samples at home" },
      { title: "Lab Analysis", description: "Samples processed in certified laboratories" },
      { title: "Results", description: "Receive results securely within 24-48 hours" },
    ],
  },
  {
    name: "Home Baby Vaccines",
    slug: "home-baby-vaccine",
    tagline: "Keep your child protected",
    description:
      "Pediatric nurses give essential vaccines at home. Follow WHO schedules in a safe, comfortable environment.",
    benefits: [
      "Pediatric-trained professionals",
      "WHO-recommended vaccines",
      "Comfortable home environment",
      "Vaccination schedule tracking",
      "Reduced exposure to clinic germs",
      "Less stressful for babies",
    ],
    price: "Starting from 300",
    duration: "20-30 min",
    image: "/saudi-nurse-baby-vaccination-home-pediatric-care.jpg",
    targetAudience:
      "New parents, families with infants and toddlers, and parents seeking a comfortable vaccination experience for their children.",
    howItWorks: [
      { title: "Book", description: "Schedule vaccination based on your child's age" },
      { title: "Nurse Visit", description: "Pediatric nurse arrives with vaccines" },
      { title: "Vaccination", description: "Safe administration in comfortable setting" },
      { title: "Documentation", description: "Updated vaccination records provided" },
    ],
  },
  {
    name: "E-Pharmacy",
    slug: "e-pharmacy",
    tagline: "Meds delivered fast",
    description: "Order prescriptions and OTC medications with same-day delivery. Pharmacist consultation included.",
    benefits: [
      "Fast delivery service",
      "Licensed pharmacist consultation",
      "Wide medication selection",
      "Prescription management",
      "Automatic refill reminders",
      "Secure online ordering",
    ],
    price: "Variable",
    duration: "Same-day delivery",
    image: "/saudi-pharmacist-medication-delivery-e-pharmacy.jpg",
    targetAudience:
      "Patients on regular medications, busy professionals, elderly individuals, and anyone needing convenient medication delivery.",
    howItWorks: [
      { title: "Order", description: "Upload prescription or select OTC medications" },
      { title: "Verification", description: "Pharmacist reviews and verifies your order" },
      { title: "Preparation", description: "Medications prepared with care" },
      { title: "Delivery", description: "Same-day delivery to your doorstep" },
    ],
  },
  {
    name: "Urgent Care",
    slug: "urgent-care",
    tagline: "Fast care when you need it",
    description: "Non-emergency medical help, fast. Our team responds quickly for urgent health concerns.",
    benefits: [
      "Rapid response times",
      "24/7 availability",
      "Experienced emergency team",
      "Comprehensive assessment",
      "On-site treatment",
      "Hospital transfer if needed",
    ],
    price: "Starting from 800",
    duration: "Immediate",
    image: "/saudi-paramedic-urgent-care-emergency-response.jpg",
    targetAudience:
      "Individuals with sudden illness or injury, families needing immediate medical attention, and anyone requiring urgent non-emergency care.",
    howItWorks: [
      { title: "Call", description: "Contact our 24/7 urgent care hotline" },
      { title: "Assessment", description: "Phone triage to understand your situation" },
      { title: "Response", description: "Medical team dispatched immediately" },
      { title: "Treatment", description: "On-site care or hospital coordination" },
    ],
  },
  {
    name: "Medical Consultation - Video",
    slug: "medical-consultation-video",
    tagline: "Doctor visits from anywhere",
    description: "Talk to licensed physicians via video. Get advice, renew prescriptions, and follow up—all online.",
    benefits: [
      "Licensed physicians available",
      "Secure video platform",
      "Prescription services",
      "Convenient scheduling",
      "Medical records access",
      "Follow-up consultations",
    ],
    price: "Starting from 150",
    duration: "20-30 min",
    image: "/saudi-doctor-video-consultation-telemedicine.jpg",
    targetAudience:
      "Busy professionals, patients seeking second opinions, individuals in remote areas, and anyone preferring virtual healthcare consultations.",
    howItWorks: [
      { title: "Book", description: "Schedule your video consultation online" },
      { title: "Connect", description: "Join secure video call at scheduled time" },
      { title: "Consult", description: "Discuss your health concerns with doctor" },
      { title: "Prescription", description: "Receive prescriptions and recommendations" },
    ],
  },
  {
    name: "Office Medical Care",
    slug: "office-medical-care",
    tagline: "Keep your team healthy",
    description: "On-site medical services for businesses. Staff clinics, health screenings, and wellness programs.",
    benefits: [
      "On-site medical staff",
      "Health screening programs",
      "Emergency response",
      "Wellness initiatives",
      "Reduced absenteeism",
      "Employee health tracking",
    ],
    price: "Custom packages",
    duration: "Varies",
    image: "/saudi-medical-team-office-corporate-health-screening.jpg",
    targetAudience:
      "Corporations, small businesses, HR departments, and companies investing in employee health and wellness programs.",
    howItWorks: [
      { title: "Consult", description: "Discuss your company's health needs" },
      { title: "Plan", description: "Customized program designed for your team" },
      { title: "Implement", description: "Medical services deployed at your office" },
      { title: "Monitor", description: "Ongoing health tracking and reporting" },
    ],
  },
  {
    name: "Home Radiology",
    slug: "radiology",
    tagline: "Imaging at your location",
    description: "X-rays, ultrasounds, and diagnostic imaging with portable equipment and certified radiologists.",
    benefits: [
      "Portable medical equipment",
      "Certified radiologists",
      "Quick results delivery",
      "Home convenience",
      "Multiple imaging options",
      "Digital image access",
    ],
    price: "Starting from 400",
    duration: "30-45 min",
    image: "/saudi-radiologist-portable-xray-home-imaging.jpg",
    targetAudience:
      "Patients with mobility limitations, post-surgery patients, elderly individuals, and anyone requiring diagnostic imaging at home.",
    howItWorks: [
      { title: "Book", description: "Schedule your imaging appointment" },
      { title: "Setup", description: "Technician arrives with portable equipment" },
      { title: "Imaging", description: "Safe diagnostic imaging performed" },
      { title: "Results", description: "Radiologist analysis and report delivery" },
    ],
  },
  {
    name: "Home Nursing Care",
    slug: "home-nursing-care",
    tagline: "Skilled nursing at home",
    description: "Licensed nurses for ongoing care. Wound care, meds, IV therapy, and monitoring—all at home.",
    benefits: [
      "Licensed professional nurses",
      "Personalized care plans",
      "24/7 care options available",
      "Medical equipment provided",
      "Medication management",
      "Regular health monitoring",
    ],
    price: "Starting from 600",
    duration: "Custom schedules",
    image: "/saudi-nurse-home-nursing-care-patient-monitoring.jpg",
    targetAudience:
      "Post-operative patients, individuals with chronic illnesses, elderly patients, and families needing professional nursing support at home.",
    howItWorks: [
      { title: "Assess", description: "Initial evaluation of care needs" },
      { title: "Plan", description: "Customized nursing care plan created" },
      { title: "Care", description: "Licensed nurse provides regular care" },
      { title: "Monitor", description: "Continuous health tracking and updates" },
    ],
  },
  {
    name: "Insurance",
    slug: "insurance",
    tagline: "Seamless insurance support",
    description: "Medical insurance support. We work with major providers for seamless billing and claim processing.",
    benefits: [
      "Major insurance accepted",
      "Direct billing available",
      "Claim assistance",
      "Pre-authorization support",
      "Coverage verification",
      "Transparent pricing",
    ],
    price: "Covered by insurance",
    duration: "Varies",
    image: "/saudi-insurance-healthcare-billing-support.jpg",
    targetAudience:
      "Insured patients, corporate employees with health benefits, and individuals seeking streamlined insurance claim processing.",
    howItWorks: [
      { title: "Verify", description: "We check your insurance coverage" },
      { title: "Pre-authorize", description: "Obtain necessary approvals" },
      { title: "Service", description: "Receive medical services" },
      { title: "Billing", description: "Direct billing to your insurance" },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug)
}
