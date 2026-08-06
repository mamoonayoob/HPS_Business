import { LegalContentSection } from "@/components/legal/LegalContentSection";
import { LegalHeroSection } from "@/components/legal/LegalHeroSection";
import { PRIVACY_POLICY } from "@/config/legal";

export const metadata = {
  title: "Privacy Policy | HPS Logistics & Delivery",
  description:
    "Read how HPS Logistics & Delivery collects, uses, and protects your personal and shipment information.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page overflow-x-hidden">
      <LegalHeroSection hero={PRIVACY_POLICY.hero} />
      <LegalContentSection
        intro={PRIVACY_POLICY.intro}
        sections={PRIVACY_POLICY.sections}
        alternateHref="/terms"
        alternateLabel="Terms & Conditions"
      />
    </div>
  );
}
