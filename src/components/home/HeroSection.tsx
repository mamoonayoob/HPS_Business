"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Package } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const router = useRouter();
  const [awb, setAwb] = useState("");

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    if (awb.trim()) {
      router.push(`/track?awb=${encodeURIComponent(awb.trim())}`);
    }
  }

  return (
    <section className="home-hero">
      <Image
        src="/images/hero-bg.png"
        alt="HPS logistics delivery"
        fill
        priority
        className="object-cover"
      />
      <div className="home-hero-overlay" aria-hidden />

      <Container className="home-hero-inner">
        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <span className="home-hero-badge">
              <span className="home-hero-badge-dot" aria-hidden />
              <span className="home-hero-badge-text">
                Why Choose HPS Delivery Logistics
              </span>
            </span>

            <h1 className="home-hero-title">
              GLOBAL
              <br />
              <span className="text-secondary-cyan">COVERAGE</span> &amp;
              <br />
              ON-TIME DELIVERY
            </h1>

            <p className="home-hero-lead">
              High Performance Service Est. offers reliable delivery solutions
              with skilled couriers ensuring global coverage. Your trusted
              partner for all transportation needs.
            </p>

            <div className="pt-4">
              <a href="/about" className="home-hero-cta">
                Discover More
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="home-hero-track-card">
            <div className="home-hero-track-accent" aria-hidden />

            <div className="home-hero-track-head">
              <div className="home-hero-track-icon">
                <Package className="size-7 text-secondary-cyan" />
              </div>
              <div>
                <h3 className="home-hero-track-title">Track Shipment</h3>
                <p className="home-hero-track-sub">Real-time GPS Monitoring</p>
              </div>
            </div>

            <form onSubmit={handleTrack} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="awb" className="home-hero-track-label">
                  Enter AWB Number
                </label>
                <div className="relative">
                  <input
                    id="awb"
                    type="text"
                    placeholder="e.g. HPS-123456789"
                    value={awb}
                    onChange={(e) => setAwb(e.target.value)}
                    className="home-hero-track-input pr-12"
                  />
                  <Search className="pointer-events-none absolute top-1/2 right-4 size-6 -translate-y-1/2 text-muted-text" />
                </div>
              </div>
              <button type="submit" className="home-hero-track-btn">
                <Search className="size-5" />
                Locate Package
              </button>
            </form>

            <div className="home-hero-track-footer">
              <span>Secure Connection</span>
              <span className="home-hero-track-status">
                <span className="home-hero-track-status-dot" aria-hidden />
                System Online
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
