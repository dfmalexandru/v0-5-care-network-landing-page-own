"use client"

import { useState } from "react"

const coverageAreas = [
  { name: "Riyadh", nameAr: "الرياض", lat: 24.7136, lng: 46.6753, region: "Central", radius: 50, color: "#0d9488" },
  { name: "Jeddah", nameAr: "جدة", lat: 21.4858, lng: 39.1925, region: "Western", radius: 40, color: "#8b5cf6" },
  {
    name: "Makkah",
    nameAr: "مكة المكرمة",
    lat: 21.3891,
    lng: 39.8579,
    region: "Western",
    radius: 30,
    color: "#8b5cf6",
  },
  {
    name: "Madinah",
    nameAr: "المدينة المنورة",
    lat: 24.5247,
    lng: 39.5692,
    region: "Western",
    radius: 35,
    color: "#8b5cf6",
  },
  { name: "Dammam", nameAr: "الدمام", lat: 26.4207, lng: 50.0888, region: "Eastern", radius: 35, color: "#f59e0b" },
  { name: "Khobar", nameAr: "الخبر", lat: 26.2172, lng: 50.1971, region: "Eastern", radius: 25, color: "#f59e0b" },
  { name: "Dhahran", nameAr: "الظهران", lat: 26.2361, lng: 50.0393, region: "Eastern", radius: 20, color: "#f59e0b" },
  { name: "Taif", nameAr: "الطائف", lat: 21.2703, lng: 40.4158, region: "Western", radius: 25, color: "#8b5cf6" },
  { name: "Tabuk", nameAr: "تبوك", lat: 28.3838, lng: 36.555, region: "Northern", radius: 30, color: "#3b82f6" },
  { name: "Abha", nameAr: "أبها", lat: 18.2164, lng: 42.5053, region: "Southern", radius: 25, color: "#ec4899" },
  {
    name: "Khamis Mushait",
    nameAr: "خميس مشيط",
    lat: 18.3093,
    lng: 42.723,
    region: "Southern",
    radius: 20,
    color: "#ec4899",
  },
  { name: "Jubail", nameAr: "الجبيل", lat: 27.0174, lng: 49.6225, region: "Eastern", radius: 25, color: "#f59e0b" },
]

const regionColors: Record<string, string> = {
  Central: "#0d9488",
  Western: "#8b5cf6",
  Eastern: "#f59e0b",
  Northern: "#3b82f6",
  Southern: "#ec4899",
}

const latLngToSvg = (lat: number, lng: number) => {
  // Saudi Arabia bounds approximately: lat 16-32, lng 34-56
  const minLat = 16,
    maxLat = 32,
    minLng = 34,
    maxLng = 56
  const svgWidth = 400,
    svgHeight = 350

  const x = ((lng - minLng) / (maxLng - minLng)) * svgWidth
  const y = ((maxLat - lat) / (maxLat - minLat)) * svgHeight

  return { x, y }
}

export function CoverageMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<(typeof coverageAreas)[0] | null>(null)
  const [showRealMap, setShowRealMap] = useState(true)

  const regions = {
    Central: coverageAreas.filter((a) => a.region === "Central"),
    Western: coverageAreas.filter((a) => a.region === "Western"),
    Eastern: coverageAreas.filter((a) => a.region === "Eastern"),
    Northern: coverageAreas.filter((a) => a.region === "Northern"),
    Southern: coverageAreas.filter((a) => a.region === "Southern"),
  }

  const getMapUrl = () => {
    if (selectedCity) {
      return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100000!2d${selectedCity.lng}!3d${selectedCity.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa!4v1699900000000!5m2!1sen!2ssa`
    }
    return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3500000!2d45!3d24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa!4v1699900000000!5m2!1sen!2ssa`
  }

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
          <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl overflow-hidden">
            <div className="absolute top-4 right-4 z-20 flex bg-background/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => setShowRealMap(true)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  showRealMap ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                Map
              </button>
              <button
                onClick={() => setShowRealMap(false)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  !showRealMap ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                Zones
              </button>
            </div>

            {showRealMap ? (
              <div className="aspect-square lg:aspect-[4/3]">
                <iframe
                  src={getMapUrl()}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saudi Arabia Coverage Map"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 pointer-events-none">
                  {selectedCity && (
                    <div className="absolute top-16 left-4 bg-background/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg pointer-events-auto">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                        <div>
                          <p className="font-semibold">{selectedCity.name}</p>
                          <p className="text-sm text-muted-foreground">{selectedCity.region} Region</p>
                          <p className="text-xs text-primary mt-1">~{selectedCity.radius}km coverage radius</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="aspect-square lg:aspect-[4/3] flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-30 grayscale">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3500000!2d45!3d24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssa!4v1699900000000!5m2!1sen!2ssa"
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: "none" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Saudi Arabia Background Map"
                    className="w-full h-full"
                  />
                </div>
                {/* SVG zones overlay */}
                <svg
                  viewBox="0 0 400 350"
                  className="w-full h-full relative z-10 p-6"
                  aria-label="Saudi Arabia coverage map with geofences"
                >
                  {coverageAreas.map((city) => {
                    const { x, y } = latLngToSvg(city.lat, city.lng)
                    const isHovered = hoveredCity === city.name
                    const isSelected = selectedCity?.name === city.name
                    const baseRadius = city.radius * 0.6

                    return (
                      <g key={city.name}>
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected ? baseRadius * 1.2 : isHovered ? baseRadius * 1.1 : baseRadius}
                          fill={`${city.color}${isSelected ? "50" : isHovered ? "40" : "30"}`}
                          stroke={city.color}
                          strokeWidth={isSelected ? 2.5 : isHovered ? 2 : 1.5}
                          strokeDasharray={isSelected ? "0" : "4 2"}
                          className="transition-all duration-300 cursor-pointer"
                          onMouseEnter={() => setHoveredCity(city.name)}
                          onMouseLeave={() => setHoveredCity(null)}
                          onClick={() => setSelectedCity(selectedCity?.name === city.name ? null : city)}
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r={isSelected ? 6 : isHovered ? 5 : 4}
                          fill={city.color}
                          className="transition-all duration-300 cursor-pointer"
                          onMouseEnter={() => setHoveredCity(city.name)}
                          onMouseLeave={() => setHoveredCity(null)}
                          onClick={() => setSelectedCity(selectedCity?.name === city.name ? null : city)}
                        />
                        {(isHovered || isSelected) && (
                          <g>
                            <rect
                              x={x - 35}
                              y={y - baseRadius - 28}
                              width="70"
                              height="20"
                              rx="4"
                              fill="white"
                              stroke={city.color}
                              strokeWidth="1.5"
                            />
                            <text
                              x={x}
                              y={y - baseRadius - 14}
                              textAnchor="middle"
                              className="text-[10px] font-semibold"
                              fill={city.color}
                            >
                              {city.name}
                            </text>
                          </g>
                        )}
                      </g>
                    )
                  })}
                  <text x="200" y="25" textAnchor="middle" className="text-sm font-bold" fill="hsl(var(--primary))">
                    Saudi Arabia
                  </text>
                </svg>
                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-3 text-sm shadow-lg space-y-2 z-20">
                  <p className="font-semibold text-xs text-muted-foreground mb-2">Regions</p>
                  {Object.entries(regionColors).map(([region, color]) => (
                    <div key={region} className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full border-2"
                        style={{ backgroundColor: `${color}30`, borderColor: color }}
                      ></span>
                      <span className="text-muted-foreground text-xs">{region}</span>
                    </div>
                  ))}
                </div>
                {selectedCity && (
                  <div className="absolute top-16 left-4 bg-background/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg z-20">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                      <div>
                        <p className="font-semibold">{selectedCity.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedCity.region} Region</p>
                        <p className="text-xs text-primary mt-1">~{selectedCity.radius}km coverage radius</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-8">
            {Object.entries(regions).map(([region, cities]) => (
              <div key={region}>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  {region} Region
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {cities.map((city) => (
                    <button
                      key={city.name}
                      onClick={() => setSelectedCity(selectedCity?.name === city.name ? null : city)}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                        selectedCity?.name === city.name
                          ? "bg-primary text-primary-foreground scale-105 shadow-lg"
                          : hoveredCity === city.name
                            ? "bg-primary/10 scale-105"
                            : "bg-background hover:bg-primary/5"
                      }`}
                      onMouseEnter={() => setHoveredCity(city.name)}
                      onMouseLeave={() => setHoveredCity(null)}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          selectedCity?.name === city.name ? "bg-primary-foreground" : "bg-primary"
                        }`}
                      ></span>
                      <div>
                        <span className="font-medium block">{city.name}</span>
                        <span
                          className={`text-xs ${selectedCity?.name === city.name ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                        >
                          ~{city.radius}km radius
                        </span>
                      </div>
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
