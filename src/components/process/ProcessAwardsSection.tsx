import Image from "next/image";
import { Award } from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { PROCESS_AWARDS } from "@/config/process";

function AwardCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="process-award-card group relative overflow-hidden rounded-2xl bg-[#0a0e22]/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-8">
      <div
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#00aeef] from-50% to-[#ff3e41] to-50%"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[380px] items-center justify-center sm:min-h-[420px]">
        <div className="relative h-[340px] w-full max-w-[200px] sm:h-[380px] sm:max-w-[220px]">
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 45vw, 220px"
          />
        </div>
      </div>
    </div>
  );
}

export function ProcessAwardsSection() {
  return (
    <section className="relative overflow-hidden bg-[#05070f]">
      <div
        className="pointer-events-none absolute -left-24 top-1/4 size-[520px] rounded-full bg-[#1e3192]/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 size-[560px] rounded-full bg-[#00aeef]/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-[#ff3e41]/10 blur-[140px]"
        aria-hidden
      />

      <InnerPageSection containerClassName="process-section relative">
        <div className="mx-auto max-w-4xl text-center">
          <span className="process-awards-badge inline-flex items-center gap-2 rounded border border-[rgba(255,62,65,0.45)] bg-[rgba(255,62,65,0.08)] px-4 py-1.5 text-[var(--about-color-red)]">
            <Award className="size-4 shrink-0" strokeWidth={2} />
            {PROCESS_AWARDS.badge}
          </span>

          <h2 className="process-awards-title mt-6">
            <span className="text-white">{PROCESS_AWARDS.titleLead} </span>
            <span className="text-[var(--about-color-cyan)]">
              {PROCESS_AWARDS.titleAccent}
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {PROCESS_AWARDS.images.map((src, index) => (
            <AwardCard
              key={src}
              src={src}
              alt={`HPS logistics award ${index + 1}`}
            />
          ))}
        </div>

        <p className="process-awards-copy mx-auto mt-10 max-w-[672px] text-center">
          {PROCESS_AWARDS.description}
        </p>
      </InnerPageSection>
    </section>
  );
}
