"use client";

import { SHIPMENT_STEP4 } from "@/config/shipment-create";
import type { ShipmentStep4 } from "@/lib/api/shipment";

type Props = {
  data: ShipmentStep4;
  loading: boolean;
  calculating: boolean;
  error: string | null;
  onCalculate: () => void;
  onSubmit: () => void;
};

function formatAmount(value: number) {
  return value.toFixed(2);
}

export function ShipmentCreateStep4({
  data,
  loading,
  calculating,
  error,
  onCalculate,
  onSubmit,
}: Props) {
  const {
    cardTitle,
    paymentModeLabel,
    paymentModeValue,
    calculate,
    table,
    totalLabel,
    submit,
    calculating: calculatingLabel,
  } = SHIPMENT_STEP4;

  return (
    <div className="shipment-form-card shipment-form-card--step4">
      <h2 className="shipment-form-card-title">{cardTitle}</h2>

      <div className="shipment-form-body shipment-form-body--step2">
        <div className="shipment-payment-row">
          <span className="shipment-payment-label">{paymentModeLabel}</span>
          <span className="shipment-payment-pill">{paymentModeValue}</span>
        </div>

        <button
          type="button"
          onClick={onCalculate}
          disabled={loading || calculating}
          className="shipment-calculate-btn"
        >
          {calculating ? calculatingLabel : calculate}
        </button>

        {data.calculated && (
          <>
            <div className="shipment-fee-table-wrap">
              <table className="shipment-fee-table">
                <thead>
                  <tr>
                    <th>{table.feeType}</th>
                    <th>{table.amount}</th>
                    <th>{table.vat}</th>
                    <th>{table.currency}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{data.feeType}</td>
                    <td>{formatAmount(data.amount)}</td>
                    <td>{formatAmount(data.vat)}</td>
                    <td>{data.currency}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="shipment-total-inline">
              {totalLabel}{" "}
              <span>{formatAmount(data.totalAmount)}</span>
            </p>
          </>
        )}

        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-action-red">
            {error}
          </p>
        )}

        <div className="shipment-form-actions shipment-form-actions--plain">
          <button
            type="button"
            onClick={onSubmit}
            disabled={loading || calculating || !data.calculated}
            className="shipment-submit-btn"
          >
            {loading ? "Placing Order..." : submit}
          </button>
        </div>
      </div>
    </div>
  );
}
