import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  SERVICES_INDEX_HERO,
  SERVICES_INDEX_HERO_QUICK,
} from "@/config/services-index";
import { SERVICES } from "@/config/services";

export function ServicesIndexHeroSection() {
  return (
    <section className="services-index-hero relative overflow-hidden border-b border-border-light">
      <Image
        src={SERVICES_INDEX_HERO.image}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="services-index-hero-overlay" aria-hidden />
      <div className="services-index-hero-pattern" aria-hidden />

      <Container className="services-index-hero-container relative">
        <div className="services-index-hero-grid">
          <div className="services-index-hero-copy">
            <span className="services-index-hero-badge">
              <span className="services-index-hero-badge-dot" aria-hidden />
              <Layers className="size-3.5 shrink-0" strokeWidth={2.5} />
              {SERVICES_INDEX_HERO.badge}
            </span>

            <h1 className="services-index-hero-title">
              <span className="text-[var(--about-color-navy)]">
                {SERVICES_INDEX_HERO.titleLead}
              </span>
              <br />
              <span className="text-[var(--about-color-cyan)]">
                {SERVICES_INDEX_HERO.titleAccent}
              </span>
              <br />
              <span className="text-[var(--about-color-navy)]">
                {SERVICES_INDEX_HERO.titleTail}
              </span>
            </h1>

            <div className="services-index-hero-lead-wrap">
              <p className="services-index-hero-lead">
                {SERVICES_INDEX_HERO.subtitle}
              </p>
            </div>

            <div className="services-index-hero-actions">
              <Link
                href={SERVICES_INDEX_HERO.primaryHref}
                className="services-index-hero-btn services-index-hero-btn--primary"
              >
                {SERVICES_INDEX_HERO.primaryLabel}
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href={SERVICES_INDEX_HERO.secondaryHref}
                className="services-index-hero-btn services-index-hero-btn--secondary"
              >
                {SERVICES_INDEX_HERO.secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="services-index-hero-panel">
            <div className="services-index-hero-card">
              <div className="services-index-hero-card-accent" aria-hidden />

              <div className="services-index-hero-card-head">
                <div>
                  <p className="services-index-hero-card-label">
                    Popular Services
                  </p>
                  <p className="services-index-hero-card-sub">
                    Jump directly to what you need
                  </p>
                </div>
                <span className="services-index-hero-card-count">12+</span>
              </div>

              <ul className="services-index-hero-quick-list">
                {SERVICES_INDEX_HERO_QUICK.map((item) => {
                  const service = SERVICES.find((entry) => entry.slug === item.slug);
                  if (!service) return null;

                  return (
                    <li key={item.slug}>
                      <Link
                        href={service.href}
                        className="services-index-hero-quick-link group"
                      >
                        <span className="services-index-hero-quick-text">
                          {item.label}
                        </span>
                        <ChevronRight className="size-4 shrink-0 text-[var(--about-color-cyan)] transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link href="#services-catalog" className="services-index-hero-card-footer">
                View full catalog
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
