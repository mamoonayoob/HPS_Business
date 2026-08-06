import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShipmentFieldProps = {
  label?: string;
  hideLabel?: boolean;
  error?: string;
  children: ReactNode;
};

export function ShipmentLabeledField({
  label,
  hideLabel,
  error,
  children,
}: ShipmentFieldProps) {
  return (
    <div className="shipment-field">
      {hideLabel ? (
        <span
          className="shipment-field-label shipment-field-label--spacer"
          aria-hidden
        >
          .
        </span>
      ) : (
        label && <span className="shipment-field-label">{label}</span>
      )}
      {children}
      {error && <p className="shipment-field-error">{error}</p>}
    </div>
  );
}

export function ShipmentPlaceholderInput({
  id,
  type = "text",
  label,
  hideLabel,
  placeholder,
  value,
  onChange,
  disabled,
  error,
}: {
  id: string;
  type?: string;
  label?: string;
  hideLabel?: boolean;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}) {
  const input = (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      aria-invalid={Boolean(error)}
      className={cn(
        "shipment-input",
        label || hideLabel ? undefined : "shipment-input--placeholder",
        error && "shipment-input--error",
      )}
    />
  );

  if (label || hideLabel) {
    return (
      <ShipmentLabeledField label={label} hideLabel={hideLabel} error={error}>
        {input}
      </ShipmentLabeledField>
    );
  }

  return (
    <div className="shipment-field">
      {input}
      {error && <p className="shipment-field-error">{error}</p>}
    </div>
  );
}
