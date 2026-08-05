import Image from "next/image";
import { BarChart3, Medal, Users } from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { CAREERS_CULTURE } from "@/config/careers";

const PERK_ICONS = [BarChart3, Users, Medal];

export function CareersCultureSection() {
  const { label, heading, paragraphs, perks, visualImage } = CAREERS_CULTURE;

  return (
    <InnerPageSection bgClassName="bg-white" containerClassName="careers-section">
      <div className="grid items-stretch gap-12 xl:grid-cols-[minmax(0,831px)_467px] xl:gap-16">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-12 shrink-0 bg-[var(--about-color-navy)]" />
            <p className="careers-label text-[var(--about-color-navy)]">
              {label}
            </p>
          </div>

          <h2 className="careers-heading mt-2 text-[var(--about-color-text)]">
            {heading}
          </h2>

          <div className="careers-body-stack mt-6">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="careers-body">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {perks.map((perk, index) => {
              const Icon = PERK_ICONS[index] ?? BarChart3;
              return (
                <article
                  key={perk.title}
                  className="careers-perk-card rounded-2xl border border-[#e5e7eb] bg-white p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#e5e7eb] bg-[#f8fafc]">
                      <Icon
                        className="size-5 text-[var(--about-color-navy)]"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span className="text-sm font-bold text-[#cbd5e1]">
                      {perk.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xs font-black uppercase tracking-[0.06em] text-[var(--about-color-text)]">
                    {perk.title}
                  </h3>
                  <p className="careers-body-sm mt-2">{perk.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="flex w-full items-center justify-center xl:min-h-full">
          <div className="relative aspect-[467/643] w-full max-w-[467px]">
            <Image
              src={visualImage}
              alt="HPS team and delivery professionals"
              fill
              unoptimized
              className="object-contain object-center"
              sizes="(max-width: 1280px) 100vw, 467px"
            />
          </div>
        </div>
      </div>
    </InnerPageSection>
  );
}
