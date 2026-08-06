import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "HPS Logistics & Delivery",
  description:
    "High Performance Service — global logistics and delivery solutions with on-time promises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
