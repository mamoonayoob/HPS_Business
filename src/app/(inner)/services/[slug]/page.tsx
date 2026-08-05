import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceDetail } from "@/config/service-details";
import { SERVICES } from "@/config/services";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceOverviewSection } from "@/components/services/ServiceOverviewSection";
import { ServiceFeaturesSection } from "@/components/services/ServiceFeaturesSection";
import { ServiceContactSection } from "@/components/services/ServiceContactSection";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | HPS Logistics`,
    description: service.hero.subtitle,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="service-page overflow-x-hidden">
      <ServiceHeroSection service={service} />
      <ServiceOverviewSection service={service} />
      <ServiceFeaturesSection service={service} />
      <ServiceContactSection service={service} />
    </div>
  );
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}
