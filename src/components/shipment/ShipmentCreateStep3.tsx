"use client";

import { ShipmentPlaceholderInput } from "./ShipmentFormFields";
import { SHIPMENT_STEP3 } from "@/config/shipment-create";
import type { ShipmentStep3 } from "@/lib/api/shipment";

type Props = {
  data: ShipmentStep3;
  loading: boolean;
  errors: Partial<Record<keyof ShipmentStep3, string>>;
  onChange: (field: keyof ShipmentStep3, value: string) => void;
  onNext: () => void;
};

export function ShipmentCreateStep3({
  data,
  loading,
  errors,
  onChange,
  onNext,
}: Props) {
  const { cardTitle, fields, submit } = SHIPMENT_STEP3;

  return (
    <div className="shipment-form-card">
      <h2 className="shipment-form-card-title">{cardTitle}</h2>

      <div className="shipment-form-body shipment-form-body--step2">
        <div className="shipment-form-row shipment-form-row--2">
          <div>
            <ShipmentPlaceholderInput
              id="packageWeight"
              type="number"
              placeholder={fields.weight}
              value={data.weight}
              onChange={(value) => onChange("weight", value)}
              error={errors.weight}
            />
            <p className="shipment-field-hint">{fields.weightHint}</p>
          </div>

          <ShipmentPlaceholderInput
            id="packageValue"
            type="number"
            placeholder={fields.packageValue}
            value={data.packageValue}
            onChange={(value) => onChange("packageValue", value)}
            error={errors.packageValue}
          />
        </div>

        <div className="shipment-form-row shipment-form-row--half">
          <ShipmentPlaceholderInput
            id="packageContent"
            placeholder={fields.content}
            value={data.content}
            onChange={(value) => onChange("content", value)}
            error={errors.content}
          />
        </div>

        <div className="shipment-dimensions-block">
          <div className="shipment-dimensions-row">
            <span className="shipment-dimensions-label">{fields.dimensions}</span>
            <div className="shipment-dimensions-inputs">
              <ShipmentPlaceholderInput
                id="packageLength"
                type="number"
                placeholder={fields.length}
                value={data.length}
                onChange={(value) => onChange("length", value)}
                error={errors.length}
              />
              <ShipmentPlaceholderInput
                id="packageBreadth"
                type="number"
                placeholder={fields.breadth}
                value={data.breadth}
                onChange={(value) => onChange("breadth", value)}
                error={errors.breadth}
              />
              <ShipmentPlaceholderInput
                id="packageHeight"
                type="number"
                placeholder={fields.height}
                value={data.height}
                onChange={(value) => onChange("height", value)}
                error={errors.height}
              />
            </div>
          </div>
          <p className="shipment-field-hint shipment-dimensions-hint">
            {fields.dimensionsHint}
          </p>
        </div>

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
