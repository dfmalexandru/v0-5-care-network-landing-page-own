import Image from "next/image"
import Link from "next/link"

export default function GoogleLocationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <Image
              src="/images/logo-removebg-preview.png"
              alt="5CARE Network"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Location</h1>

        <div className="mb-12">
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890!2d46.70830428600311!3d24.56017538075526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMzJzM2LjYiTiA0NsKwNDInMjkuOSJF!5e0!3m2!1sen!2ssa!4v1234567890123!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>
                location_on
              </span>
              Visit Us
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our main office is located in Riyadh, Saudi Arabia. We provide home healthcare services throughout Riyadh
              and surrounding areas.
            </p>
            <a
              href="https://maps.app.goo.gl/ogUSrgFRPqHaaKrk8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined">directions</span>
              Get Directions
            </a>
          </div>

          <div className="p-8 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>
                contact_phone
              </span>
              Contact Information
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">call</span>
                <div>
                  <div className="font-medium text-foreground mb-1">Phone</div>
                  <a href="tel:+966920035182" className="hover:text-primary transition-colors">
                    +966 920 035 182
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">chat</span>
                <div>
                  <div className="font-medium text-foreground mb-1">WhatsApp</div>
                  <a href="https://wa.me/966115127600" className="hover:text-primary transition-colors">
                    +966 11 512 7600
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">mail</span>
                <div>
                  <div className="font-medium text-foreground mb-1">Email</div>
                  <a href="mailto:customer.service@5cn-sa.com" className="hover:text-primary transition-colors">
                    customer.service@5cn-sa.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">schedule</span>
                <div>
                  <div className="font-medium text-foreground mb-1">Operating Hours</div>
                  <div>24/7 Emergency Services</div>
                  <div>8 AM - 10 PM Regular Appointments</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-8 bg-primary/5 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Service Coverage</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide home healthcare services throughout Riyadh and surrounding areas. Contact us to confirm if we
            serve your specific location.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
