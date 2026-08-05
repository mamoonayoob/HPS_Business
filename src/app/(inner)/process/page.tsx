import { ProcessAwardsSection } from "@/components/process/ProcessAwardsSection";
import { ProcessHeroSection } from "@/components/process/ProcessHeroSection";
import { ProcessLifecycleSection } from "@/components/process/ProcessLifecycleSection";

export const metadata = {
  title: "Our Process | HPS Logistics & Delivery",
  description:
    "Discover HPS quality assurance, supply chain coordination, and logistics lifecycle standards.",
};

export default function ProcessPage() {
  return (
    <div className="process-page overflow-x-hidden">
      <ProcessHeroSection />
      <ProcessLifecycleSection />
      <ProcessAwardsSection />
    </div>
  );
}
