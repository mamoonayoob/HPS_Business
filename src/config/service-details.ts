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
    "Seamless solutions ensuring your goods are transported efficiently across borders with precision, speed, and utmost care.",
  "supply-chain":
    "Streamlining operations from sourcing to delivery, ensuring efficiency, reliability, and optimal performance at every stage.",
  transportation:
    "Connecting businesses to their destinations with speed and efficiency. We ensure your goods reach safely, no matter the distance or terrain.",
  "customs-compliance":
    "Navigating complex global trade regulations with ease. We handle the complexities of customs so you can focus entirely on your business growth.",
  "warehousing-distribution":
    "State-of-the-art facilities and streamlined distribution networks to store, manage, and deliver your goods with precision and absolute security.",
  "packaging-packing":
    "Professional packaging and packing services to ensure your goods are protected during transit using high-quality materials and expert care.",
  "import-export-consolidation":
    "Simplifying global trade by combining multiple shipments into one. A cost-effective solution ensuring timely and efficient delivery worldwide.",
  "cash-on-delivery":
    "Providing your customers the flexibility to pay at their doorstep. Our secure system ensures smooth transactions and reliable settlements every time.",
  "domestic-movement":
    "Efficient domestic movement solutions ensuring timely deliveries across the country, providing a seamless experience for businesses and customers alike.",
  "secure-warehousing":
    "Ensuring the safety and integrity of your goods with advanced security systems, 24/7 surveillance, and controlled access.",
  "b2b-service":
    "Connecting businesses with efficient logistics solutions. We streamline operations, ensuring smooth supply chains and seamless collaboration.",
  "door-to-door-delivery":
    "Ensuring your goods are picked up and delivered seamlessly. We guarantee efficiency, speed, and reliability for every shipment.",
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
