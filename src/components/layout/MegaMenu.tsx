import Link from "next/link";
import {
  ArrowRightLeft,
  ArrowUpRight,
  Banknote,
  Building2,
  DoorOpen,
  FileCheck,
  Link2,
  MapPin,
  PackageOpen,
  Shield,
  Ship,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { IconBox } from "@/components/ui/IconBox";
import { SERVICES } from "@/config/services";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "freight-forwarding": Ship,
  "supply-chain": Link2,
  transportation: Truck,
  "customs-compliance": FileCheck,
  "warehousing-distribution": Warehouse,
  "packaging-packing": PackageOpen,
  "import-export-consolidation": ArrowRightLeft,
  "cash-on-delivery": Banknote,
  "domestic-movement": MapPin,
  "secure-warehousing": Shield,
  "b2b-service": Building2,
  "door-to-door-delivery": DoorOpen,
};

export function MegaMenuPanel() {
  return (
    <div className="site-header-mega-panel">
      <div className="site-header-mega-head">
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-secondary-cyan">
          Our Services
        </p>
        <Link
          href="/services"
          className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-primary-navy hover:text-secondary-cyan"
        >
          View All
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
      <div className="site-header-mega-grid">
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICONS[service.slug] ?? Ship;

          return (
            <Link
              key={service.slug}
              href={service.href}
              className="site-header-mega-link group"
            >
              <IconBox
                icon={Icon}
                variant="soft"
                size="sm"
                className="shrink-0"
              />
              <span className="min-w-0">
                <span className="site-header-mega-title">{service.title}</span>
                <span className="site-header-mega-desc">
                  {service.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
