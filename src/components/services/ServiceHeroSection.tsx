import Image from "next/image";
import { Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { ServiceDetail } from "@/config/service-details";
import { splitHeading } from "@/lib/split-heading";

type Props = {
  service: ServiceDetail;
};

export function ServiceHeroSection({ service }: Props) {
  const { lead, accent } = splitHeading(service.hero.title);

  return (
    <section className="service-hero relative h-[450px] overflow-hidden">
      <Image
        src={service.hero.image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div className="service-hero-overlay" aria-hidden />

      <Container className="relative flex h-full flex-col items-center pt-20 text-center">
        <div className="flex w-full max-w-[768px] flex-col items-center gap-4">
          <span className="service-badge inline-flex items-center gap-2 rounded border border-[rgba(0,174,239,0.35)] bg-[rgba(0,174,239,0.12)] px-3 py-1.5 text-[var(--service-color-cyan)]">
            <Globe className="size-4 shrink-0" strokeWidth={2.5} />
            {service.hero.badge}
          </span>

          <h1 className="service-hero-title">
            {lead && <span className="text-white">{lead} </span>}
            {accent && (
              <span className="text-[var(--service-color-cyan)]">{accent}</span>
            )}
          </h1>

          <p className="service-hero-lead max-w-[672px]">
            {service.hero.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
