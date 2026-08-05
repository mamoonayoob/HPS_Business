import { SERVICES } from "./services";

export type NavItem = {
  label: string;
  href: string;
  megaMenu?: boolean;
};

export const MAIN_NAV: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services", megaMenu: true },
  { label: "PROCESS", href: "/process" },
  { label: "CAREERS", href: "/careers" },
  { label: "RESOURCES", href: "/resources" },
  { label: "CONTACT US", href: "/contact" },
];

export const CREATE_SHIPMENT_HREF = "/shipment/create";

export const QUICK_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "PROCESS", href: "/process" },
  { label: "CAREERS", href: "/careers" },
  { label: "RESOURCES", href: "/resources" },
];

export const FOOTER_SERVICES = SERVICES.slice(0, 4).map((s) => ({
  label: s.title.toUpperCase(),
  href: s.href,
}));
