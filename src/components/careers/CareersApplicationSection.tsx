"use client";

import {
  Building2,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  RotateCcw,
  Send,
  User,
} from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { CAREERS_APPLICATION } from "@/config/careers";

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="careers-form-field">
      <span className="careers-form-label">{label}</span>
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
        className="careers-form-input pr-12"
      />
      <Icon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#94a3b8]" />
    </div>
  );
}

export function CareersApplicationSection() {
  const { badge, titleLead, titleAccent, subtitle, cities, departments } =
    CAREERS_APPLICATION;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1428] via-[#151b3d] to-[#060815]">
      <div
        className="pointer-events-none absolute -left-32 top-0 size-[500px] rounded-full bg-[#1e3192]/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 size-[400px] rounded-full bg-[#00aeef]/20 blur-[100px]"
        aria-hidden
      />

      <InnerPageSection containerClassName="careers-section relative">
        <div className="mx-auto max-w-[896px] text-center">
          <span className="careers-portal-badge inline-flex items-center gap-2 rounded-full border border-[rgba(255,62,65,0.35)] bg-[rgba(255,62,65,0.08)] px-4 py-2 text-[var(--about-color-red)]">
            <span className="size-2 rounded-full bg-[var(--about-color-red)]" />
            {badge}
          </span>

          <h2 className="careers-application-title mt-6">
            <span className="text-white">{titleLead} </span>
            <span className="text-[var(--about-color-cyan)]">
              {titleAccent}
            </span>
          </h2>

          <p className="careers-application-subtitle mx-auto mt-4 max-w-xl">
            {subtitle}
          </p>
        </div>

        <div className="careers-form-card relative mx-auto mt-10 max-w-[896px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <div
            className="h-2 bg-gradient-to-r from-[#ff3e41] via-[#8b5cf6] to-[#00aeef]"
            aria-hidden
          />

          <form
            className="flex flex-col gap-6 p-8 sm:p-12"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 md:grid-cols-2">
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

            <div className="grid gap-6 md:grid-cols-2">
              <FormField label="SELECT A CITY">
                <div className="relative">
                  <select
                    defaultValue=""
                    className="careers-form-input appearance-none pr-12 text-[#94a3b8]"
                  >
                    <option value="" disabled>
                      Choose your city
                    </option>
                    {cities.map((city) => (
                      <option key={city} value={city} className="text-dark-text">
                        {city}
                      </option>
                    ))}
                  </select>
                  <MapPin className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#94a3b8]" />
                </div>
              </FormField>
              <FormField label="DEPARTMENT / ROLE">
                <div className="relative">
                  <select
                    defaultValue=""
                    className="careers-form-input appearance-none pr-12 text-[#94a3b8]"
                  >
                    <option value="" disabled>
                      Select Area of Interest
                    </option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept} className="text-dark-text">
                        {dept}
                      </option>
                    ))}
                  </select>
                  <Building2 className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#94a3b8]" />
                </div>
              </FormField>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <FormField label="DISTRICT NAME">
                <InputWithIcon placeholder="e.g. Al Olaya" icon={MapPin} />
              </FormField>
              <FormField label="SUBJECT">
                <InputWithIcon placeholder="Job Application" icon={FileText} />
              </FormField>
            </div>

            <FormField label="MESSAGE / COVER LETTER">
              <textarea
                rows={6}
                placeholder="Tell us why you'd be a great fit for HPS..."
                className="careers-form-textarea"
              />
            </FormField>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:justify-end sm:gap-6">
              <button
                type="reset"
                className="careers-form-btn-secondary"
              >
                <RotateCcw className="size-4" />
                RESET FORM
              </button>
              <button type="submit" className="careers-form-btn-primary">
                <Send className="size-4" />
                SUBMIT APPLICATION
              </button>
            </div>
          </form>
        </div>
      </InnerPageSection>
    </section>
  );
}
