"use client";

import {
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Send,
  User,
} from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { SERVICES } from "@/config/services";
import type { ServiceDetail } from "@/config/service-details";

type Props = {
  service: ServiceDetail;
};

function ContactCard({
  icon: Icon,
  label,
  iconClassName,
  children,
}: {
  icon: typeof Phone;
  label: string;
  iconClassName: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-[#eef2f7] bg-white p-6 shadow-[0_8px_30px_rgba(46,49,147,0.08)]">
      <div
        className={`flex size-14 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
      >
        <Icon className="size-7 text-white" strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <p className="service-contact-label text-[var(--service-color-navy)]">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="service-form-field">
      <span className="service-form-label text-[var(--service-color-navy)]">
        {label}
      </span>
      {children}
    </label>
  );
}

function InputWithIcon({
  type = "text",
  placeholder,
  icon: Icon,
}: {
  type?: string;
  placeholder: string;
  icon: typeof User;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="service-form-input pr-12"
      />
      <Icon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#94a3b8]" />
    </div>
  );
}

export function ServiceContactSection(_props: Props) {
  return (
    <InnerPageSection bgClassName="bg-white" containerClassName="service-section">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,560px)_minmax(0,1fr)] xl:gap-16">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-10 shrink-0 bg-[var(--service-color-cyan)]" />
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--service-color-navy)]">
              Reach Out
            </p>
          </div>

          <h2 className="service-contact-heading mt-4">
            <span className="text-[var(--service-color-text)]">
              LET&apos;S CONNECT
            </span>
            <br />
            <span className="text-[var(--service-color-cyan)]">
              FOR ANY QUERY
            </span>
          </h2>

          <div className="mt-8 flex flex-col gap-5">
            <ContactCard
              icon={Phone}
              label="PHONE"
              iconClassName="bg-gradient-to-br from-[#39a6ef] to-[#00bcef]"
            >
              <p className="service-contact-value">+966 9200 14641</p>
            </ContactCard>

            <ContactCard
              icon={MapPin}
              label="OFFICE"
              iconClassName="bg-gradient-to-br from-[#ff6b65] to-[#ff3b31]"
            >
              <p className="service-contact-value">Jeddah-Riyadh</p>
              <p className="service-body-sm mt-0.5 text-[var(--service-color-muted)]">
                Kingdom of Saudi Arabia
              </p>
            </ContactCard>

            <ContactCard
              icon={Mail}
              label="EMAIL"
              iconClassName="bg-gradient-to-br from-[#1e3192] to-[#2a4bb5]"
            >
              <p className="service-contact-value">info@hps.com.sa</p>
            </ContactCard>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(46,49,147,0.12)]">
          <div className="bg-[#151b3d] px-8 py-8">
            <h3 className="text-2xl font-black leading-8 text-white">
              Send Us A Message
            </h3>
            <p className="mt-2 text-sm leading-5 text-white/70">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          <div className="h-1 bg-[var(--service-color-cyan)]" aria-hidden />

          <form
            className="flex flex-col gap-6 p-8 sm:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <FormField label="YOUR NAME *">
                <InputWithIcon
                  placeholder="John Doe"
                  icon={User}
                />
              </FormField>
              <FormField label="YOUR EMAIL *">
                <InputWithIcon
                  type="email"
                  placeholder="john@example.com"
                  icon={Mail}
                />
              </FormField>
            </div>

            <FormField label="SELECT A SERVICE *">
              <div className="relative">
                <select
                  defaultValue=""
                  className="service-form-input appearance-none pr-12 text-[#94a3b8]"
                >
                  <option value="" disabled>
                    Choose a service...
                  </option>
                  {SERVICES.map((item) => (
                    <option key={item.slug} value={item.slug} className="text-dark-text">
                      {item.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#94a3b8]" />
              </div>
            </FormField>

            <FormField label="SUBJECT">
              <InputWithIcon
                placeholder="How can we help you?"
                icon={FileText}
              />
            </FormField>

            <FormField label="MESSAGE">
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="service-form-textarea"
              />
            </FormField>

            <div className="flex flex-wrap items-center justify-end gap-6 pt-2">
              <button
                type="reset"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--service-color-navy)] transition-opacity hover:opacity-70"
              >
                <RotateCcw className="size-4" />
                RESET
              </button>
              <button type="submit" className="service-form-btn-primary">
                <Send className="size-4" />
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </InnerPageSection>
  );
}
