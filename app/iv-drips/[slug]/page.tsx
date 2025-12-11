import { notFound } from "next/navigation"
import { ivDripsData, getIVDripBySlug } from "@/lib/iv-drips-data"
import IVDripPageClient from "./client"

export async function generateStaticParams() {
  return ivDripsData.map((drip) => ({
    slug: drip.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const drip = getIVDripBySlug(slug)

  if (!drip) {
    return {
      title: "IV Drip Not Found - 5CARE Network",
    }
  }

  return {
    title: `${drip.name} - IV Therapy | 5CARE Network`,
    description: drip.description,
  }
}

export default async function IVDripPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const drip = getIVDripBySlug(slug)

  if (!drip) {
    notFound()
  }

  return <IVDripPageClient drip={drip} />
}
