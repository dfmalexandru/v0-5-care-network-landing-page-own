import Image from "next/image"
import Link from "next/link"

export default function ReturnRefundPolicyPage() {
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
        <h1 className="text-4xl font-bold mb-8">Return & Refund Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            The return and refund policy for a medical service website may vary depending on the specific services being
            offered. However, in general, the following guidelines are applied:
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Returns</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Since medical services are typically provided on a one-time basis, returns are generally not possible.
            </li>
            <li>
              If a patient is dissatisfied with the service received, they should contact the service provider to
              discuss any issues and explore potential solutions.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Refunds</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Refunds for medical services may be possible in the case of overpayment or billing errors.</li>
            <li>
              If a patient cancels a scheduled appointment within a certain timeframe, they may be entitled to a partial
              or full refund.
            </li>
            <li>Refunds may also be available if the service provider fails to provide the agreed-upon services.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            Return and Refund Policy for Drug Store Category
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Returns:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Unused and unopened products may be eligible for returns within a certain timeframe (usually 7-14 days)
              with a valid receipt.
            </li>
            <li>
              Products that have been opened or used are generally not eligible for returns unless they are defective.
            </li>
            <li>
              Prescription medications are generally not eligible for returns due to safety and regulatory reasons.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Refunds:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Refunds for eligible returns will be processed within a certain timeframe (usually 7-14 business days)
              after the return is received and inspected.
            </li>
            <li>
              Refunds may be issued in the form of the original payment method or store credit, depending on the store's
              policy.
            </li>
            <li>Refunds may not include any shipping or handling fees that were charged for the original purchase.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Cancellation Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Appointments can be cancelled up to 24 hours before the scheduled time for a full refund.</li>
            <li>Cancellations made less than 24 hours before the appointment may be subject to a cancellation fee.</li>
            <li>No-show appointments will not be refunded.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Important Notes</h2>
          <p>
            It's important to note that specific return and refund policies may vary by service provider and should be
            clearly stated on the website or in the terms and conditions. If you have any questions or concerns
            regarding returns or refunds, please contact our customer service team.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Contact Us</h2>
          <p>
            For return and refund inquiries, please contact us at:
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
