export const categoryMapping = {
  "home-care": 636897, // Verified from home-care-mDiE1.html
  "respiratory-care": 667576, // Updated from respiratory-therapist-service-jQtey.html
  "dialysis-services": 647574, // Verified from home-hemodialysis-service-4A5Qe.html
  physiotherapy: 645280, // Verified from physiotherapy-aBGAy.html
  "nursing-services": 640924, // Verified from nursing-care-list-a1JNn.html
  "home-laboratory-tests": 640935, // Verified from home-laboratory-tests-Mf2Bz.html
  "laboratory-tests": 669543, // Verified from medical-lab-tests-HBvvG.html
  "special-offers": 640940,
  "discounted-lab-offers": 640939,
  "home-baby-vaccine": 640927, // Verified from home-baby-vaccine-wo87s.html
  "medical-consultation-video": 640922, // Verified from medical-consultation-video-5zgpl.html
  "urgent-care": 640934,
  "e-pharmacy": 641133,
  radiology: 640941,
  "office-medical-care": 640923,
  "dental-clinic": 641132,
  insurance: 640942,
  "nursing-care-jeddah": 920083,
  "home-care-jeddah": 920082,
} as const

export type CategorySlug = keyof typeof categoryMapping

export function getCategoryId(slug: string): number | undefined {
  return categoryMapping[slug as CategorySlug]
}

export function getCategoryUrl(slug: string): string | undefined {
  const id = getCategoryId(slug)
  return id ? `https://5cn-sa.com/categories/${id}/${slug}` : undefined
}
