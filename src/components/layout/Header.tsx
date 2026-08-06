"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { CREATE_SHIPMENT_HREF, MAIN_NAV } from "@/config/navigation";
import { SERVICES } from "@/config/services";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { MegaMenuPanel } from "./MegaMenu";

function isNavActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const isCreateShipmentActive = pathname.startsWith("/shipment/create");

  function toggleMobileMenu() {
    setMobileOpen((open) => {
      if (open) {
        setMobileServicesOpen(false);
      }
      return !open;
    });
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <header
      className="site-header"
      onMouseLeave={() => setServicesOpen(false)}
    >
      <Container className="site-header-bar">
        <Link href="/" className="site-header-logo">
          <Image
            src="/images/logo.png"
            alt="HPS Delivery Logistics"
            width={82}
            height={51}
            priority
            className="h-[51px] w-[82px] object-contain object-left"
          />
        </Link>

        <nav className="site-header-nav" aria-label="Main navigation">
          {MAIN_NAV.map((item) => {
            const isActive = isNavActive(pathname, item.href);

            if (item.megaMenu) {
              return (
                <div
                  key={item.label}
                  className="site-header-nav-item"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  <button
                    type="button"
                    className={cn(
                      "site-nav-link site-header-nav-link flex items-center gap-1 transition-colors",
                      isActive || servicesOpen
                        ? "text-[var(--nav-link-active)]"
                        : "text-[var(--nav-link-color)] hover:text-[var(--nav-link-active)]",
                    )}
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-2.5 shrink-0 transition-transform",
                        servicesOpen && "rotate-180",
                      )}
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "site-nav-link site-header-nav-link transition-colors",
                  isActive
                    ? "text-[var(--nav-link-active)]"
                    : "text-[var(--nav-link-color)] hover:text-[var(--nav-link-active)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header-right">
          <div className="site-header-meta">
            <Link
              href="/login"
              className="site-header-action text-[var(--nav-link-color)] transition-colors hover:text-[var(--nav-link-active)]"
            >
              Login
            </Link>
            <span className="site-header-meta-divider" aria-hidden />
            <button
              type="button"
              className="site-header-action text-[var(--nav-link-color)]"
              aria-label="Switch to Arabic"
            >
              العربية
            </button>
          </div>

          <div className="site-header-actions">
            <Link
              href={CREATE_SHIPMENT_HREF}
              className={cn(
                "site-header-cta site-header-cta--navy",
                isCreateShipmentActive && "site-header-cta--navy-active",
              )}
            >
              Create Shipment
            </Link>
            <Link href="/contact" className="site-header-cta site-header-cta--quote">
              Get Quote
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="site-header-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {servicesOpen && (
        <div
          className="site-header-mega hidden border-t border-gray-100 bg-white py-4 shadow-[0_20px_50px_rgba(46,49,147,0.12)] xl:block"
          onMouseEnter={() => setServicesOpen(true)}
        >
          <Container>
            <MegaMenuPanel />
          </Container>
        </div>
      )}

      {mobileOpen && (
        <div className="site-header-mobile border-t border-gray-100 bg-white py-4 xl:hidden">
          <Container>
            <nav className="flex flex-col gap-2">
              {MAIN_NAV.map((item) => {
                const isActive = isNavActive(pathname, item.href);

                if (item.megaMenu) {
                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        className={cn(
                          "site-nav-link flex w-full items-center justify-between py-2 text-left transition-colors",
                          isActive || mobileServicesOpen
                            ? "text-[var(--nav-link-active)]"
                            : "text-[var(--nav-link-color)]",
                        )}
                        onClick={() => setMobileServicesOpen((open) => !open)}
                        aria-expanded={mobileServicesOpen}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-4 shrink-0 transition-transform",
                            mobileServicesOpen && "rotate-180",
                          )}
                          strokeWidth={2.5}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="ml-4 mt-1 flex flex-col gap-1.5 border-l-2 border-[var(--nav-link-active)] pl-4">
                          <Link
                            href={item.href}
                            className="text-[13px] leading-[19.5px] font-bold text-[var(--nav-link-active)] hover:opacity-80"
                            onClick={closeMobileMenu}
                          >
                            All Services
                          </Link>
                          {SERVICES.map((service) => (
                            <Link
                              key={service.slug}
                              href={service.href}
                              className="text-[13px] leading-[19.5px] text-muted-text hover:text-[var(--nav-link-active)]"
                              onClick={closeMobileMenu}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "site-nav-link block py-2",
                      isActive
                        ? "text-[var(--nav-link-active)]"
                        : "text-[var(--nav-link-color)]",
                    )}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/login"
                className="site-header-action block py-2 text-[var(--nav-link-color)]"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
              <div className="mt-3 flex flex-col gap-2 border-t border-[#f3f4f6] pt-3">
                <Link
                  href={CREATE_SHIPMENT_HREF}
                  className={cn(
                    "site-header-cta site-header-cta--navy text-center",
                    isCreateShipmentActive && "site-header-cta--navy-active",
                  )}
                  onClick={closeMobileMenu}
                >
                  Create Shipment
                </Link>
                <Link
                  href="/contact"
                  className="site-header-cta site-header-cta--quote text-center"
                  onClick={closeMobileMenu}
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
