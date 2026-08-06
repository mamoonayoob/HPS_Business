export const PROCESS_HERO = {
  badge: "OPERATIONS & STANDARDS",
  titleLead: "OUR PROCESS &",
  titleAccent: "QUALITY",
  subtitle:
    "Ensuring that best practices are followed in moving products securely from one place to another, maintaining total quality assurance.",
  image: "/images/process/process-hero.jpg",
};

export const PROCESS_LIFECYCLE = {
  label: "THE LOGISTICS LIFE CYCLE",
  heading: "THE WELL-OILED WHEEL OF OUR SUPPLY CHAIN",
  steps: [
    {
      phase: "PHASE 1",
      title: "E-Commerce & Marketplaces",
      description:
        "With e-commerce and virtual marketplaces gaining popularity, the logistics industry has emerged as a critical connecting point between the seller and the buyer. In addition to its growing importance in the B2C segment, the logistics industry's traditional role in the B2B value chain continues to grow at a breakneck pace.",
      iconColor: "from-[#8b5cf6] to-[#7c3aed]",
      accentColor: "bg-[#8b5cf6]",
    },
    {
      phase: "PHASE 2",
      title: "The Supply Chain Cog",
      description:
        "The logistics operator is an important cog in the well-oiled wheel of any supply chain. It includes transportation of raw materials from various sources to the manufacturers' factories and finished goods to various warehouses. From here, goods reach different channel partners, outlets, and end customers safely.",
      iconColor: "from-[#39a6ef] to-[#00aeef]",
      accentColor: "bg-[#00aeef]",
    },
    {
      phase: "PHASE 3",
      title: "Quality Assurance",
      description:
        "Quality assurance ensures an organization's ability to meet the requirements of customers while complying with statutory and regulatory requirements. It facilitates improving customer satisfaction and identifies/addresses risks. Businesses implementing our quality management system demonstrate their ability to conform to specified standards.",
      iconColor: "from-[#ff6b65] to-[#ff3b31]",
      accentColor: "bg-[#ff3e41]",
    },
  ],
  flowchart: {
    badge: "PROCESS FLOWCHART",
    footer: "Coordinated Delivery System",
    nodes: [
      {
        step: "1",
        title: "E-COMMERCE CONNECT",
        subtitle: "Retail & B2B Integration",
        iconColor: "from-[#8b5cf6] to-[#7c3aed]",
        align: "center" as const,
      },
      {
        step: "2",
        title: "SUPPLY CHAIN FLOW",
        subtitle: "Logistics & Warehousing",
        iconColor: "from-[#39a6ef] to-[#00aeef]",
        align: "right" as const,
      },
      {
        step: "3",
        title: "COORDINATION & DELIVERY",
        subtitle: "Fleet & Distribution",
        iconColor: "from-[#1e3192] to-[#2e3193]",
        align: "left" as const,
      },
      {
        step: "4",
        title: "QUALITY ASSURANCE",
        subtitle: "Compliance & Standards",
        iconColor: "from-[#ff6b65] to-[#ff3b31]",
        align: "center" as const,
      },
    ],
  },
};

export const PROCESS_AWARDS = {
  badge: "MILESTONES",
  titleLead: "AWARDS &",
  titleAccent: "RECOGNITIONS",
  description:
    "These recognitions stand as a testament to our unwavering commitment to quality assurance, strategic supply chain management, and unparalleled customer satisfaction in the logistics sector.",
  images: [
    "/images/process/award-1.png",
    "/images/process/award-2.png",
  ],
};
