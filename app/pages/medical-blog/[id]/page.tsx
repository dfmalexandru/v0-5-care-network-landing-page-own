import Image from "next/image"
import Link from "next/link"

export default function MedicalBlogPage() {
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
        <div className="mb-8">
          <span className="text-sm text-muted-foreground">20-04-2023 Article</span>
          <h1 className="text-4xl font-bold mt-2 mb-6">
            Home Health Care Services in Saudi Arabia: Meeting the Objectives of Vision 2030
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-xl text-foreground font-medium leading-relaxed">
            Saudi Arabia's Vision 2030 is an ambitious plan to transform the country's economy and society. One of the
            key goals of the plan is to improve the quality of healthcare services in Saudi Arabia. One way to achieve
            this goal is through the development of home health care services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            Objectives of Home Health Care Services in Saudi Arabia
          </h2>
          <p>
            The objectives of home health care services in Saudi Arabia align with the goals of Vision 2030. These
            objectives include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Improving access to healthcare services, particularly for elderly and disabled individuals</li>
            <li>Reducing the burden on hospitals and healthcare facilities</li>
            <li>Enhancing the quality of life for patients and their families</li>
            <li>Promoting preventive care and early intervention</li>
            <li>Supporting the development of a sustainable healthcare system</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Target Audience</h2>
          <p>Home health care services in Saudi Arabia target a diverse audience, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Elderly individuals requiring regular medical attention and support</li>
            <li>Patients recovering from surgery or illness</li>
            <li>Individuals with chronic conditions requiring ongoing management</li>
            <li>Disabled individuals needing specialized care</li>
            <li>Families seeking convenient and personalized healthcare solutions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Potential Services</h2>
          <p>
            Home health care services in Saudi Arabia offer a wide range of services designed to meet the diverse needs
            of patients:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Medical Consultations:</strong> In-home visits by qualified doctors and specialists
            </li>
            <li>
              <strong>Nursing Care:</strong> Professional nursing services including wound care, medication management,
              and vital signs monitoring
            </li>
            <li>
              <strong>Physical Therapy:</strong> Rehabilitation services to help patients recover mobility and strength
            </li>
            <li>
              <strong>Laboratory Services:</strong> Blood tests and diagnostic services performed at home
            </li>
            <li>
              <strong>IV Therapy:</strong> Intravenous treatments including hydration, vitamins, and medications
            </li>
            <li>
              <strong>Chronic Disease Management:</strong> Ongoing care for conditions like diabetes, hypertension, and
              heart disease
            </li>
            <li>
              <strong>Post-operative Care:</strong> Follow-up care after surgical procedures
            </li>
            <li>
              <strong>Elderly Care:</strong> Comprehensive care for senior citizens including daily living assistance
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Alignment with Vision 2030</h2>
          <p>Home health care services directly support several key pillars of Saudi Arabia's Vision 2030:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Healthcare Transformation:</strong> Contributing to the modernization and improvement of the
              healthcare sector
            </li>
            <li>
              <strong>Quality of Life:</strong> Enhancing the wellbeing of citizens and residents through accessible
              healthcare
            </li>
            <li>
              <strong>Economic Diversification:</strong> Creating new job opportunities in the healthcare sector
            </li>
            <li>
              <strong>Innovation:</strong> Leveraging technology and modern practices to deliver efficient healthcare
            </li>
            <li>
              <strong>Sustainability:</strong> Reducing healthcare costs while improving outcomes
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
            The Future of Home Healthcare in Saudi Arabia
          </h2>
          <p>
            As Saudi Arabia continues to implement Vision 2030, home health care services will play an increasingly
            important role in the healthcare landscape. The integration of technology, telemedicine, and personalized
            care approaches will further enhance the quality and accessibility of these services.
          </p>
          <p>
            5CARE Network is proud to be at the forefront of this transformation, providing high-quality home healthcare
            services that align with the kingdom's vision for a healthier, more prosperous future.
          </p>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">About 5CARE Network</h3>
            <p>
              Established in 2013, 5CARE Network has been a pioneer in home healthcare services in Saudi Arabia. With a
              team of licensed medical professionals and a commitment to excellence, we continue to set the standard for
              quality home healthcare delivery.
            </p>
          </div>
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
