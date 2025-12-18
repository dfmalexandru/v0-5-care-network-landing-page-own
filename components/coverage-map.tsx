"use client"

import { useState } from "react"
import Image from "next/image"

const baseZones = [
  // 5CN Central
  { id: "cp-north", name: "Central North", code: "5CN-CP-North", region: "Central", color: "#3b82f6" },
  { id: "cp-west", name: "Central West", code: "5CN-CP West", region: "Central", color: "#3b82f6" },
  { id: "cp-east", name: "Central East", code: "5CN-CP East", region: "Central", color: "#3b82f6" },
  // 5CN EP (Eastern Province)
  { id: "ep-jub", name: "Jubail", code: "5CN-EP JUB", region: "Eastern", color: "#f97316" },
  { id: "ep-dam", name: "Dammam", code: "5CN-EP DAM", region: "Eastern", color: "#f97316" },
  { id: "ep-kh", name: "Khobar/Dhahran", code: "5CN-EP KH", region: "Eastern", color: "#f97316" },
  // 5CN WP (Western Province)
  { id: "wp-med", name: "Medina/Yanbu", code: "5CN-WP MED", region: "Western", color: "#22c55e" },
  { id: "wp-jed", name: "Jeddah", code: "5CN-WP JED", region: "Western", color: "#22c55e" },
  { id: "wp-mak", name: "Makkah/Taif", code: "5CN-WP MAK", region: "Western", color: "#22c55e" },
]

const fixedPositions = {
  desktop: {
    "cp-north": { x: 58, y: 38 },
    "cp-west": { x: 52, y: 45 },
    "cp-east": { x: 68, y: 45 },
    "ep-jub": { x: 72, y: 32 },
    "ep-dam": { x: 78, y: 38 },
    "ep-kh": { x: 82, y: 44 },
    "wp-med": { x: 38, y: 42 },
    "wp-jed": { x: 32, y: 56 },
    "wp-mak": { x: 48, y: 56 },
  },
  tablet: {
    "cp-north": { x: 58, y: 38 },
    "cp-west": { x: 52, y: 45 },
    "cp-east": { x: 68, y: 45 },
    "ep-jub": { x: 72, y: 32 },
    "ep-dam": { x: 78, y: 38 },
    "ep-kh": { x: 82, y: 44 },
    "wp-med": { x: 38, y: 42 },
    "wp-jed": { x: 32, y: 56 },
    "wp-mak": { x: 48, y: 56 },
  },
  mobile: {
    "cp-north": { x: 58, y: 38 },
    "cp-west": { x: 52, y: 45 },
    "cp-east": { x: 68, y: 45 },
    "ep-jub": { x: 72, y: 32 },
    "ep-dam": { x: 78, y: 38 },
    "ep-kh": { x: 82, y: 44 },
    "wp-med": { x: 38, y: 42 },
    "wp-jed": { x: 32, y: 56 },
    "wp-mak": { x: 48, y: 56 },
  },
}

type Breakpoint = "desktop" | "tablet" | "mobile"

export function CoverageMap() {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)
  const [selectedZone, setSelectedZone] = useState<(typeof baseZones)[0] | null>(null)

  const regions = {
    "5CN Central": baseZones.filter((z) => z.region === "Central"),
    "5CN EP": baseZones.filter((z) => z.region === "Eastern"),
    "5CN WP": baseZones.filter((z) => z.region === "Western"),
  }

  const MapInstance = ({ breakpoint, className }: { breakpoint: Breakpoint; className?: string }) => (
    <div className={`relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl overflow-hidden ${className}`}>
      <div className="aspect-square lg:aspect-[4/3] relative">
        <Image
          src="/images/saudi-arabia-map-bg.png"
          alt="Saudi Arabia Map"
          fill
          className="object-cover opacity-60"
          priority
        />

        {/* Zones Overlay - static positions */}
        <div className="absolute inset-0">
          {baseZones.map((zone) => {
            const isHovered = hoveredZone === zone.id
            const isSelected = selectedZone?.id === zone.id
            const pos = fixedPositions[breakpoint][zone.id as keyof (typeof fixedPositions)["desktop"]]

            return (
              <div
                key={zone.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all cursor-pointer"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  zIndex: isSelected ? 50 : 10,
                }}
                onMouseEnter={() => setHoveredZone(zone.id)}
                onMouseLeave={() => setHoveredZone(null)}
                onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
              >
                {/* Rectangular zone box */}
                <div
                  className="px-2 py-1 rounded-sm border-2 font-bold text-[10px] md:text-xs whitespace-nowrap text-center select-none transition-transform"
                  style={{
                    backgroundColor: isSelected ? zone.color : isHovered ? `${zone.color}dd` : `${zone.color}cc`,
                    borderColor: isSelected ? "#000" : zone.color,
                    color: "white",
                    transform: isSelected ? "scale(1.15)" : isHovered ? "scale(1.08)" : "scale(1)",
                    boxShadow: isSelected
                      ? "0 4px 12px rgba(0,0,0,0.3)"
                      : isHovered
                        ? "0 2px 8px rgba(0,0,0,0.2)"
                        : "none",
                  }}
                >
                  {zone.code}
                </div>
              </div>
            )
          })}
        </div>

        {/* Legend - removed drag instruction */}
        <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-3 text-sm shadow-lg space-y-2 z-20">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#3b82f6" }}></span>
            <span className="text-muted-foreground text-xs">Central</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#f97316" }}></span>
            <span className="text-muted-foreground text-xs">Eastern</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: "#22c55e" }}></span>
            <span className="text-muted-foreground text-xs">Western</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Coverage Areas</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide home healthcare services across major cities in Saudi Arabia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Desktop Map - only visible on lg screens and up */}
          <div className="hidden lg:block">
            <MapInstance breakpoint="desktop" />
          </div>

          {/* Tablet Map - only visible on md to lg screens */}
          <div className="hidden md:block lg:hidden">
            <MapInstance breakpoint="tablet" />
          </div>

          {/* Mobile Map - only visible below md screens */}
          <div className="block md:hidden">
            <MapInstance breakpoint="mobile" />
          </div>

          {/* Zone List */}
          <div className="space-y-8">
            {Object.entries(regions).map(([region, regionZones]) => (
              <div key={region}>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: regionZones[0]?.color || "#3b82f6" }}
                  ></span>
                  {region}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {regionZones.map((zone, index) => (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(selectedZone?.id === zone.id ? null : zone)}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                        selectedZone?.id === zone.id
                          ? "bg-primary text-primary-foreground scale-105 shadow-lg"
                          : hoveredZone === zone.id
                            ? "bg-primary/10 scale-105"
                            : "bg-background hover:bg-primary/5"
                      }`}
                      onMouseEnter={() => setHoveredZone(zone.id)}
                      onMouseLeave={() => setHoveredZone(null)}
                    >
                      <span className="text-muted-foreground text-sm w-5">{index + 1}.</span>
                      <span className="font-medium">{zone.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Not in our coverage area? Contact us to check availability.
              </p>
              <a
                href="https://wa.me/966115127600"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                <span className="material-symbols-outlined">chat</span>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
