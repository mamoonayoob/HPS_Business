export type LegalBlock = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export const LEGAL_COMPANY = {
  name: "High Performance Service Est. (HPS)",
  brand: "HPS Logistics & Delivery",
  email: "info@hps.com.sa",
  phone: "+966 9200 14641",
  location: "Jeddah–Riyadh, Kingdom of Saudi Arabia",
  lastUpdated: "6 August 2026",
};

export const PRIVACY_POLICY = {
  hero: {
    badge: "LEGAL",
    titleLead: "PRIVACY",
    titleAccent: "POLICY",
    subtitle:
      "How HPS collects, uses, and protects your information when you use our website, tracking tools, and logistics services.",
    image: "/images/contact/contact-hero.jpg",
  },
  intro:
    "High Performance Service Est. (HPS Logistics & Delivery) respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you visit our website, create shipments, track parcels, or contact our team.",
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      paragraphs: [
        "We collect information that you provide directly to us and information generated when you use our services.",
      ],
      list: [
        "Contact details such as your name, email address, phone number, and company name.",
        "Shipment information including sender and recipient addresses, package contents, weight, dimensions, and declared value.",
        "Account credentials when you register or log in to manage shipments.",
        "Communications you send to us through contact forms, quote requests, career applications, or customer support.",
        "Tracking data related to your AWB or shipment reference number and delivery status.",
      ],
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      paragraphs: [
        "HPS uses collected information to operate, deliver, and improve our logistics services.",
      ],
      list: [
        "Process, pick up, transport, and deliver shipments.",
        "Provide real-time tracking updates and delivery notifications.",
        "Verify identity through OTP or account login where applicable.",
        "Respond to inquiries, quotes, and support requests.",
        "Improve website performance, security, and user experience.",
        "Comply with applicable laws, customs requirements, and regulatory obligations.",
      ],
    },
    {
      id: "sharing",
      title: "3. When We Share Information",
      paragraphs: [
        "We do not sell your personal information. We may share data only as needed to fulfil our services or meet legal requirements.",
      ],
      list: [
        "Courier partners, hubs, and service centres involved in handling your shipment.",
        "Payment and Cash on Delivery (COD) processing partners where applicable.",
        "Customs, regulatory, or government authorities when required by law.",
        "Technology providers that host our website, APIs, or communication systems under confidentiality obligations.",
      ],
    },
    {
      id: "cookies",
      title: "4. Cookies & Similar Technologies",
      paragraphs: [
        "Our website may use cookies and similar technologies to remember preferences, maintain sessions, and understand how visitors use our pages. You can control cookies through your browser settings. Disabling cookies may limit certain features such as login persistence.",
      ],
    },
    {
      id: "retention",
      title: "5. Data Retention",
      paragraphs: [
        "We retain personal and shipment information for as long as necessary to provide services, resolve disputes, enforce agreements, and comply with legal, tax, and regulatory record-keeping requirements.",
      ],
    },
    {
      id: "security",
      title: "6. Data Security",
      paragraphs: [
        "HPS implements administrative, technical, and operational safeguards designed to protect your information against unauthorized access, loss, or misuse. No method of transmission over the internet is completely secure; we encourage you to use strong passwords and protect your account credentials.",
      ],
    },
    {
      id: "your-rights",
      title: "7. Your Rights & Choices",
      paragraphs: [
        "Depending on applicable law, you may request access to, correction of, or deletion of certain personal information we hold about you. You may also opt out of marketing communications at any time.",
      ],
      list: [
        "Update account or shipment details through our platform where available.",
        "Contact us to request access, correction, or deletion of your data.",
        "Withdraw consent for optional communications.",
      ],
    },
    {
      id: "children",
      title: "8. Children's Privacy",
      paragraphs: [
        "Our services are intended for businesses and individuals aged 18 and over. We do not knowingly collect personal information from children.",
      ],
    },
    {
      id: "changes",
      title: "9. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated date. Continued use of our website or services after changes constitutes acceptance of the updated policy.",
      ],
    },
    {
      id: "contact",
      title: "10. Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy or how HPS handles your data, please contact us:",
      ],
      list: [
        `Email: ${LEGAL_COMPANY.email}`,
        `Phone: ${LEGAL_COMPANY.phone}`,
        `Location: ${LEGAL_COMPANY.location}`,
      ],
    },
  ] satisfies LegalBlock[],
};

export const TERMS_OF_SERVICE = {
  hero: {
    badge: "LEGAL",
    titleLead: "TERMS &",
    titleAccent: "CONDITIONS",
    subtitle:
      "Please read these terms carefully before using the HPS website, tracking portal, or shipment services.",
    image: "/images/contact/contact-hero.jpg",
  },
  intro:
    "These Terms & Conditions govern your access to and use of the HPS Logistics & Delivery website and related services operated by High Performance Service Est. (HPS). By using our website, creating a shipment, or tracking a parcel, you agree to these terms.",
  sections: [
    {
      id: "services",
      title: "1. Our Services",
      paragraphs: [
        "HPS provides logistics and delivery services including freight forwarding, supply chain solutions, transportation, customs and compliance support, warehousing, packaging, Cash on Delivery (COD), and door-to-door delivery within Saudi Arabia and internationally where available.",
        "Service availability, transit times, and pricing may vary based on destination, shipment type, weight, dimensions, and operational conditions.",
      ],
    },
    {
      id: "account",
      title: "2. Accounts & Access",
      paragraphs: [
        "Certain features such as creating shipments or managing orders may require an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.",
        "You agree to provide accurate, current, and complete information and to update it when necessary.",
      ],
    },
    {
      id: "shipments",
      title: "3. Shipment Rules & Prohibited Items",
      paragraphs: [
        "You represent that you have the legal right to ship all contents and that shipment details provided are accurate. HPS may refuse, hold, or return shipments that violate law, carrier rules, or these terms.",
      ],
      list: [
        "Illegal goods, weapons, explosives, or hazardous materials without proper authorization.",
        "Items prohibited by Saudi customs or destination country regulations.",
        "Misdeclared weight, value, or contents.",
        "Shipments that pose a safety, security, or health risk to personnel or equipment.",
      ],
    },
    {
      id: "tracking",
      title: "4. Tracking & Delivery",
      paragraphs: [
        "Tracking information is provided for convenience and reflects the latest operational status available in our systems. Estimated delivery dates are not guaranteed unless expressly agreed in writing for a specific service level.",
        "Recipients must provide accessible delivery locations and valid contact details. Failed delivery attempts may incur redelivery fees or return charges according to applicable tariffs.",
      ],
    },
    {
      id: "cod",
      title: "5. Cash on Delivery (COD)",
      paragraphs: [
        "Where COD services are offered, HPS will collect payment from the recipient on your behalf subject to successful delivery and verification procedures. Settlement timelines and fees will be communicated according to your service agreement or published rates.",
      ],
    },
    {
      id: "fees",
      title: "6. Fees & Payment",
      paragraphs: [
        "Shipping charges are calculated based on service type, weight, dimensions, destination, and any additional services requested. You agree to pay all applicable fees, duties, taxes, and surcharges associated with your shipment.",
        "HPS may suspend services for overdue accounts or disputed charges unresolved after reasonable notice.",
      ],
    },
    {
      id: "liability",
      title: "7. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by applicable law, HPS is not liable for indirect, incidental, special, or consequential damages including lost profits, business interruption, or loss of data.",
        "Our liability for loss or damage to a shipment is limited to the lesser of the declared value, applicable tariff limits, or the amount recoverable under relevant transport conventions and local regulations, unless additional coverage is purchased in writing.",
      ],
    },
    {
      id: "claims",
      title: "8. Claims & Disputes",
      paragraphs: [
        "Any claim for loss, damage, or delay must be submitted in writing within the time limits specified in your service agreement or applicable carrier terms. Failure to notify HPS within the required period may limit or void your claim.",
      ],
    },
    {
      id: "website",
      title: "9. Website Use",
      paragraphs: [
        "You may not misuse our website, attempt unauthorized access to systems, interfere with service operation, scrape content without permission, or use the platform for fraudulent or unlawful purposes.",
        "All content on this website—including logos, text, graphics, and design—is owned by HPS or its licensors and may not be copied without prior written consent.",
      ],
    },
    {
      id: "termination",
      title: "10. Suspension & Termination",
      paragraphs: [
        "HPS may suspend or terminate access to services if you breach these terms, provide false information, or if continued service poses legal, security, or operational risk.",
      ],
    },
    {
      id: "law",
      title: "11. Governing Law",
      paragraphs: [
        "These Terms & Conditions are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Saudi Arabia, unless otherwise required by mandatory law.",
      ],
    },
    {
      id: "contact",
      title: "12. Contact",
      paragraphs: [
        "For questions about these Terms & Conditions, contact HPS:",
      ],
      list: [
        `Email: ${LEGAL_COMPANY.email}`,
        `Phone: ${LEGAL_COMPANY.phone}`,
        `Location: ${LEGAL_COMPANY.location}`,
      ],
    },
  ] satisfies LegalBlock[],
};
