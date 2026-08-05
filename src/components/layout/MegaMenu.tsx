import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/config/services";

export function MegaMenuPanel() {
  return (
    <div className="rounded-2xl border border-border-light bg-white p-6 shadow-[0_20px_50px_rgba(46,49,147,0.12)]">
      <div className="mb-4 flex items-center justify-between border-b border-border-light pb-4">
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
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={service.href}
            className="group rounded-xl p-3 transition-colors hover:bg-background-alt"
          >
            <p className="text-sm font-black uppercase tracking-wide text-dark-text group-hover:text-primary-navy">
              {service.title}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-text">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
