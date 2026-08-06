import { LegalContentSection } from "@/components/legal/LegalContentSection";
import { LegalHeroSection } from "@/components/legal/LegalHeroSection";
import { TERMS_OF_SERVICE } from "@/config/legal";

export const metadata = {
  title: "Terms & Conditions | HPS Logistics & Delivery",
  description:
    "Terms and conditions for using HPS Logistics & Delivery website, tracking, and shipment services.",
};

export default function TermsPage() {
  return (
    <div className="legal-page overflow-x-hidden">
      <LegalHeroSection hero={TERMS_OF_SERVICE.hero} />
      <LegalContentSection
        intro={TERMS_OF_SERVICE.intro}
        sections={TERMS_OF_SERVICE.sections}
        alternateHref="/privacy"
        alternateLabel="Privacy Policy"
      />
    </div>
  );
}
