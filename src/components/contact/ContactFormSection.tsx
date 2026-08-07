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
import { CONTACT_FORM } from "@/config/contact";
import { SERVICES } from "@/config/services";

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
    <div
      className="motion-card flex items-center gap-6 rounded-2xl border border-[#eef2f7] bg-white px-[25px] shadow-[0_8px_30px_rgba(46,49,147,0.08)]"
      style={{ height: "var(--contact-card-height)" }}
    >
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
        style={{
          width: "var(--contact-card-icon)",
          height: "var(--contact-card-icon)",
        }}
      >
        <Icon className="icon-box__glyph" strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <p className="contact-card-label">{label}</p>
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
    <label className="contact-form-field">
      <span className="contact-form-label">{label}</span>
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
        className="contact-form-input pr-12"
      />
      <Icon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#94a3b8]" />
    </div>
  );
}

export function ContactFormSection() {
  const { label, titleLead, titleAccent, phone, office, country, email } =
    CONTACT_FORM;

  return (
    <InnerPageSection bgClassName="bg-white" containerClassName="contact-section">
      <div className="contact-form-grid">
        <div className="min-w-0">
          <div
            className="flex items-center"
            style={{ gap: "var(--contact-stack-gap)" }}
          >
            <span className="contact-label-divider contact-label-divider--form" />
            <p className="contact-label text-[var(--about-color-navy)]">
              {label}
            </p>
          </div>

          <h2 className="contact-heading mt-4">
            <span className="text-[var(--about-color-text)]">{titleLead}</span>
            <br />
            <span className="text-[var(--about-color-cyan)]">{titleAccent}</span>
          </h2>

          <div className="contact-cards-stack">
            <ContactCard
              icon={Phone}
              label="PHONE"
              iconClassName="icon-box icon-box--lg icon-box--cyan"
            >
              <p className="contact-card-value">{phone}</p>
            </ContactCard>

            <ContactCard
              icon={MapPin}
              label="OFFICE"
              iconClassName="icon-box icon-box--lg icon-box--red"
            >
              <p className="contact-card-value">{office}</p>
              <p className="contact-card-sub">{country}</p>
            </ContactCard>

            <ContactCard
              icon={Mail}
              label="EMAIL"
              iconClassName="icon-box icon-box--lg icon-box--navy"
            >
              <p className="contact-card-value">{email}</p>
            </ContactCard>
          </div>
        </div>

        <div className="contact-form-panel min-w-0">
          <div className="contact-form-header">
            <h3 className="contact-form-title text-white">Send Us A Message</h3>
            <p className="contact-form-header-copy">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          <div className="contact-form-header-divider" aria-hidden />

          <form
            className="contact-form-body"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="contact-form-row-2">
              <FormField label="YOUR NAME *">
                <InputWithIcon placeholder="John Doe" icon={User} />
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
                  className="contact-form-input appearance-none pr-12 text-[#5c6686]"
                >
                  <option value="" disabled>
                    Choose a service...
                  </option>
                  {SERVICES.map((item) => (
                    <option
                      key={item.slug}
                      value={item.slug}
                      className="text-dark-text"
                    >
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
                placeholder="Write your message here..."
                className="contact-form-textarea"
              />
            </FormField>

            <div className="contact-form-actions">
              <button type="reset" className="contact-form-reset">
                <RotateCcw className="size-4" />
                RESET
              </button>
              <button type="submit" className="contact-form-btn-primary">
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
