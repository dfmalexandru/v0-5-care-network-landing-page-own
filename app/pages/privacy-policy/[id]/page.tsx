import Image from "next/image"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Thank you for using the "Five Care Medical Services" website. The terms and conditions ("Terms") and the
            Privacy Policy are intended to inform you of your legal rights and responsibilities in connection with the
            use of the "Five Care for Medical Services" website.
          </p>

          <p>
            Your privacy is very important to us. It is the policy of "Five Care Medical Services" to respect your
            privacy, including any information that we may collect while operating our site. We have created a privacy
            policy and website usage rules to disclose how you use the "Five Care for Medical Services" website, list
            your business for viewing / using it, and how it collects and uses your content and information. We
            encourage you to read this policy to help you make the right decisions.
          </p>

          <p>
            Please note that your use of the Site and its services automatically enters into your agreement with the
            Terms and Conditions of our Privacy Policy and acknowledges your agreement to the collection, use and
            disclosure of your personal information in accordance with this Privacy Policy. If you do not agree with the
            terms of this policy, you must not access or use the Site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Information We Collect</h2>
          <p>
            We collect information from you when you register on our site, place an order, subscribe to our newsletter,
            respond to a survey or fill out a form. When ordering or registering on our site, as appropriate, you may be
            asked to enter your name, email address, mailing address, phone number or credit card information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">How We Use Your Information</h2>
          <p>Any of the information we collect from you may be used in one of the following ways:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To personalize your experience</li>
            <li>To improve our website</li>
            <li>To improve customer service</li>
            <li>To process transactions</li>
            <li>To send periodic emails</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Information Protection</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you
            place an order or enter, submit, or access your personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Cookies</h2>
          <p>
            We use cookies to understand and save your preferences for future visits and compile aggregate data about
            site traffic and site interaction so that we can offer better site experiences and tools in the future.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Third Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information
            unless we provide users with advance notice. This does not include website hosting partners and other
            parties who assist us in operating our website, conducting our business, or serving our users, so long as
            those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
