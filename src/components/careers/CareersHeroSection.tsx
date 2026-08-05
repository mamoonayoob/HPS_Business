import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CAREERS_HERO } from "@/config/careers";

export function CareersHeroSection() {
  return (
    <section className="relative h-[361px] overflow-hidden border-b border-border-light">
      <Image
        src={CAREERS_HERO.image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/62 to-white/38"
        aria-hidden
      />

      <Container className="relative flex h-full items-start pt-20">
        <div className="max-w-[672px]">
          <span className="careers-badge inline-block rounded border border-[rgba(255,62,65,0.25)] bg-[rgba(255,62,65,0.08)] px-3 py-1.5 text-[var(--about-color-red)]">
            {CAREERS_HERO.badge}
          </span>

          <h1 className="careers-hero-title mt-4">
            <span className="text-[var(--about-color-navy)]">
              {CAREERS_HERO.titleLead}{" "}
            </span>
            <span className="text-[var(--about-color-cyan)]">
              {CAREERS_HERO.titleAccent}
            </span>
          </h1>

          <div className="mt-6 border-l-4 border-[var(--about-color-cyan)] py-1 pl-5">
            <p className="careers-hero-lead">{CAREERS_HERO.subtitle}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
