import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CONTACT_HERO } from "@/config/contact";

export function ContactHeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-border-light"
      style={{ height: "var(--contact-hero-height)" }}
    >
      <Image
        src={CONTACT_HERO.image}
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

      <Container className="relative flex h-full items-start pt-[80px]">
        <div
          className="w-full"
          style={{ maxWidth: "var(--contact-hero-content-max)" }}
        >
          <span className="contact-badge inline-block rounded border border-[rgba(255,62,65,0.25)] bg-[rgba(255,62,65,0.08)] px-[13px] py-[5px] text-[var(--about-color-red)]">
            {CONTACT_HERO.badge}
          </span>

          <h1 className="contact-hero-title mt-[18px]">
            <span className="text-[var(--about-color-navy)]">
              {CONTACT_HERO.titleLead}{" "}
            </span>
            <span className="text-[var(--about-color-cyan)]">
              {CONTACT_HERO.titleAccent}
            </span>
          </h1>

          <div className="mt-4 border-l-4 border-[var(--about-color-cyan)] py-1 pl-5">
            <p className="contact-hero-lead">{CONTACT_HERO.subtitle}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
