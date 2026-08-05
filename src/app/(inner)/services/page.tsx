import { ServicesIndexCtaSection } from "@/components/services/ServicesIndexCtaSection";
import { ServicesIndexGridSection } from "@/components/services/ServicesIndexGridSection";
import { ServicesIndexHeroSection } from "@/components/services/ServicesIndexHeroSection";
import { ServicesIndexHighlightsSection } from "@/components/services/ServicesIndexHighlightsSection";

export const metadata = {
  title: "Our Services | HPS Logistics & Delivery",
  description:
    "Explore HPS logistics services — freight forwarding, supply chain, transportation, customs, warehousing, COD, and more.",
};

export default function ServicesIndexPage() {
  return (
    <div className="services-index-page overflow-x-hidden">
      <ServicesIndexHeroSection />
      <ServicesIndexHighlightsSection />
      <ServicesIndexGridSection />
      <ServicesIndexCtaSection />
    </div>
  );
}
