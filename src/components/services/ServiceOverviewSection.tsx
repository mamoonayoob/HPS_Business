import Image from "next/image";
import { Plane } from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { IconBox } from "@/components/ui/IconBox";
import type { ServiceDetail } from "@/config/service-details";
import { splitHeading } from "@/lib/split-heading";

type Props = {
  service: ServiceDetail;
};

export function ServiceOverviewSection({ service }: Props) {
  const { overview } = service;
  const { lead, accent } = splitHeading(overview.heading);

  return (
    <InnerPageSection bgClassName="bg-white" containerClassName="service-section">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="service-stack min-w-0">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-12 shrink-0 bg-[var(--service-color-red)]" />
            <p className="service-label text-[var(--service-color-red)]">
              {overview.label}
            </p>
          </div>

          <h2 className="service-heading">
            {lead && (
              <span className="text-[var(--service-color-text)]">{lead} </span>
            )}
            {accent && (
              <span className="text-[var(--service-color-cyan)]">{accent}</span>
            )}
          </h2>

          <div className="rounded-xl border-l-4 border-[var(--service-color-cyan)] bg-[#f4f7fb] px-9 py-8">
            <p className="service-body font-bold text-[var(--service-color-text)]">
              {overview.highlight}
            </p>
          </div>

          <div className="border-l-4 border-[var(--service-color-navy)] py-1 pl-4">
            <p className="service-body">{overview.secondary}</p>
          </div>
        </div>

        <div className="service-overview-visual motion-image-group">
          <div className="service-overview-image-shell motion-image-wrap">
            <div className="service-overview-image-frame">
              <Image
                src={overview.image}
                alt={service.title}
                fill
                unoptimized
                className="motion-image object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="service-overview-stat motion-float-badge motion-float-badge--delay">
            <IconBox icon={Plane} variant="cyan" size="md" className="shrink-0" />
            <div className="min-w-0">
              <p className="text-2xl font-black leading-6 text-white">
                {overview.stat.value}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.06em] text-white/70">
                {overview.stat.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageSection>
  );
}
