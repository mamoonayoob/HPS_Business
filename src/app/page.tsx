import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { FactsSection } from "@/components/home/FactsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { QuoteSection } from "@/components/home/QuoteSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <PartnersSection />
      <SolutionsSection />
      <FactsSection />
      <ServicesSection />
      <QuoteSection />
    </>
  );
}
