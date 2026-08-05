import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PROCESS_HERO } from "@/config/process";

export function ProcessHeroSection() {
  return (
    <section className="relative h-[421px] overflow-hidden border-b border-border-light">
      <Image
        src={PROCESS_HERO.image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/62 to-white/38"
        aria-hidden
      />

      <Container className="relative flex h-full items-start pt-20">
        <div className="max-w-[672px]">
          <span className="process-badge inline-block rounded border border-[rgba(30,49,146,0.15)] bg-[#eef2ff] px-3 py-1.5 text-[var(--about-color-navy)]">
            {PROCESS_HERO.badge}
          </span>

          <h1 className="process-hero-title mt-4">
            <span className="text-[var(--about-color-navy)]">
              {PROCESS_HERO.titleLead}{" "}
            </span>
            <span className="text-[var(--about-color-cyan)]">
              {PROCESS_HERO.titleAccent}
            </span>
            <span className="text-[var(--about-color-navy)]">
              {" "}
              {PROCESS_HERO.titleTail}
            </span>
          </h1>

          <div className="mt-6 border-l-4 border-[var(--about-color-cyan)] py-1 pl-5">
            <p className="process-hero-lead">{PROCESS_HERO.subtitle}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
