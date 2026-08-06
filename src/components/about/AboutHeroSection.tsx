import Image from "next/image";
import { Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const ABOUT_HERO = {
  badge: "Discover HPS",
  titleLead: "ABOUT OUR",
  titleAccent: "COMPANY",
  subtitle:
    "Delivering excellence, speed, and reliability. We represent our clients in the best possible way to ensure credibility in every delivery promise.",
  image: "/images/about-logistics.png",
};

export function AboutHeroSection() {
  return (
    <section className="service-hero relative overflow-hidden">
      <Image
        src={ABOUT_HERO.image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div className="service-hero-overlay" aria-hidden />

      <Container className="service-hero-inner">
        <div className="flex w-full max-w-[768px] flex-col items-center gap-4">
          <span className="service-badge inline-flex items-center gap-2 rounded border border-[rgba(0,174,239,0.35)] bg-[rgba(0,174,239,0.12)] px-3 py-1.5 text-[var(--service-color-cyan)]">
            <Building2 className="size-4 shrink-0" strokeWidth={2.5} />
            {ABOUT_HERO.badge}
          </span>

          <h1 className="service-hero-title">
            <span className="text-white">{ABOUT_HERO.titleLead} </span>
            <span className="text-[var(--service-color-cyan)]">
              {ABOUT_HERO.titleAccent}
            </span>
          </h1>

          <p className="service-hero-lead max-w-[672px]">{ABOUT_HERO.subtitle}</p>
        </div>
      </Container>
    </section>
  );
}
