import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border-light bg-background-alt">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <Image
          src="/images/about/about-hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover object-right opacity-10 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f7fb] from-30% via-white/90 via-55% to-transparent" />
      </div>

      <Container className="about-section relative">
        <div className="about-stack max-w-[672px]">
          <span className="about-badge inline-block w-fit rounded border border-[rgba(0,174,239,0.2)] bg-[rgba(0,174,239,0.1)] px-3 py-1.5 text-[var(--about-color-cyan)]">
            Discover HPS
          </span>

          <h1 className="about-hero-title">
            ABOUT <span className="text-[var(--about-color-navy)]">OUR</span>
            <br />
            <span className="text-[var(--about-color-navy)]">COMPANY</span>
          </h1>

          <p className="about-hero-lead max-w-xl">
            Delivering excellence, speed, and reliability. We represent our
            clients in the best possible way to ensure credibility in every
            delivery promise.
          </p>
        </div>
      </Container>
    </section>
  );
}
