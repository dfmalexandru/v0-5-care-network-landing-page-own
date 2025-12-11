"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

const getCategoriesData = (language: "en" | "ar") => {
  if (language === "ar") {
    return [
      {
        name: "قسم الرعاية المنزلية",
        slug: "home-care",
        description: "كادر مرخص يقدم رعاية طبية بالبيت. تمريض، تأهيل، وإدارة الأمراض المزمنة.",
      },
      {
        name: "الصيدلية الإلكترونية",
        slug: "e-pharmacy",
        description: "اطلب أدويتك أونلاين مع توصيل سريع واستشارة صيدلي 24/7.",
      },
      {
        name: "عيادة الأسنان",
        slug: "dental-clinic",
        description: "رعاية أسنان متكاملة من الفحوصات للعلاجات المتقدمة بأجهزة حديثة.",
      },
      {
        name: "قسم الرعاية المنزلية - جدة",
        slug: "home-care-jeddah",
        description: "رعاية صحية منزلية متخصصة بجدة مع كادر طبي محلي.",
      },
      {
        name: "التأمين",
        slug: "insurance",
        description: "دعم التأمين الطبي. نتعامل مع المزودين الكبار لفواتير سلسة.",
      },
      {
        name: "تحاليل المختبر المنزلية",
        slug: "home-laboratory-tests",
        description: "فحوصات مخبرية احترافية بموقعك. نتائج سريعة ودقيقة مع تسليم آمن.",
      },
      {
        name: "الرعاية العاجلة",
        slug: "urgent-care",
        description: "رعاية طبية سريعة للحالات غير الطارئة. استجابة 24/7 للمشاكل العاجلة.",
      },
      {
        name: "الرعاية الطبية بالمكاتب - عيادة الموظفين",
        slug: "office-medical-care",
        description: "خدمات طبية بمقر الشركة. عيادات، فحوصات، وبرامج صحية.",
      },
      {
        name: "الرعاية التمريضية - جدة",
        slug: "nursing-care-jeddah",
        description: "تمريض احترافي بجدة. عناية بالجروح، أدوية، محاليل، ومراقبة.",
      },
      {
        name: "تطعيمات الأطفال المنزلية",
        slug: "home-baby-vaccine",
        description: "تطعيمات الأطفال بالبيت من ممرضات أطفال. نتبع جداول منظمة الصحة بأمان.",
      },
      {
        name: "استشارة طبية - فيديو",
        slug: "medical-consultation-video",
        description: "استشارات فيديو مع أطباء مرخصين. نصائح، وصفات، ومتابعات.",
      },
      {
        name: "الأشعة",
        slug: "radiology",
        description: "تصوير تشخيصي بالبيت. أشعة سينية وموجات صوتية بأجهزة محمولة.",
      },
      {
        name: "عروض خاصة",
        slug: "special-offers",
        description: "باقات صحية بقيمة ممتازة. شوف العروض الموسمية والباقات.",
      },
    ]
  }

  return [
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
      name: "Dental Clinic",
      slug: "dental-clinic",
      description: "Complete dental care from checkups to advanced treatments with modern equipment.",
    },
    {
      name: "Home Care Department - Jeddah",
      slug: "home-care-jeddah",
      description: "Specialized home healthcare in Jeddah with local medical professionals.",
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
      name: "Nursing Care - Jeddah",
      slug: "nursing-care-jeddah",
      description: "Pro nursing in Jeddah. Wound care, meds, IV therapy, and monitoring.",
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
    {
      name: "Special Offers",
      slug: "special-offers",
      description: "Healthcare packages at great value. Check for seasonal deals and bundles.",
    },
  ]
}

export default function CategoriesClientPage() {
  const { language, t } = useLanguage()
  const categories = getCategoriesData(language)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
          <Link href="/">
            <Button variant="ghost" size="sm">
              <span className="material-symbols-outlined text-lg mr-2">arrow_back</span>
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      <section id="categories" className="pt-32 py-32 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 text-sm px-6 py-2 border-primary/30 border-none bg-background text-foreground"
            >
              {language === "ar" ? "كل الفئات" : "All Categories"}
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              {language === "ar" ? (
                <>
                  استكشف <span className="text-primary">خدماتنا الطبية</span>
                </>
              ) : (
                <>
                  Explore Our
                  <br />
                  <span className="text-primary">Medical Services</span>
                </>
              )}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              {language === "ar"
                ? "تصفح مجموعتنا الشاملة من الخدمات الصحية المنظمة حسب التخصص"
                : "Browse our comprehensive range of healthcare services organized by specialty"}
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
                          <span
                            className="material-symbols-outlined text-primary text-3xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            {icon}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed flex-grow">{category.description}</p>

                        <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                          <span>{language === "ar" ? "استكشف الخدمات" : "Explore Services"}</span>
                          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {language === "ar" ? "arrow_back" : "arrow_forward"}
                          </span>
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

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold text-balance">
                {language === "ar" ? "تحتاج مساعدة بالاختيار؟" : "Need Help Choosing?"}
              </h2>
              <p className="text-lg text-primary-foreground/90 text-balance max-w-2xl mx-auto">
                {language === "ar"
                  ? "خبراؤنا الصحيون هنا لإرشادك للخدمة المناسبة لاحتياجك"
                  : "Our healthcare experts are here to guide you to the right service for your needs"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      call
                    </span>
                    {language === "ar" ? "اتصل بنا: 920000000" : "Contact Us: 920000000"}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      chat
                    </span>
                    {language === "ar" ? "محادثة مباشرة" : "Live Chat"}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
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
              <h4 className="font-semibold mb-4">
                A Saudi company specialized in medical services established in 2013
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Our field is health care. We offer you the best health services for primary care and family medicine to
                take care of family members from primary care, starting from diagnosis to the stage of necessary
                examinations for patients through distinguished medical staff with long experience.
              </p>

              {/* Mobile Apps */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Download the app</h4>
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
            </div>

            {/* Important Links - Column 1 */}
            <div>
              <h4 className="font-semibold mb-4">Important Links</h4>
              <div className="space-y-2">
                <a
                  href="/pages/shipping-and-payment"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shipping & Payment Options
                </a>
                <a
                  href="/pages/medical-blog/54327"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Medical Blog
                </a>
                <a
                  href="/pages/qa/54329"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Questions & Answers
                </a>
                <a
                  href="/pages/terms-and-conditions/54337"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/pages/return-and-refund-policy/58575"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Return & Refund Policy
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
                  Google Map Location
                </a>
                <a
                  href="/pages/about-us/54328"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About us
                </a>
                <a
                  href="/pages/privacy-policy/54330"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://wa.me/966115127600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact us
                </a>
              </div>
            </div>

            {/* Social Networks & Contact */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
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
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}
                  >
                    call
                  </span>
                  <a href="tel:+966920035182" className="hover:text-foreground transition-colors">
                    +966 920 035 182
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}
                  >
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
              <div className="text-sm text-muted-foreground">© 2025 5CARE Network. All rights reserved.</div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}
                >
                  receipt_long
                </span>
                <span>Tax ID: 1010213642</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}
              >
                shield
              </span>
              <span>Licensed by Ministry of Health • License 1410101201200633</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
