"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatButton } from "@/components/layout/WhatsAppFloatButton";

const STANDALONE_PATHS = new Set(["/login"]);

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PATHS.has(pathname);

  if (isStandalone) {
    return (
      <main className="login-page-shell min-h-dvh flex-1 overflow-x-hidden">
        {children}
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
