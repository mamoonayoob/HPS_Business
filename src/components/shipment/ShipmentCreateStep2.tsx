"use client";

import { ChevronDown } from "lucide-react";
import {
  ShipmentPlaceholderInput,
} from "./ShipmentFormFields";
import { SHIPMENT_CITIES, SHIPMENT_STEP2 } from "@/config/shipment-create";
import type { ShipmentStep2 } from "@/lib/api/shipment";
import { cn } from "@/lib/utils";

type Props = {
  data: ShipmentStep2;
  loading: boolean;
  errors: Partial<Record<keyof ShipmentStep2, string>>;
  onChange: (field: keyof ShipmentStep2, value: string) => void;
  onNext: () => void;
};

export function ShipmentCreateStep2({
  data,
  loading,
  errors,
  onChange,
  onNext,
}: Props) {
  const { cardTitle, deliverySection, addressSection, fields, submit } =
    SHIPMENT_STEP2;

  return (
    <div className="shipment-form-card">
      <h2 className="shipment-form-card-title">{cardTitle}</h2>

      <div className="shipment-form-body shipment-form-body--step2">
        <section className="shipment-form-section">
          <h3 className="shipment-form-section-heading">{deliverySection}</h3>

          <div className="shipment-form-row shipment-form-row--3">
            <ShipmentPlaceholderInput
              id="recipientContactPerson"
              placeholder={fields.contactPerson}
              value={data.contactPerson}
              onChange={(value) => onChange("contactPerson", value)}
              error={errors.contactPerson}
            />
            <ShipmentPlaceholderInput
              id="recipientEmail"
              type="email"
              placeholder={fields.email}
              value={data.email}
              onChange={(value) => onChange("email", value)}
              error={errors.email}
            />
            <ShipmentPlaceholderInput
              id="recipientPhoneNumber"
              type="tel"
              placeholder={fields.phoneNumber}
              value={data.phoneNumber}
              onChange={(value) => onChange("phoneNumber", value)}
              error={errors.phoneNumber}
            />
          </div>

          <div className="shipment-form-row shipment-form-row--single">
            <ShipmentPlaceholderInput
              id="recipientAlternatePhone"
              type="tel"
              placeholder={fields.alternatePhone}
              value={data.alternatePhone ?? ""}
              onChange={(value) => onChange("alternatePhone", value)}
            />
          </div>
        </section>

        <section className="shipment-form-section">
          <h3 className="shipment-form-section-heading">{addressSection}</h3>

          <div className="shipment-form-row shipment-form-row--address">
            <ShipmentPlaceholderInput
              id="addressLine"
              placeholder={fields.addressLine}
              value={data.addressLine}
              onChange={(value) => onChange("addressLine", value)}
              error={errors.addressLine}
            />
            <ShipmentPlaceholderInput
              id="pinCode"
              placeholder={fields.pinCode}
              value={data.pinCode}
              onChange={(value) => onChange("pinCode", value)}
              error={errors.pinCode}
            />
          </div>

          <div className="shipment-form-row shipment-form-row--single">
            <div className="shipment-city-field">
              <label htmlFor="city" className="shipment-city-label">
                {fields.city}
              </label>
              <div className="relative">
                <select
                  id="city"
                  value={data.city || SHIPMENT_CITIES[0]}
                  onChange={(e) => onChange("city", e.target.value)}
                  aria-invalid={Boolean(errors.city)}
                  className={cn(
                    "shipment-city-select",
                    errors.city && "shipment-input--error",
                  )}
                >
                  {SHIPMENT_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#6b7280]"
                  aria-hidden
                />
              </div>
              {errors.city && (
                <p className="shipment-field-error">{errors.city}</p>
              )}
            </div>
          </div>
        </section>

        <div className="shipment-form-actions shipment-form-actions--plain">
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
