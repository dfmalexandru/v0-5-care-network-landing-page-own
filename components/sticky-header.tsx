"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSelector } from "@/components/language-selector"

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={isScrolled ? "/images/5cn-logo-black.png" : "/images/5cn-logo-white.png"}
            alt="5CARE Network"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-gray-900 hover:text-[#00998F]" : "text-white/90 hover:text-white"
            }`}
          >
            {t("nav.services")}
          </button>
          <button
            onClick={() => scrollToSection("iv-drips")}
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-gray-900 hover:text-[#00998F]" : "text-white/90 hover:text-white"
            }`}
          >
            {t("nav.ivDrips")}
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-gray-900 hover:text-[#00998F]" : "text-white/90 hover:text-white"
            }`}
          >
            {t("nav.howItWorks")}
          </button>
          <button
            onClick={() => scrollToSection("why-5cn")}
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-gray-900 hover:text-[#00998F]" : "text-white/90 hover:text-white"
            }`}
          >
            {t("nav.why5cn")}
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button
              onClick={() => scrollToSection("services")}
              className={`rounded-full px-6 transition-all ${
                isScrolled ? "bg-[#00998F] hover:bg-[#00887F] text-white" : "bg-white text-[#00998F] hover:bg-white/90"
              }`}
            >
              {t("nav.bookNow")}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={isScrolled ? "text-gray-900" : "text-white"}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white">
            <nav className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-lg font-medium text-gray-900 hover:text-[#00998F] transition-colors text-left"
              >
                {t("nav.services")}
              </button>
              <button
                onClick={() => scrollToSection("iv-drips")}
                className="text-lg font-medium text-gray-900 hover:text-[#00998F] transition-colors text-left"
              >
                {t("nav.ivDrips")}
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-lg font-medium text-gray-900 hover:text-[#00998F] transition-colors text-left"
              >
                {t("nav.howItWorks")}
              </button>
              <button
                onClick={() => scrollToSection("why-5cn")}
                className="text-lg font-medium text-gray-900 hover:text-[#00998F] transition-colors text-left"
              >
                {t("nav.why5cn")}
              </button>
              <div className="pt-4 mt-4 border-t">
                <div className="text-sm font-medium text-gray-500 mb-3">Language</div>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center gap-2 py-2 px-3 text-sm bg-gray-100 rounded-md">
                    <span>🇬🇧</span>
                    English
                  </button>
                  <a
                    href="https://ae.5cn.site/"
                    className="flex items-center gap-2 py-2 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <span>🇸🇦</span>
                    العربية
                  </a>
                </div>
              </div>
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-[#00998F] hover:bg-[#00887F] text-white rounded-full mt-4"
              >
                {t("nav.bookNow")}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
