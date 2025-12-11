import Image from "next/image"
import Link from "next/link"

export default function QAPage() {
  const faqs = [
    {
      question: "What services does 5CARE Network provide?",
      answer:
        "We provide comprehensive home healthcare services including medical consultations, laboratory services, IV therapy, physical therapy, nursing care, and chronic disease management.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve Riyadh and surrounding areas. Please contact us to confirm if we serve your specific location.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our website, mobile app, or by calling our customer service at +966 920 035 182.",
    },
    {
      question: "Are your medical professionals licensed?",
      answer: "Yes, all our medical professionals are fully licensed and certified by the Saudi Ministry of Health.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, Amex), Mada, Apple Pay, and other digital payment methods.",
    },
    {
      question: "Can I cancel my appointment?",
      answer:
        "Yes, you can cancel your appointment up to 24 hours before the scheduled time for a full refund. Cancellations made less than 24 hours may be subject to a cancellation fee.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we work with most major insurance providers in Saudi Arabia. Please contact us with your insurance details to verify coverage.",
    },
    {
      question: "What are your operating hours?",
      answer: "We operate 24/7 for emergency services. Regular appointments are available from 8 AM to 10 PM daily.",
    },
    {
      question: "How long does a typical home visit take?",
      answer:
        "The duration varies depending on the service. A standard consultation typically takes 30-45 minutes, while specialized services may take longer.",
    },
    {
      question: "Do I need to prepare anything before the visit?",
      answer:
        "Please have your medical history, current medications list, and any relevant medical documents ready for the healthcare professional's review.",
    },
  ]

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
        <h1 className="text-4xl font-bold mb-4 text-center">Questions & Answers</h1>
        <p className="text-center text-muted-foreground mb-12">
          Find answers to commonly asked questions about our services
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-muted/30 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3 flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1" style={{ fontSize: "24px" }}>
                  help
                </span>
                {faq.question}
              </h3>
              <p className="text-muted-foreground ml-11 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-8 bg-primary/5 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6">Our customer service team is here to help</p>
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
