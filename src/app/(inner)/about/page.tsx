import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutProfileSection } from "@/components/about/AboutProfileSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutCoreIdentitySection } from "@/components/about/AboutCoreIdentitySection";

export const metadata = {
  title: "About Us | HPS Logistics & Delivery",
  description:
    "Learn about HPS — leading competencies in freight and delivery services with experienced staff and advanced logistics solutions.",
};

export default function AboutPage() {
  return (
    <div className="about-page overflow-x-hidden">
      <AboutHeroSection />
      <AboutProfileSection />
      <AboutTeamSection />
      <AboutCoreIdentitySection />
    </div>
  );
}
