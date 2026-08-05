import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { SERVICES_INDEX_CTA } from "@/config/services-index";

export function ServicesIndexCtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary-navy">
      <div
        className="pointer-events-none absolute -left-24 top-0 size-[420px] rounded-full bg-[#00aeef]/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-[480px] rounded-full bg-[#ff3e41]/10 blur-[120px]"
        aria-hidden
      />

      <InnerPageSection containerClassName="services-index-cta relative">
        <div className="services-index-cta-inner">
          <div className="services-index-cta-copy">
            <span className="services-index-cta-badge">
              {SERVICES_INDEX_CTA.badge}
            </span>
            <h2 className="services-index-cta-title">
              <span className="text-white">{SERVICES_INDEX_CTA.titleLead} </span>
              <span className="text-[var(--about-color-cyan)]">
                {SERVICES_INDEX_CTA.titleAccent}
              </span>
              <span className="text-white"> {SERVICES_INDEX_CTA.titleTail}</span>
            </h2>
            <p className="services-index-cta-lead">
              {SERVICES_INDEX_CTA.subtitle}
            </p>
          </div>

          <div className="services-index-cta-actions">
            <Link
              href={SERVICES_INDEX_CTA.primaryHref}
              className="services-index-cta-btn services-index-cta-btn--primary"
            >
              {SERVICES_INDEX_CTA.primaryLabel}
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href={SERVICES_INDEX_CTA.secondaryHref}
              className="services-index-cta-btn services-index-cta-btn--secondary"
            >
              {SERVICES_INDEX_CTA.secondaryLabel}
            </Link>
          </div>
        </div>
      </InnerPageSection>
    </section>
  );
}
