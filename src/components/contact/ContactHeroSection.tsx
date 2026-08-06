import Image from "next/image";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT_HERO } from "@/config/contact";

export function ContactHeroSection() {
  return (
    <section className="service-hero relative h-[450px] overflow-hidden">
      <Image
        src={CONTACT_HERO.image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div className="service-hero-overlay service-hero-overlay--soft" aria-hidden />

      <Container className="relative flex h-full flex-col items-center pt-20 text-center">
        <div className="flex w-full max-w-[768px] flex-col items-center gap-4">
          <span className="service-badge inline-flex items-center gap-2 rounded border border-[rgba(0,174,239,0.35)] bg-[rgba(0,174,239,0.12)] px-3 py-1.5 text-[var(--service-color-cyan)]">
            <Mail className="size-4 shrink-0" strokeWidth={2.5} />
            {CONTACT_HERO.badge}
          </span>

          <h1 className="service-hero-title">
            <span className="text-white">{CONTACT_HERO.titleLead} </span>
            <span className="text-[var(--service-color-cyan)]">
              {CONTACT_HERO.titleAccent}
            </span>
          </h1>

          <p className="service-hero-lead max-w-[672px]">
            {CONTACT_HERO.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
