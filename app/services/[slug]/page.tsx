import { notFound } from "next/navigation"
import { servicesData, getServiceBySlug } from "@/lib/services-data"
import ServicePageClient from "./client"

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found - 5CARE Network",
    }
  }

  return {
    title: `${service.name} - Healthcare Services | 5CARE Network`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return <ServicePageClient service={service} />
}
