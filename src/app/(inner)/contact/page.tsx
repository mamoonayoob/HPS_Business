import { ContactBranchesSection } from "@/components/contact/ContactBranchesSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactMapSection } from "@/components/contact/ContactMapSection";

export const metadata = {
  title: "Contact Us | HPS Logistics & Delivery",
  description:
    "Get in touch with HPS for quotes, support, and logistics inquiries across Saudi Arabia.",
};

export default function ContactPage() {
  return (
    <div className="contact-page overflow-x-hidden">
      <ContactHeroSection />
      <ContactFormSection />
      <ContactBranchesSection />
      <ContactMapSection />
    </div>
  );
}
