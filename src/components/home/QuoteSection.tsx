"use client";

import { Globe, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FormInput } from "@/components/ui/TextField";
import { IconBox } from "@/components/ui/IconBox";

export function QuoteSection() {
  return (
    <section className="home-section bg-white">
      <Container>
        <ScrollReveal className="home-quote-grid">
          <div className="home-quote-feature">
            <p className="home-section-label text-secondary-cyan">
              Our Features
            </p>
            <h2 className="home-section-heading home-section-heading--light mt-2">
              TRUSTED LOGISTICS
              <br />
              COMPANY SINCE 2010
            </h2>

            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex gap-3">
                <IconBox icon={Globe} variant="on-dark" size="md" />
                <div className="min-w-0">
                  <p className="text-sm font-black text-white">
                    Worldwide Service
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/70">
                    Seamless worldwide shipping services with reliability you
                    trust.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <IconBox icon={Clock} variant="on-dark" size="md" />
                <div className="min-w-0">
                  <p className="text-sm font-black text-white">
                    On Time Delivery
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/70">
                    Count on us for fast, reliable, and on-time delivery every
                    time.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <form
            className="home-quote-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="home-section-label text-action-red">Get a Quote</p>
            <h2 className="home-section-heading mt-1.5">
              REQUEST A FREE QUOTE!
            </h2>

            <div className="home-quote-form-fields">
              <div className="home-quote-form-row">
                <FormInput id="quote-name" placeholder="Your Name" />
                <FormInput
                  id="quote-email"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="home-quote-form-row">
                <FormInput id="quote-phone" placeholder="Phone Number" />
                <FormInput
                  id="quote-freight"
                  placeholder="Select A Freight"
                  as="select"
                  options={[
                    "Freight Forwarding",
                    "Supply Chain",
                    "Transportation",
                    "Customs & Compliance",
                  ]}
                />
              </div>
              <FormInput
                id="quote-message"
                placeholder="Special Request / Message"
                as="textarea"
              />
              <button type="submit" className="home-quote-submit">
                Submit Request
              </button>
            </div>
          </form>
        </ScrollReveal>
      </Container>
    </section>
  );
}
