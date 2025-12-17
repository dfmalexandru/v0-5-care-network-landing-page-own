import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Comfortaa as V0_Font_Comfortaa, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"
import { LanguageProvider } from "@/lib/language-context"

// Initialize fonts
const _comfortaa = V0_Font_Comfortaa({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "5CARE Network - Comprehensive Healthcare Solutions",
  description:
    "Complete medical services from home care to consultations. Licensed professionals, premium service, serving Riyadh families since 2013.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    other: {
      "facebook-domain-verification": "w7iy4vcuex3pixeoqzlyksde31goeg",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${_comfortaa.className} antialiased max-w-[100vw] overflow-x-hidden`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
