"use client";

import { BadgeCheck } from "lucide-react";
import { SHIPMENT_STEP1 } from "@/config/shipment-create";
import { ShipmentLabeledField } from "./ShipmentFormFields";
import type { ShipmentStep1 } from "@/lib/api/shipment";
import { cn } from "@/lib/utils";

type Props = {
  data: ShipmentStep1;
  loading: boolean;
  otpSent: boolean;
  otpVerified: boolean;
  errors: Partial<Record<keyof ShipmentStep1 | "otp", string>>;
  onChange: (field: keyof ShipmentStep1, value: string) => void;
  onSendOtp: () => void;
  onVerifyOtp: () => void;
  onNext: () => void;
};

export function ShipmentCreateStep1({
  data,
  loading,
  otpSent,
  otpVerified,
  errors,
  onChange,
  onSendOtp,
  onVerifyOtp,
  onNext,
}: Props) {
  const { cardTitle, sectionTitle, fields, submit } = SHIPMENT_STEP1;

  return (
    <div className="shipment-form-card">
      <h2 className="shipment-form-card-title">{cardTitle}</h2>
      <h3 className="shipment-form-section-title">{sectionTitle}</h3>

      <div className="shipment-form-body">
        <div className="shipment-form-row shipment-form-row--3">
          <ShipmentLabeledField
            label={fields.contactPerson.label}
            error={errors.contactPerson}
          >
            <input
              id="contactPerson"
              type="text"
              placeholder={fields.contactPerson.placeholder}
              value={data.contactPerson}
              onChange={(e) => onChange("contactPerson", e.target.value)}
              aria-invalid={Boolean(errors.contactPerson)}
              className={cn(
                "shipment-input",
                errors.contactPerson && "shipment-input--error",
              )}
            />
          </ShipmentLabeledField>

          <ShipmentLabeledField
            label={fields.phoneNumber.label}
            error={errors.phoneNumber}
          >
            <input
              id="phoneNumber"
              type="tel"
              placeholder={fields.phoneNumber.placeholder}
              value={data.phoneNumber}
              onChange={(e) => onChange("phoneNumber", e.target.value)}
              aria-invalid={Boolean(errors.phoneNumber)}
              className={cn(
                "shipment-input",
                errors.phoneNumber && "shipment-input--error",
              )}
            />
          </ShipmentLabeledField>

          <ShipmentLabeledField hideLabel>
            <input
              id="alternatePhone"
              type="tel"
              placeholder={fields.alternatePhone.placeholder}
              value={data.alternatePhone ?? ""}
              onChange={(e) => onChange("alternatePhone", e.target.value)}
              className="shipment-input"
            />
          </ShipmentLabeledField>
        </div>

        <div className="shipment-form-row shipment-form-row--otp">
          <ShipmentLabeledField label={fields.email.label} error={errors.email}>
            <div className="shipment-email-group">
              <input
                id="email"
                type="email"
                placeholder={fields.email.placeholder}
                value={data.email}
                onChange={(e) => onChange("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                className={cn(
                  "shipment-email-input",
                  errors.email && "shipment-input--error",
                )}
              />
              <button
                type="button"
                onClick={onSendOtp}
                disabled={loading || !data.email}
                className="shipment-otp-send"
              >
                {fields.email.sendOtp}
              </button>
            </div>
          </ShipmentLabeledField>

          <ShipmentLabeledField hideLabel error={errors.otp}>
            <input
              id="otp"
              type="text"
              placeholder={fields.otp.placeholder}
              value={data.otp ?? ""}
              onChange={(e) => onChange("otp", e.target.value)}
              aria-invalid={Boolean(errors.otp)}
              className={cn(
                "shipment-input",
                errors.otp && "shipment-input--error",
              )}
              disabled={!otpSent}
            />
          </ShipmentLabeledField>

          <div className="shipment-verify-wrap">
            <button
              type="button"
              onClick={onVerifyOtp}
              disabled={loading || !otpSent || !data.otp}
              className="shipment-verify-btn"
            >
              <BadgeCheck className="size-4" strokeWidth={2} />
              {fields.otp.verify}
            </button>
            {otpVerified && (
              <span className="shipment-verified">Verified</span>
            )}
          </div>
        </div>

        <div className="shipment-form-actions">
          <button
            type="button"
            onClick={onNext}
            disabled={loading}
            className="shipment-submit-btn"
          >
            {submit}
          </button>
        </div>
      </div>
    </div>
  );
}
