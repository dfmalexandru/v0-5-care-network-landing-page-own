"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

interface Category {
  name: string
  slug: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  image: string
  categoryId?: number
}

interface CategoryPageClientProps {
  category: Category | undefined
  slug: string
}

export default function CategoryPageClient({ category, slug }: CategoryPageClientProps) {
  const { language } = useLanguage()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  if (!category) {
    notFound()
  }

  const getTranslatedContent = () => {
    if (language === "ar") {
      const translations: Record<
        string,
        { name: string; description: string; features: string[]; benefits: string[] }
      > = {
        "home-care": {
          name: "قسم الرعاية المنزلية",
          description: "كادر مرخص يقدم رعاية طبية بالبيت. تمريض، تأهيل، وإدارة الأمراض المزمنة.",
          features: ["كادر طبي مرخص", "خدمة 24/7", "معدات حديثة", "رعاية شخصية", "خطط علاج مخصصة", "أسعار شفافة"],
          benefits: [
            "احصل على رعاية بدون ما تطلع من البيت",
            "أطباء وممرضين معتمدين",
            "مواعيد مرنة تناسب جدولك",
            "متابعة ودعم مستمر",
          ],
        },
        "e-pharmacy": {
          name: "الصيدلية الإلكترونية",
          description: "اطلب أدويتك أونلاين مع توصيل سريع واستشارة صيدلي 24/7.",
          features: [
            "طلب أدوية أونلاين",
            "توصيل سريع",
            "استشارة صيدلي",
            "وصفات إلكترونية",
            "تذكير بالأدوية",
            "أسعار تنافسية",
          ],
          benefits: ["اطلب أدويتك من البيت", "صيادلة مرخصين متاحين دايم", "توصيل سريع وآمن", "راحة وخصوصية تامة"],
        },
        "dental-clinic": {
          name: "عيادة الأسنان",
          description: "رعاية أسنان متكاملة من الفحوصات للعلاجات المتقدمة بأجهزة حديثة.",
          features: ["فحوصات شاملة", "تنظيف احترافي", "علاج جذور", "تركيبات", "تبييض", "تقويم أسنان"],
          benefits: [
            "عيادة أسنان حديثة مجهزة بالكامل",
            "أطباء أسنان ذوي خبرة عالية",
            "بيئة مريحة ومعقمة",
            "خطط سداد مرنة",
          ],
        },
        // Add more category translations as needed
      }
      return translations[slug] || category
    }
    return category
  }

  const content = getTranslatedContent()

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
              <span className="material-symbols-outlined text-lg mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                {language === "ar" ? "arrow_forward" : "arrow_back"}
              </span>
              {language === "ar" ? "العودة للرئيسية" : "Back to Home"}
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10">
                <span
                  className="material-symbols-outlined text-primary text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {category.icon}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight">{content.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">{content.description}</p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      calendar_month
                    </span>
                    {language === "ar" ? "احجز الآن" : "Book Now"}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                  <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      call
                    </span>
                    {language === "ar" ? "اتصل بنا" : "Contact Us"}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={category.image || "/placeholder.svg"} alt={content.name} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{language === "ar" ? "ما نقدمه" : "What We Offer"}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6 flex flex-col items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-primary text-xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-center">{feature}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {category.categoryId && (
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {language === "ar" ? "تصفح المنتجات والخدمات" : "Browse Products & Services"}
              </h2>
              <p className="text-muted-foreground text-lg">
                {language === "ar"
                  ? `استكشف مجموعتنا الكاملة من ${content.name}`
                  : `Explore our complete range of ${content.name.toLowerCase()} offerings`}
              </p>
            </div>

            <div className="bg-background rounded-2xl shadow-2xl overflow-hidden border border-border">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 border-b border-border text-center">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <span
                    className="material-symbols-outlined text-primary text-5xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    inventory_2
                  </span>
                  <div>
                    <h3 className="font-semibold text-2xl mb-2">
                      {language === "ar" ? "المنتجات والخدمات المتاحة" : "Available Products & Services"}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === "ar"
                        ? "شاهد كتالوجنا الكامل على منصتنا الرئيسية"
                        : "View our complete catalog on our main platform"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2" asChild>
                    <a
                      href={`https://5cn-sa.com/categories/${category.categoryId}/${encodeURIComponent(category.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        open_in_new
                      </span>
                      {language === "ar" ? "شاهد المنتجات واحجز" : "View Products & Book"}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                    <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                      <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        call
                      </span>
                      {language === "ar" ? "تواصل معنا مباشرة" : "Contact Us Directly"}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-12 text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                  <p className="text-lg text-muted-foreground">
                    {language === "ar"
                      ? `اضغط على الزر أعلاه لتصفح مجموعتنا الكاملة من ${content.name} على منصتنا الآمنة.`
                      : `Click the button above to browse our full range of ${content.name.toLowerCase()} products and services on our secure platform.`}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 pt-6">
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg">
                      <span
                        className="material-symbols-outlined text-primary text-3xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        verified
                      </span>
                      <span className="text-sm font-medium">{language === "ar" ? "حجز آمن" : "Secure Booking"}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg">
                      <span
                        className="material-symbols-outlined text-primary text-3xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        local_shipping
                      </span>
                      <span className="text-sm font-medium">{language === "ar" ? "توصيل سريع" : "Fast Delivery"}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg">
                      <span
                        className="material-symbols-outlined text-primary text-3xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        support_agent
                      </span>
                      <span className="text-sm font-medium">{language === "ar" ? "دعم 24/7" : "24/7 Support"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {language === "ar" ? "لماذا تختارنا" : "Why Choose Us"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary-foreground text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    thumb_up
                  </span>
                </div>
                <div>
                  <p className="text-lg leading-relaxed">{benefit}</p>
                </div>
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
              <h2 className="text-3xl font-bold text-balance">
                {language === "ar" ? "جاهز للبدء؟" : "Ready to Get Started?"}
              </h2>
              <p className="text-lg text-primary-foreground/90 text-balance max-w-2xl mx-auto">
                {language === "ar"
                  ? "استمتع بخدمات صحية استثنائية مع شبكة الرعاية الخماسية. احجز موعدك اليوم ودع فريقنا يهتم بك."
                  : "Experience exceptional healthcare services with 5CARE Network. Book your appointment today and let our professionals take care of you."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href="https://wa.me/966115127600" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      calendar_month
                    </span>
                    {language === "ar" ? "حدد موعد" : "Schedule Appointment"}
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
                      support_agent
                    </span>
                    {language === "ar" ? "تحدث مع خبير" : "Talk to Expert"}
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
                {language === "ar"
                  ? "شركة سعودية متخصصة في الخدمات الطبية أسس عام 2013"
                  : "A Saudi company specialized in medical services established in 2013"}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {language === "ar"
                  ? "مجالنا الرعاية الصحية. نقدم لك أفضل الخدمات الطبية للمستوى الأول والرعاية العائلية من التشخيص إلى مرحلة الامراض المزمنة من خلال فريق طبي متميز ذوي خبرة طويلة."
                  : "Our field is health care. We offer you the best health services for primary care and family medicine to take care of family members from primary care, starting from diagnosis to the stage of necessary examinations for patients through distinguished medical staff with long experience."}
              </p>

              {/* Mobile Apps */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{language === "ar" ? "قم بتحميل التطبيق" : "Download the app"}</h4>
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
              <h4 className="font-semibold mb-4">{language === "ar" ? "روابط مهمة" : "Important Links"}</h4>
              <div className="space-y-2">
                <a
                  href="/pages/shipping-and-payment"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === "ar" ? "خيارات الشحن والدفع" : "Shipping & Payment Options"}
                </a>
                <a
                  href="/pages/medical-blog/54327"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === "ar" ? "المدونة الطبية" : "Medical Blog"}
                </a>
                <a
                  href="/pages/qa/54329"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === "ar" ? "الأسئلة والإجابات" : "Questions & Answers"}
                </a>
                <a
                  href="/pages/terms-and-conditions/54337"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
                </a>
                <a
                  href="/pages/return-and-refund-policy/58575"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === "ar" ? "سياسة الاسترجاع والاستبدال" : "Return & Refund Policy"}
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
                  {language === "ar" ? "موقعنا على خرائط جوجل" : "Google Map Location"}
                </a>
                <a
                  href="/pages/about-us/54328"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === "ar" ? "معلومات عنا" : "About us"}
                </a>
                <a
                  href="/pages/privacy-policy/54330"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
                </a>
                <a
                  href="https://wa.me/966115127600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {language === "ar" ? "اتصل بنا" : "Contact us"}
                </a>
              </div>
            </div>

            {/* Social Networks & Contact */}
            <div>
              <h4 className="font-semibold mb-4">{language === "ar" ? "تابعنا على" : "Follow Us"}</h4>
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
              <div className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "© 2025 شبكة الرعاية الخماسية. جميع الحقوق محفوظة."
                  : "© 2025 5CARE Network. All rights reserved."}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}
                >
                  receipt_long
                </span>
                <span>{language === "ar" ? "رقم الضريبة: 1010213642" : "Tax ID: 1010213642"}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: "18px", fontVariationSettings: "'FILL' 1" }}
              >
                shield
              </span>
              <span>
                {language === "ar"
                  ? "ترخيص من وزارة الصحة • رخصة 1410101201200633"
                  : "Licensed by Ministry of Health • License 1410101201200633"}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
