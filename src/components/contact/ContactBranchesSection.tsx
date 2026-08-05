import Image from "next/image";
import { MapPin } from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { CONTACT_BRANCHES } from "@/config/contact";

export function ContactBranchesSection() {
  const { badge, titleLead, titleAccent, mapImage } = CONTACT_BRANCHES;

  return (
    <InnerPageSection
      bgClassName="bg-[#f4f7fb]"
      containerClassName="contact-section"
    >
      <div className="mx-auto max-w-[1488px] text-center">
        <span className="contact-locations-badge inline-flex items-center gap-2 rounded border border-[rgba(0,174,239,0.25)] bg-[rgba(0,174,239,0.08)] px-[13px] py-[5px] text-[var(--about-color-cyan)]">
          <MapPin className="size-4 shrink-0" strokeWidth={2} />
          {badge}
        </span>

        <h2 className="contact-branches-title mt-4">
          <span className="text-[var(--about-color-navy)]">{titleLead} </span>
          <span className="text-[var(--about-color-cyan)]">{titleAccent}</span>
        </h2>
      </div>

      <div className="contact-branches-map-card">
        <div className="contact-branches-map-inner">
          <Image
            src={mapImage}
            alt="HPS branches across Saudi Arabia"
            fill
            unoptimized
            className="object-contain object-center"
            sizes="990px"
          />
        </div>
      </div>
    </InnerPageSection>
  );
}
