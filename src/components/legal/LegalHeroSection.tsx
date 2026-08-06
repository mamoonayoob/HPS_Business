import Image from "next/image";
import { Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";

type LegalHero = {
  badge: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  image: string;
};

type Props = {
  hero: LegalHero;
};

export function LegalHeroSection({ hero }: Props) {
  return (
    <section className="service-hero relative overflow-hidden">
      <Image
        src={hero.image}
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
            <Scale className="size-4 shrink-0" strokeWidth={2.5} />
            {hero.badge}
          </span>

          <h1 className="service-hero-title">
            <span className="text-white">{hero.titleLead} </span>
            <span className="text-[var(--service-color-cyan)]">
              {hero.titleAccent}
            </span>
          </h1>

          <p className="service-hero-lead max-w-[672px]">{hero.subtitle}</p>
        </div>
      </Container>
    </section>
  );
}
