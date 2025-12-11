import Image from "next/image"
import Link from "next/link"

export default function AboutUsPage() {
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
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-semibold text-foreground">Who Are We?</h2>
          <p>
            Majestic Millennium (High Millennium Company) is the first company established in 2013 in Riyadh and has
            been working in the field of health care since then, and we have been serving thousands of residents of
            Riyadh and the surrounding areas and King Abdullah Economic City since that time.
          </p>

          <p>
            We provide you with the best health services for primary care and family medicine to take care of all family
            members and follow them from primary care, starting from diagnosis to the stage of examinations and
            treatment, following up on the condition after treatment, and providing the necessary advice and
            consultations to patients through distinguished medical staff with long experience.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Vision</h2>
          <p>
            To be the best choice for every patient and to be the best health care provider in the Kingdom of Saudi
            Arabia.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Mission</h2>
          <p>
            Providing distinguished healthcare services through a distinguished and trained medical and administrative
            team, and commitment to the highest standards of quality and safety.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Excellence:</strong> We strive for excellence in all our services
            </li>
            <li>
              <strong>Compassion:</strong> We care deeply about our patients' wellbeing
            </li>
            <li>
              <strong>Professionalism:</strong> We maintain the highest standards of medical practice
            </li>
            <li>
              <strong>Innovation:</strong> We continuously improve our services through innovation
            </li>
            <li>
              <strong>Integrity:</strong> We operate with honesty and transparency
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Our Services</h2>
          <p>5CARE Network offers comprehensive home healthcare services including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Home medical consultations</li>
            <li>Laboratory services at home</li>
            <li>IV therapy and drip treatments</li>
            <li>Physical therapy and rehabilitation</li>
            <li>Nursing care</li>
            <li>Chronic disease management</li>
            <li>Post-operative care</li>
            <li>Elderly care services</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Why Choose Us?</h2>
          <p>
            With over 10 years of experience, licensed medical professionals, and a commitment to quality care delivered
            to your doorstep, 5CARE Network is your trusted partner in healthcare. We combine convenience with
            excellence to ensure you receive the best possible care in the comfort of your home.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Contact Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:customer.service@5cn-sa.com" className="text-primary hover:underline">
              customer.service@5cn-sa.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+966920035182" className="text-primary hover:underline">
              +966 920 035 182
            </a>
            <br />
            WhatsApp:{" "}
            <a href="https://wa.me/966115127600" className="text-primary hover:underline">
              +966 11 512 7600
            </a>
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12">
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
