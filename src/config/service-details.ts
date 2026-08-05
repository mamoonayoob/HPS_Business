import generated from "./service-details.generated.json";

export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    image: string;
  };
  overview: {
    label: string;
    heading: string;
    highlight: string;
    secondary: string;
    image: string;
    stat: {
      value: string;
      label: string;
    };
  };
  features: {
    label: string;
    heading: string;
    items: ServiceFeature[];
  };
};

type GeneratedService = {
  slug: string;
  title: string;
  heroTitle: string;
  overviewHeading: string;
  overviewHighlight: string;
  features: ServiceFeature[];
};

const HERO_IMAGES: Record<string, string> = {
  "freight-forwarding": "/images/services/freight-forwarding-hero.jpg",
  "supply-chain": "/images/services/supply-chain-hero.jpg",
  transportation: "/images/services/transportation-hero.jpg",
  "customs-compliance": "/images/services/customs-compliance-hero.jpg",
  "warehousing-distribution": "/images/services/warehousing-hero.jpg",
  "packaging-packing": "/images/services/packaging-hero.jpg",
  "import-export-consolidation": "/images/services/import-export-hero.jpg",
  "cash-on-delivery": "/images/services/cod-hero.jpg",
  "domestic-movement": "/images/services/domestic-hero.jpg",
  "secure-warehousing": "/images/services/secure-warehousing-hero.jpg",
  "b2b-service": "/images/services/b2b-hero.jpg",
  "door-to-door-delivery": "/images/services/door-to-door-hero.jpg",
};

const OVERVIEW_IMAGES: Record<string, string> = {
  "freight-forwarding": "/images/services/freight-forwarding-overview.jpg",
  "supply-chain": "/images/services/supply-chain-overview.jpg",
  transportation: "/images/services/transportation-overview.jpg",
  "customs-compliance": "/images/services/customs-compliance-overview.jpg",
  "warehousing-distribution": "/images/services/warehousing-overview.jpg",
  "packaging-packing": "/images/services/packaging-overview.jpg",
  "import-export-consolidation": "/images/services/import-export-overview.jpg",
  "cash-on-delivery": "/images/services/cod-overview.jpg",
  "domestic-movement": "/images/services/domestic-overview.jpg",
  "secure-warehousing": "/images/services/secure-warehousing-overview.jpg",
  "b2b-service": "/images/services/b2b-overview.jpg",
  "door-to-door-delivery": "/images/services/door-to-door-overview.jpg",
};

const STATS: Record<string, { value: string; label: string }> = {
  "freight-forwarding": { value: "150+", label: "Global Routes" },
  "supply-chain": { value: "99%", label: "On-Time Rate" },
  transportation: { value: "500+", label: "Fleet Vehicles" },
  "customs-compliance": { value: "100%", label: "Compliance Rate" },
  "warehousing-distribution": { value: "24/7", label: "Secure Storage" },
  "packaging-packing": { value: "100%", label: "Safe Delivery" },
  "import-export-consolidation": { value: "50+", label: "Trade Lanes" },
  "cash-on-delivery": { value: "98%", label: "Collection Rate" },
  "domestic-movement": { value: "Nation", label: "Wide Coverage" },
  "secure-warehousing": { value: "24/7", label: "Monitored Access" },
  "b2b-service": { value: "1000+", label: "Business Clients" },
  "door-to-door-delivery": { value: "Same", label: "Day Available" },
};

const SUBTITLES: Record<string, string> = {
  "freight-forwarding":
    "Streamline global shipping with expert freight forwarding — air, sea, and land solutions tailored to move your cargo across borders with confidence.",
  "supply-chain":
    "Optimize your supply chain with end-to-end visibility, control, and customized logistics solutions built for modern business operations.",
  transportation:
    "Reliable road, air, and sea transportation with GPS-enabled fleet tracking to deliver your goods safely across every terrain.",
  "customs-compliance":
    "Expert customs clearance and regulatory compliance services that keep your cross-border shipments moving without costly delays.",
  "warehousing-distribution":
    "Secure warehousing and efficient distribution networks designed to protect inventory and accelerate fulfillment.",
  "packaging-packing":
    "Professional packaging solutions using premium materials and proven techniques to safeguard goods in transit.",
  "import-export-consolidation":
    "Consolidated import and export services that reduce freight costs while maintaining speed, safety, and reliability.",
  "cash-on-delivery":
    "Secure cash-on-delivery collection and remittance services that give your customers flexibility and your business control.",
  "domestic-movement":
    "Nationwide domestic shipping and movement solutions with optimized routing and real-time shipment visibility.",
  "secure-warehousing":
    "High-security storage facilities with advanced monitoring systems to protect your most valuable inventory.",
  "b2b-service":
    "Tailored B2B logistics solutions that streamline operations, reduce costs, and strengthen supply chain collaboration.",
  "door-to-door-delivery":
    "Complete door-to-door delivery across regions — pickup, transit, and drop-off handled seamlessly from start to finish.",
};

function featureHeading(title: string): string {
  return `COMPREHENSIVE ${title.toUpperCase()} SOLUTIONS`;
}

function buildDetail(entry: GeneratedService): ServiceDetail {
  return {
    slug: entry.slug,
    title: entry.title,
    hero: {
      badge: entry.title,
      title: entry.heroTitle,
      subtitle: SUBTITLES[entry.slug] ?? entry.overviewHighlight,
      image: HERO_IMAGES[entry.slug] ?? "/images/hero-bg.png",
    },
    overview: {
      label: "Service Overview",
      heading: entry.overviewHeading,
      highlight: entry.overviewHighlight,
      secondary: `Partner with HPS Delivery & Logistics for dependable ${entry.title.toLowerCase()} services backed by experienced teams, modern technology, and a commitment to on-time delivery.`,
      image: OVERVIEW_IMAGES[entry.slug] ?? "/images/about-logistics.png",
      stat: STATS[entry.slug] ?? { value: "24/7", label: "Support Available" },
    },
    features: {
      label: "Why Choose HPS",
      heading: featureHeading(entry.title),
      items: entry.features,
    },
  };
}

export const SERVICE_DETAILS: ServiceDetail[] = (
  generated as GeneratedService[]
).map(buildDetail);

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}
