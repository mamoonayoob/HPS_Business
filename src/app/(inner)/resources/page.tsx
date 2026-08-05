import { ResourcesFaqSection } from "@/components/resources/ResourcesFaqSection";
import { ResourcesHeroSection } from "@/components/resources/ResourcesHeroSection";

export const metadata = {
  title: "Resources & FAQ | HPS Logistics & Delivery",
  description:
    "Find answers about HPS services, shipment tracking, handling procedures, and logistics support.",
};

export default function ResourcesPage() {
  return (
    <div className="resources-page overflow-x-hidden">
      <ResourcesHeroSection />
      <ResourcesFaqSection />
    </div>
  );
}
