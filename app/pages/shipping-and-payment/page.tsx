import Image from "next/image"
import Link from "next/link"

export default function ShippingPaymentPage() {
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
        <h1 className="text-4xl font-bold mb-12 text-center">Shipping & Payment Options</h1>

        {/* Shipping Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Shipping Options</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Shipping Options</th>
                  <th className="px-6 py-4 text-left font-semibold">Cities Covered</th>
                  <th className="px-6 py-4 text-left font-semibold">Shipping Charges</th>
                  <th className="px-6 py-4 text-left font-semibold">Cash on Delivery</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">Saudi Post - SPL</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    Riyadh, Kharj, Diriyah, Dilam, Duwadimi, Zulfi, Ghat, Majmaah, Muzahmiyah, and 95+ cities across
                    Saudi Arabia
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-primary font-semibold text-lg">27 SAR</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="material-symbols-outlined text-red-500">close</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Delivery Information</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "20px" }}>
                  check_circle
                </span>
                <span>Standard delivery time: 2-5 business days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "20px" }}>
                  check_circle
                </span>
                <span>Tracking information provided for all orders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "20px" }}>
                  check_circle
                </span>
                <span>Free shipping on orders over 200 SAR</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Payment Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Payment Options</h2>

          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <div className="flex flex-col items-center p-6 bg-muted/30 rounded-lg">
              <img src="https://media.zid.store/static/apple_pay.svg" alt="Apple Pay" className="h-12 mb-3" />
              <span className="text-sm font-medium">Apple Pay</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-muted/30 rounded-lg">
              <img src="/images/design-mode/mada-circle.png" alt="Mada" className="h-12 mb-3" />
              <span className="text-sm font-medium">Mada</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-muted/30 rounded-lg">
              <img src="/images/design-mode/visa-circle.png" alt="Visa" className="h-12 mb-3" />
              <span className="text-sm font-medium">Visa</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-muted/30 rounded-lg">
              <img src="/images/design-mode/mastercard-circle.png" alt="Mastercard" className="h-12 mb-3" />
              <span className="text-sm font-medium">Mastercard</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-muted/30 rounded-lg">
              <img src="/images/design-mode/amex.png" alt="American Express" className="h-12 mb-3" />
              <span className="text-sm font-medium">Amex</span>
            </div>
          </div>

          <div className="p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Payment Information</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "20px" }}>
                  check_circle
                </span>
                <span>Secure payment processing with SSL encryption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "20px" }}>
                  check_circle
                </span>
                <span>All major credit and debit cards accepted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "20px" }}>
                  check_circle
                </span>
                <span>Instant payment confirmation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "20px" }}>
                  check_circle
                </span>
                <span>VAT included in all prices</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center p-8 bg-primary/5 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our customer service team for any shipping or payment inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966920035182"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined">call</span>
              +966 920 035 182
            </a>
            <a
              href="mailto:customer.service@5cn-sa.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <span className="material-symbols-outlined">mail</span>
              Email Us
            </a>
          </div>
        </section>

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
