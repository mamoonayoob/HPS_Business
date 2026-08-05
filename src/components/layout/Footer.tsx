import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { QUICK_LINKS, FOOTER_SERVICES } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border-light bg-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo.png"
              alt="HPS Delivery Logistics"
              width={291}
              height={180}
              className="h-auto w-[200px] object-contain"
            />
            <p className="text-sm leading-relaxed text-muted-text">
              High Performance Service Est. provides leading logistics and
              delivery solutions ensuring credibility and on-time promises
              globally.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+966920014641"
                className="flex items-center gap-3 text-base font-bold text-dark-text"
              >
                <span className="flex size-8 items-center justify-center rounded border border-border-light bg-background-alt">
                  <Phone className="size-4 text-secondary-cyan" />
                </span>
                +966 9200 14641
              </a>
              <a
                href="mailto:info@hps.com.sa"
                className="flex items-center gap-3 text-base font-bold text-dark-text"
              >
                <span className="flex size-8 items-center justify-center rounded border border-border-light bg-background-alt">
                  <Mail className="size-4 text-secondary-cyan" />
                </span>
                info@hps.com.sa
              </a>
            </div>
          </div>

          <FooterColumn title="QUICK LINKS" accent="red" links={QUICK_LINKS} />
          <FooterColumn
            title="SERVICES"
            accent="cyan"
            links={FOOTER_SERVICES}
          />
          <NewsletterColumn />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-light pt-8 sm:flex-row">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted-text">
            © 2026 HPS Logistics & Delivery. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs font-bold uppercase tracking-[0.1em] text-muted-text hover:text-secondary-cyan"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-bold uppercase tracking-[0.1em] text-muted-text hover:text-secondary-cyan"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  accent,
  links,
}: {
  title: string;
  accent: "red" | "cyan";
  links: { label: string; href: string }[];
}) {
  const borderColor =
    accent === "red" ? "border-action-red" : "border-secondary-cyan";

  return (
    <div className="flex flex-col gap-8">
      <div className={`border-l-4 pl-4 ${borderColor}`}>
        <h4 className="text-lg font-black uppercase tracking-[0.1em] text-dark-text">
          {title}
        </h4>
      </div>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-bold uppercase tracking-wide text-muted-text transition-colors hover:text-secondary-cyan"
            >
              › {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterColumn() {
  return (
    <div className="flex flex-col gap-6">
      <div className="border-l-4 border-primary-navy pl-4">
        <h4 className="text-lg font-black uppercase tracking-[0.1em] text-dark-text">
          Newsletter
        </h4>
      </div>
      <p className="text-sm text-muted-text">
        Stay updated with the latest news and tech insights in logistics.
      </p>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="ENTER EMAIL ADDRESS"
          className="rounded border border-gray-300 bg-[#f8fafc] px-3 py-3.5 text-sm uppercase tracking-wide placeholder:text-gray-400 outline-none focus:border-secondary-cyan"
        />
        <button
          type="submit"
          className="rounded bg-primary-navy px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-white shadow-md hover:bg-[#172574]"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
