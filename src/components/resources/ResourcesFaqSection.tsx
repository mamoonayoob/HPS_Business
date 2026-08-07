"use client";

import {
  Building2,
  ChevronDown,
  Headphones,
  Mail,
  MapPin,
  Minus,
  Package,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RESOURCES_FAQ } from "@/config/resources";

const FAQ_ICONS = [Package, MapPin, ShieldCheck, Building2];

export function ResourcesFaqSection() {
  const { label, heading, description, support, items } = RESOURCES_FAQ;
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  return (
    <InnerPageSection bgClassName="bg-white" containerClassName="resources-section">
      <div className="grid items-start gap-8 md:gap-10 xl:grid-cols-[minmax(0,475px)_minmax(0,950px)] xl:gap-10">
        <aside className="min-w-0 xl:sticky xl:top-28 xl:self-start">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 shrink-0 bg-[var(--about-color-cyan)]" />
            <p className="resources-label text-[var(--about-color-cyan)]">
              {label}
            </p>
          </div>

          <h2 className="resources-heading mt-2 text-[var(--about-color-text)]">
            {heading}
          </h2>

          <p className="resources-body mt-4">{description}</p>

          <div className="resources-support-card relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f1428] via-[#151b3d] to-[#060815] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#00aeef]/15 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-[#ff3e41]/10 blur-2xl"
              aria-hidden
            />

            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-sm">
                <Headphones className="size-7 text-[var(--about-color-cyan)]" />
              </div>

              <h3 className="about-card-title mt-5 text-white">
                {support.title}
              </h3>
              <p className="resources-support-copy mt-3">{support.description}</p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`tel:${support.phone.replace(/\s/g, "")}`}
                  className="resources-support-link group"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,62,65,0.2)]">
                    <Phone className="size-5 text-[var(--about-color-red)]" />
                  </span>
                  <span className="min-w-0">
                    <span className="resources-support-link-label">
                      {support.phoneLabel}
                    </span>
                    <span className="resources-support-link-value">
                      {support.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${support.email}`}
                  className="resources-support-link group"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,174,239,0.15)]">
                    <Mail className="size-5 text-[var(--about-color-cyan)]" />
                  </span>
                  <span className="min-w-0">
                    <span className="resources-support-link-label">
                      {support.emailLabel}
                    </span>
                    <span className="resources-support-link-value">
                      {support.email}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        <ScrollReveal stagger className="flex min-w-0 flex-col gap-3 sm:gap-5">
          {items.map((item, index) => {
            const Icon = FAQ_ICONS[index] ?? Package;
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className={`motion-card resources-faq-item ${isOpen ? "resources-faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  className="resources-faq-trigger flex w-full items-start gap-2.5 p-3 text-left sm:items-center sm:gap-5 sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`resources-faq-icon flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br sm:size-14 sm:rounded-xl ${item.iconColor} shadow-[0_4px_12px_rgba(46,49,147,0.15)]`}
                  >
                    <Icon className="size-4 text-white sm:size-7" strokeWidth={1.75} />
                  </span>

                  <span className="resources-faq-question min-w-0 flex-1 text-[13px] font-bold leading-snug text-[var(--about-color-text)] sm:text-base sm:font-black sm:leading-snug lg:text-lg">
                    {item.question}
                  </span>

                  <span
                    className={`resources-faq-toggle mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border sm:mt-0 sm:size-10 ${isOpen
                        ? "border-[var(--about-color-cyan)] bg-[var(--about-color-cyan)] text-white"
                        : "border-[#e5e7eb] bg-[#f8fafc] text-[var(--about-color-muted)]"
                      }`}
                  >
                    {isOpen ? (
                      <Minus className="size-4" strokeWidth={2.5} />
                    ) : (
                      <ChevronDown className="size-4" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {isOpen ? (
                  <div className="resources-faq-panel border-t border-[#eef2f7] px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-4">
                    <p className="resources-faq-answer">{item.answer}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </ScrollReveal>
      </div>
    </InnerPageSection>
  );
}
