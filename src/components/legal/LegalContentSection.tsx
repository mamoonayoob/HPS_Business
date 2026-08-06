import Link from "next/link";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import type { LegalBlock } from "@/config/legal";
import { LEGAL_COMPANY } from "@/config/legal";

type Props = {
  intro: string;
  sections: LegalBlock[];
  alternateHref: string;
  alternateLabel: string;
};

export function LegalContentSection({
  intro,
  sections,
  alternateHref,
  alternateLabel,
}: Props) {
  return (
    <InnerPageSection bgClassName="bg-white" containerClassName="legal-section">
      <div className="legal-document">
        <p className="legal-meta">
          Last updated: {LEGAL_COMPANY.lastUpdated} · {LEGAL_COMPANY.brand}
        </p>

        <p className="legal-intro">{intro}</p>

        <div className="legal-sections">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="legal-block">
              <h2 className="legal-block-title">{section.title}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="legal-body">
                  {paragraph}
                </p>
              ))}

              {section.list && section.list.length > 0 && (
                <ul className="legal-list">
                  {section.list.map((item) => (
                    <li key={item} className="legal-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="legal-aside">
          <p className="legal-aside-text">
            Need help or have a compliance question?{" "}
            <Link href="/contact" className="legal-aside-link">
              Contact our team
            </Link>
            .
          </p>
          <p className="legal-aside-text">
            See also:{" "}
            <Link href={alternateHref} className="legal-aside-link">
              {alternateLabel}
            </Link>
          </p>
        </aside>
      </div>
    </InnerPageSection>
  );
}
