import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightLeft,
  Banknote,
  Building2,
  ChevronRight,
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
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { IconBox, getIconVariant } from "@/components/ui/IconBox";
import {
  SERVICES_INDEX_CATEGORIES,
} from "@/config/services-index";
import { getServiceDetail } from "@/config/service-details";
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

function ServiceCard({ slug, index }: { slug: string; index: number }) {
  const service = SERVICES.find((item) => item.slug === slug);
  const detail = getServiceDetail(slug);
  if (!service) return null;

  const Icon = SERVICE_ICONS[slug] ?? Ship;
  const image = detail?.overview.image ?? "/images/about-logistics.png";
  const description =
    detail?.hero.subtitle ?? service.description;

  return (
    <Link href={service.href} className="services-index-card group">
      <div className="services-index-card-media">
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="services-index-card-media-overlay" aria-hidden />
        <div className="services-index-card-icon">
          <IconBox icon={Icon} variant={getIconVariant(index)} size="md" />
        </div>
      </div>

      <div className="services-index-card-body">
        <h3 className="services-index-card-title">{service.title}</h3>
        <p className="services-index-card-desc">{description}</p>
        <span className="services-index-card-link">
          Learn More
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function ServicesIndexGridSection() {
  let cardIndex = 0;

  return (
    <InnerPageSection
      id="services-catalog"
      bgClassName="bg-background-alt"
      containerClassName="services-index-grid-section scroll-mt-24"
    >
      <div className="services-index-grid-intro">
        <span className="services-index-grid-badge">Full Service Catalog</span>
        <h2 className="services-index-grid-title">
          <span className="text-[var(--about-color-navy)]">
            END-TO-END{" "}
          </span>
          <span className="text-[var(--about-color-cyan)]">
            LOGISTICS
          </span>
        </h2>
        <p className="services-index-grid-lead">
          Browse our complete portfolio — each service is backed by experienced
          teams, modern tracking, and a commitment to secure, on-time delivery.
        </p>
      </div>

      <div className="services-index-categories">
        {SERVICES_INDEX_CATEGORIES.map((category, index) => (
          <div key={category.id} className="services-index-category">
            <div className="services-index-category-head">
              <div>
                <p className="services-index-category-index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="services-index-category-title">
                  {category.label}
                </h3>
                <p className="services-index-category-desc">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="services-index-cards">
              {category.slugs.map((slug) => {
                const index = cardIndex;
                cardIndex += 1;
                return <ServiceCard key={slug} slug={slug} index={index} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </InnerPageSection>
  );
}
