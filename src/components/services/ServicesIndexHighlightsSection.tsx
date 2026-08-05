import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { SERVICES_INDEX_HIGHLIGHTS } from "@/config/services-index";

export function ServicesIndexHighlightsSection() {
  return (
    <InnerPageSection
      bgClassName="border-b border-border-light bg-white"
      containerClassName="services-index-highlights"
    >
      <div className="services-index-highlights-grid">
        {SERVICES_INDEX_HIGHLIGHTS.map((item) => (
          <div key={item.label} className="services-index-highlight">
            <p className="services-index-highlight-value">{item.value}</p>
            <p className="services-index-highlight-label">{item.label}</p>
          </div>
        ))}
      </div>
    </InnerPageSection>
  );
}
