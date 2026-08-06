import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { QUICK_LINKS, FOOTER_SERVICES } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-grid">
          <div className="flex flex-col gap-6">
            <Image
              src="/images/logo.png"
              alt="HPS Delivery Logistics"
              width={291}
              height={180}
              className="h-auto w-[200px] object-contain"
            />
            <p className="site-footer-copy">
              High Performance Service Est. provides leading logistics and
              delivery solutions ensuring credibility and on-time promises
              globally.
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:+966920014641" className="site-footer-contact-link">
                <span className="flex size-8 items-center justify-center rounded border border-border-light bg-background-alt">
                  <Phone className="size-4 text-secondary-cyan" />
                </span>
                +966 9200 14641
              </a>
              <a
                href="mailto:info@hps.com.sa"
                className="site-footer-contact-link"
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

        <div className="site-footer-bottom">
          <p className="site-footer-legal">
            © 2026 HPS Logistics & Delivery. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="site-footer-legal hover:text-secondary-cyan">
              Privacy Policy
            </Link>
            <Link href="/terms" className="site-footer-legal hover:text-secondary-cyan">
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
        <h4 className="site-footer-column-title">{title}</h4>
      </div>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="site-footer-link">
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
        <h4 className="site-footer-column-title">Newsletter</h4>
      </div>
      <p className="site-footer-copy">
        Stay updated with the latest news and tech insights in logistics.
      </p>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="ENTER EMAIL ADDRESS"
          className="site-footer-input"
        />
        <button type="submit" className="site-footer-subscribe-btn">
          Subscribe Now
        </button>
      </form>
    </div>
  );
}
