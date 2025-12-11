import Image from "next/image"
import Link from "next/link"

export default function TermsAndConditionsPage() {
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
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Use of this site is subject to the following terms:</p>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              The content of the pages of this website is for your general information and use only as it is subject to
              change without notice.
            </li>

            <li>
              This website uses cookies to monitor browsing preferences. If you allow the use of cookies, personal
              information may be stored by us for use by third parties.
            </li>

            <li>
              Neither we nor any third parties make any warranty as to the accuracy, timeliness, performance,
              completeness or suitability of the information and materials found or offered on this website for any
              particular purpose. We acknowledge that such information and materials may contain inaccuracies or errors,
              and we shall not be liable for any such errors to the fullest extent permitted by law.
            </li>

            <li>
              Your use of any information or materials on this website is entirely at your own risk, for which we shall
              not be liable. It is your responsibility to ensure that any products, services or information available
              through this website meet your specific requirements.
            </li>

            <li>
              This website contains material which is owned by or licensed to us. This material includes, but is not
              limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in
              accordance with the copyright notice, which forms part of these terms and conditions.
            </li>

            <li>
              All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are
              acknowledged on the website.
            </li>

            <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>

            <li>
              From time to time, this website may also include links to other websites. These links are provided for
              your convenience to provide further information. They do not signify that we endorse the website(s). We
              have no responsibility for the content of the linked website(s).
            </li>

            <li>
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of
              Saudi Arabia.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Service Terms</h2>
          <p>
            By accessing and using 5CARE Network services, you agree to be bound by these Terms and Conditions. Our
            services include home healthcare, medical consultations, laboratory services, and other healthcare-related
            services as advertised on our platform.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Booking and Cancellation</h2>
          <p>
            All bookings are subject to availability and confirmation. Cancellations must be made at least 24 hours in
            advance for a full refund. Late cancellations may be subject to cancellation fees.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Payment Terms</h2>
          <p>
            Payment is due at the time of service unless otherwise arranged. We accept various payment methods including
            credit cards, debit cards, and mobile payment options. All prices are in Saudi Riyals (SAR) and include
            applicable taxes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Contact Information</h2>
          <p>
            For questions about these Terms and Conditions, please contact us at:
            <br />
            Email:{" "}
            <a href="mailto:customer.service@5cn-sa.com" className="text-primary hover:underline">
              customer.service@5cn-sa.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+966920035182" className="text-primary hover:underline">
              +966 920 035 182
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
