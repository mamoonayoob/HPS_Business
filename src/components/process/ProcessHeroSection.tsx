import Image from "next/image";
import { ClipboardCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PROCESS_HERO } from "@/config/process";

export function ProcessHeroSection() {
  return (
    <section className="service-hero relative overflow-hidden">
      <Image
        src={PROCESS_HERO.image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div className="service-hero-overlay service-hero-overlay--soft" aria-hidden />

      <Container className="service-hero-inner">
        <div className="flex w-full max-w-[768px] flex-col items-center gap-4">
          <span className="service-badge inline-flex items-center gap-2 rounded border border-[rgba(0,174,239,0.35)] bg-[rgba(0,174,239,0.12)] px-3 py-1.5 text-[var(--service-color-cyan)]">
            <ClipboardCheck className="size-4 shrink-0" strokeWidth={2.5} />
            {PROCESS_HERO.badge}
          </span>

          <h1 className="service-hero-title">
            <span className="text-white">{PROCESS_HERO.titleLead} </span>
            <span className="text-[var(--service-color-cyan)]">
              {PROCESS_HERO.titleAccent}
            </span>
          </h1>

          <p className="service-hero-lead max-w-[672px]">
            {PROCESS_HERO.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
