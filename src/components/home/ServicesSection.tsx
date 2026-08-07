import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconBox, getIconVariant } from "@/components/ui/IconBox";
import { HOME_SERVICES } from "@/config/services";
import {
  Ship,
  Link2,
  Truck,
  FileCheck,
  Warehouse,
  PackageOpen,
  ArrowRightLeft,
  Banknote,
} from "lucide-react";

const icons = [
  Ship,
  Link2,
  Truck,
  FileCheck,
  Warehouse,
  PackageOpen,
  ArrowRightLeft,
  Banknote,
];

export function ServicesSection() {
  return (
    <section className="home-section home-section--alt">
      <Container>
        <div className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center">
          <span className="home-section-badge-pill">Our Services</span>
          <h2 className="home-section-heading mt-4">
            EXPLORE OUR SECURE
            <br />
            <span className="text-secondary-cyan">SERVICES</span>
          </h2>
          <p className="home-section-lead mt-4">
            Comprehensive logistics solutions tailored to meet the demands of
            global trade and domestic movement.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_SERVICES.map((service, i) => {
            const Icon = icons[i] ?? Ship;
            return (
              <article key={service.slug} className="home-service-card">
                <IconBox
                  icon={Icon}
                  variant={getIconVariant(i)}
                  size="xl"
                  className="mb-6"
                />
                <h3 className="home-section-card-title">{service.title}</h3>
                <p className="mb-6 mt-3 flex-1 home-section-card-body">
                  {service.description}
                </p>
                <Link href={service.href} className="home-service-link">
                  Read More
                  <ChevronRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
