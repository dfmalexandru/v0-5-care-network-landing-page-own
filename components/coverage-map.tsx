"use client"

import { useState } from "react"

const coverageAreas = [
  { name: "Riyadh", nameAr: "الرياض", lat: 24.7136, lng: 46.6753, region: "Central" },
  { name: "Jeddah", nameAr: "جدة", lat: 21.4858, lng: 39.1925, region: "Western" },
  { name: "Makkah", nameAr: "مكة المكرمة", lat: 21.3891, lng: 39.8579, region: "Western" },
  { name: "Madinah", nameAr: "المدينة المنورة", lat: 24.5247, lng: 39.5692, region: "Western" },
  { name: "Dammam", nameAr: "الدمام", lat: 26.4207, lng: 50.0888, region: "Eastern" },
  { name: "Khobar", nameAr: "الخبر", lat: 26.2172, lng: 50.1971, region: "Eastern" },
  { name: "Dhahran", nameAr: "الظهران", lat: 26.2361, lng: 50.0393, region: "Eastern" },
  { name: "Taif", nameAr: "الطائف", lat: 21.2703, lng: 40.4158, region: "Western" },
  { name: "Tabuk", nameAr: "تبوك", lat: 28.3838, lng: 36.555, region: "Northern" },
  { name: "Abha", nameAr: "أبها", lat: 18.2164, lng: 42.5053, region: "Southern" },
  { name: "Khamis Mushait", nameAr: "خميس مشيط", lat: 18.3093, lng: 42.723, region: "Southern" },
  { name: "Jubail", nameAr: "الجبيل", lat: 27.0174, lng: 49.6225, region: "Eastern" },
]

export function CoverageMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<(typeof coverageAreas)[0] | null>(null)

  const regions = {
    Central: coverageAreas.filter((a) => a.region === "Central"),
    Western: coverageAreas.filter((a) => a.region === "Western"),
    Eastern: coverageAreas.filter((a) => a.region === "Eastern"),
    Northern: coverageAreas.filter((a) => a.region === "Northern"),
    Southern: coverageAreas.filter((a) => a.region === "Southern"),
  }

  const generateMapUrl = () => {
    const center = selectedCity ? `${selectedCity.lat},${selectedCity.lng}` : "23.8859,45.0792" // Center of Saudi Arabia
    const zoom = selectedCity ? 12 : 6

    return `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${center}&zoom=${zoom}&maptype=roadmap`
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
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-square lg:aspect-[4/3]">
            <iframe
              src={generateMapUrl()}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="5Care Network Coverage Map - Saudi Arabia"
              className="absolute inset-0 w-full h-full"
            />

            {/* Selected city overlay */}
            {selectedCity && (
              <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <p className="font-semibold">{selectedCity.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedCity.region} Region</p>
                  </div>
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg px-4 py-2 text-sm shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-muted-foreground">Click a city to view on map</span>
              </div>
            </div>
          </div>

          {/* City List by Region */}
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
                      <span className="font-medium">{city.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
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
