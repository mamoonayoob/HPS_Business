import { CareersApplicationSection } from "@/components/careers/CareersApplicationSection";
import { CareersCultureSection } from "@/components/careers/CareersCultureSection";
import { CareersHeroSection } from "@/components/careers/CareersHeroSection";

export const metadata = {
  title: "Careers | HPS Logistics & Delivery",
  description:
    "Join HPS — explore career growth, teamwork, and excellence in logistics across the Middle East.",
};

export default function CareersPage() {
  return (
    <div className="careers-page overflow-x-hidden">
      <CareersHeroSection />
      <CareersCultureSection />
      <CareersApplicationSection />
    </div>
  );
}
