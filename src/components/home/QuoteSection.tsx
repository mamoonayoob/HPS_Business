"use client";

import { Globe, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FormInput } from "@/components/ui/TextField";

export function QuoteSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col justify-center rounded-3xl border border-gray-100 bg-primary-navy p-10 lg:p-14">
            <p className="text-base font-bold uppercase tracking-[0.1em] text-secondary-cyan">
              Our Features
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white lg:text-4xl">
              TRUSTED LOGISTICS
              <br />
              COMPANY SINCE 2010
            </h2>

            <ul className="mt-8 flex flex-col gap-8">
              <li className="flex gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10">
                  <Globe className="size-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-black text-white">
                    Worldwide Service
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Seamless worldwide shipping services with reliability you
                    trust.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10">
                  <Clock className="size-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-black text-white">
                    On Time Delivery
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Count on us for fast, reliable, and on-time delivery every
                    time.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <form
            className="rounded-3xl border border-border-light bg-white p-10 shadow-sm lg:p-14"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="text-base font-bold uppercase tracking-[0.1em] text-action-red">
              Get a Quote
            </p>
            <h2 className="mt-2 text-[1.875rem] font-black leading-9 text-dark-text">
              REQUEST A FREE QUOTE!
            </h2>

            <div className="mt-6 flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <FormInput id="quote-name" placeholder="Your Name" />
                <FormInput
                  id="quote-email"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
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
              <button
                type="submit"
                className="h-14 w-full rounded-lg bg-action-red text-lg font-black uppercase tracking-[0.1em] text-white shadow-md transition-colors hover:bg-[#e6352c]"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
