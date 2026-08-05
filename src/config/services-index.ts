export const SERVICES_INDEX_HERO = {
  badge: "LOGISTICS SOLUTIONS",
  titleLead: "EXPLORE OUR",
  titleAccent: "SERVICES",
  titleTail: "PORTFOLIO",
  subtitle:
    "From global freight and customs clearance to last-mile delivery and secure warehousing — discover the full range of HPS logistics solutions built for your business.",
  image: "/images/services/freight-forwarding-hero.jpg",
  primaryHref: "/contact",
  primaryLabel: "Get a Quote",
  secondaryHref: "/shipment/create",
  secondaryLabel: "Create Shipment",
};

export const SERVICES_INDEX_HERO_QUICK = [
  { slug: "freight-forwarding", label: "Freight Forwarding" },
  { slug: "transportation", label: "Transportation" },
  { slug: "customs-compliance", label: "Customs & Compliance" },
  { slug: "warehousing-distribution", label: "Warehousing" },
  { slug: "cash-on-delivery", label: "Cash on Delivery" },
  { slug: "door-to-door-delivery", label: "Door to Door" },
] as const;

export const SERVICES_INDEX_HIGHLIGHTS = [
  { value: "12+", label: "Specialized Services" },
  { value: "150+", label: "Global Routes" },
  { value: "24/7", label: "Operations Support" },
];

export const SERVICES_INDEX_CATEGORIES = [
  {
    id: "freight-global",
    label: "Freight & Global Trade",
    description:
      "Cross-border logistics, supply chain coordination, and regulatory compliance.",
    slugs: [
      "freight-forwarding",
      "supply-chain",
      "import-export-consolidation",
      "customs-compliance",
    ],
  },
  {
    id: "transport-delivery",
    label: "Transport & Delivery",
    description:
      "Road, air, and sea movement with domestic coverage and flexible COD options.",
    slugs: [
      "transportation",
      "domestic-movement",
      "door-to-door-delivery",
      "cash-on-delivery",
    ],
  },
  {
    id: "storage-business",
    label: "Storage & Business Solutions",
    description:
      "Warehousing, packaging, and tailored programs for enterprise clients.",
    slugs: [
      "warehousing-distribution",
      "secure-warehousing",
      "packaging-packing",
      "b2b-service",
    ],
  },
] as const;

export const SERVICES_INDEX_CTA = {
  badge: "Need a Custom Solution?",
  titleLead: "LET'S MOVE YOUR",
  titleAccent: "CARGO",
  titleTail: "TOGETHER",
  subtitle:
    "Tell us about your shipment requirements and our team will recommend the right service mix for your business.",
  primaryHref: "/contact",
  primaryLabel: "Get a Quote",
  secondaryHref: "/shipment/create",
  secondaryLabel: "Create Shipment",
};
