import { ExternalLink } from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { CONTACT_MAP } from "@/config/contact";

export function ContactMapSection() {
  const { label, heading, mapsLink, embedUrl } = CONTACT_MAP;

  return (
    <InnerPageSection bgClassName="bg-white" containerClassName="contact-section">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <div
            className="flex items-center"
            style={{ gap: "var(--contact-stack-gap)" }}
          >
            <span className="contact-label-divider contact-label-divider--map" />
            <p className="contact-label text-[var(--about-color-cyan)]">
              {label}
            </p>
          </div>
          <h2 className="contact-map-heading mt-4 text-[var(--about-color-text)]">
            {heading}
          </h2>
        </div>

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-maps-btn inline-flex shrink-0 items-center gap-2"
        >
          <ExternalLink className="size-5" />
          Open in Maps
        </a>
      </div>

      <div
        className="contact-map-frame mt-10 overflow-hidden rounded-[24px] border border-[#e5e7eb] shadow-[0_12px_40px_rgba(46,49,147,0.08)]"
        style={{ height: "var(--contact-map-embed-height)" }}
      >
        <iframe
          title="HPS head office location"
          src={embedUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </InnerPageSection>
  );
}
