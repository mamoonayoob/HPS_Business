import Image from "next/image";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RESOURCES_HERO } from "@/config/resources";

export function ResourcesHeroSection() {
  return (
    <section className="relative h-[359px] overflow-hidden border-b border-border-light">
      <Image
        src={RESOURCES_HERO.image}
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
        <div className="max-w-[768px]">
          <span className="resources-badge inline-flex items-center gap-2 rounded border border-[rgba(0,174,239,0.25)] bg-[rgba(0,174,239,0.08)] px-3 py-1.5 text-[var(--about-color-cyan)]">
            <Info className="size-3 shrink-0" strokeWidth={2.5} />
            {RESOURCES_HERO.badge}
          </span>

          <h1 className="resources-hero-title mt-4">
            <span className="text-[var(--about-color-navy)]">
              {RESOURCES_HERO.titleLead}{" "}
            </span>
            <span className="text-[var(--about-color-cyan)]">
              {RESOURCES_HERO.titleAmp}{" "}
            </span>
            <span className="text-[var(--about-color-navy)]">
              {RESOURCES_HERO.titleAccent}
            </span>
          </h1>

          <div className="mt-6 border-l-4 border-[var(--about-color-red)] py-1 pl-5">
            <p className="resources-hero-lead">{RESOURCES_HERO.subtitle}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
