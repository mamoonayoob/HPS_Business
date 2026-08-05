import {
  Banknote,
  Box,
  Clock,
  DollarSign,
  Globe,
  Leaf,
  Link2,
  Lock,
  MapPin,
  Package,
  Route,
  Shield,
  Ship,
  Truck,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import type { ServiceDetail } from "@/config/service-details";

type Props = {
  service: ServiceDetail;
};

const ICONS: Record<string, LucideIcon> = {
  "COST-EFFECTIVE": DollarSign,
  "VAST GLOBAL NETWORK": Globe,
  "CARGO SAFETY": Shield,
  "TRUSTED PARTNER": Users,
  "FOR ALL BUSINESSES": Package,
  "END-TO-END TRACKING": Route,
  "ADVANCED TECHNOLOGY": Link2,
  "COST OPTIMIZATION": DollarSign,
  "INTEGRATED SOLUTIONS": Link2,
  "SUSTAINABILITY FOCUS": Leaf,
  "RISK MITIGATION": Shield,
  "INNOVATIVE APPROACHES": Globe,
  "FLEET MANAGEMENT": Truck,
  "VERSATILE HANDLING": Box,
  "UNCOMPROMISED SAFETY": Shield,
  "REAL-TIME TRACKING": Clock,
  "GLOBAL EXPERTISE": Globe,
  "CUSTOMER FIRST": Users,
  "END-TO-END SUPPORT": Package,
  "REGULATORY EXPERTISE": Shield,
  "EFFICIENT CLEARANCE": Clock,
  "TAILORED SOLUTIONS": Package,
  "FULL TRANSPARENCY": Globe,
  "GLOBAL PARTNER": Globe,
  "REAL-TIME VISIBILITY": Globe,
  "FLEXIBLE SCALABILITY": Warehouse,
  "ROBUST SECURITY": Lock,
  "STRATEGIC LOCATIONS": MapPin,
  "COMPREHENSIVE HANDLING": Package,
  "ECO-FRIENDLY OPTIONS": Leaf,
  "ADVANCED TECHNIQUES": Box,
  "COMPLIANCE & LABELING": Shield,
  "INDUSTRY SPECIFIC": Package,
  "PRECISION & CARE": Shield,
  "SUPPLY CHAIN OPTIMIZATION": Link2,
  "SEAMLESS GLOBAL NETWORK": Globe,
  "REDUCED TRANSIT TIMES": Clock,
  "TRANSPARENT TRACKING": Route,
  "UNMATCHED SAFETY": Shield,
  "RELIABLE OPERATIONS": Clock,
  "RETAIL & E-COMMERCE": Banknote,
  "TECH INTEGRATION": Link2,
  "STRICT PROTOCOLS": Lock,
  "QUICK SETTLEMENTS": DollarSign,
  "EXCEPTIONAL VALUE": Users,
  "ON-TIME DELIVERY": Clock,
  "DOOR-TO-DOOR": MapPin,
  "CUSTOMIZED SOLUTIONS": Package,
  "SAFETY FIRST": Shield,
  "CLIMATE-CONTROLLED": Warehouse,
  "STRICT STANDARDS": Lock,
  "FLEXIBLE SOLUTIONS": Warehouse,
  "END-TO-END SOLUTIONS": Link2,
  "DIVERSE INDUSTRIES": Package,
  "COST-EFFICIENCY": DollarSign,
  "STRONG PARTNERSHIPS": Users,
  "CUSTOMIZABLE OPTIONS": Package,
  "TIMELY DELIVERIES": Clock,
  "SAFETY & SECURITY": Shield,
  "SCALABLE SOLUTIONS": Warehouse,
  "TRUSTED EXPERTISE": Ship,
};

function getIcon(title: string): LucideIcon {
  return ICONS[title] ?? Package;
}

export function ServiceFeaturesSection({ service }: Props) {
  const { features } = service;

  return (
    <InnerPageSection
      bgClassName="bg-[#f4f7fb]"
      containerClassName="service-section"
    >
      <div className="service-stack mx-auto mb-14 max-w-3xl items-center text-center">
        <span className="service-badge inline-block rounded-full border border-[rgba(46,49,147,0.12)] bg-white px-4 py-1.5 text-[var(--service-color-navy)]">
          {features.label}
        </span>
        <h2 className="service-heading text-[var(--service-color-text)]">
          {features.heading}
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.items.map((feature) => {
          const Icon = getIcon(feature.title);
          return (
            <article
              key={feature.title}
              className="relative overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white p-8 shadow-[0_1px_1px_rgba(46,49,147,0.05)]"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br from-[rgba(0,174,239,0.15)] to-transparent"
                aria-hidden
              />

              <div className="relative">
                <div className="mb-5 flex size-16 items-center justify-center rounded-xl bg-[#f4f7fb] shadow-[0_4px_12px_rgba(46,49,147,0.08)]">
                  <Icon
                    className="size-8 text-[var(--service-color-navy)]"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="service-card-title mb-3 text-[var(--service-color-text)]">
                  {feature.title}
                </h3>
                <p className="service-body-sm">{feature.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </InnerPageSection>
  );
}
