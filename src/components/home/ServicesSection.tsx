import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
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
    <section className="bg-background-alt py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary-navy/20 bg-white px-4 py-1 text-base font-bold uppercase tracking-[0.1em] text-primary-navy shadow-sm">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-black text-dark-text sm:text-[3rem] sm:leading-tight">
            EXPLORE OUR SECURE
            <br />
            <span className="text-secondary-cyan">SERVICES</span>
          </h2>
          <p className="mt-4 text-lg leading-7 text-muted-text">
            Comprehensive logistics solutions tailored to meet the demands of
            global trade and domestic movement.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_SERVICES.map((service, i) => {
            const Icon = icons[i] ?? Ship;
            return (
              <article
                key={service.slug}
                className="flex flex-col rounded-2xl rounded-tr-[3rem] border border-gray-100 bg-white p-8 shadow-[0_10px_30px_rgba(46,49,147,0.05)]"
              >
                <div className="mb-6 flex size-16 items-center justify-center rounded-xl border border-gray-100 bg-background-alt shadow-sm">
                  <Icon className="size-8 text-primary-navy" />
                </div>
                <h3 className="mb-3 text-xl font-black text-dark-text">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-[22px] text-muted-text">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-secondary-cyan hover:text-primary-navy"
                >
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
