import type { ShipmentStep2, ShipmentStep3 } from "@/lib/api/shipment";

export type ShippingFeeBreakdown = {
  feeType: string;
  amount: number;
  vat: number;
  currency: string;
  totalAmount: number;
};

const SERVICE_TIERS = [
  { id: "express", ratePerKg: 25, baseFee: 50 },
  { id: "standard", ratePerKg: 18, baseFee: 35 },
  { id: "economy", ratePerKg: 12, baseFee: 25 },
] as const;

function parseNumber(value: string): number {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function getChargeableWeightKg(order: ShipmentStep3): number {
  const actualWeight = parseNumber(order.weight);
  const length = parseNumber(order.length);
  const breadth = parseNumber(order.breadth);
  const height = parseNumber(order.height);
  const volumetricWeight =
    length > 0 && breadth > 0 && height > 0
      ? (length * breadth * height) / 5000
      : 0;

  const chargeable = Math.max(actualWeight, volumetricWeight);
  return chargeable > 0 ? Number(chargeable.toFixed(3)) : 1;
}

function getCityMultiplier(city: string): number {
  const remoteCities = new Set(["Tabuk", "Abha"]);
  return remoteCities.has(city) ? 1.12 : 1;
}

export function calculateShippingFee(
  recipient: ShipmentStep2,
  order: ShipmentStep3,
): ShippingFeeBreakdown {
  const chargeableWeightKg = getChargeableWeightKg(order);
  const cityMultiplier = getCityMultiplier(recipient.city);
  const tier = SERVICE_TIERS.find((item) => item.id === "standard")!;
  const amount = Number(
    ((tier.baseFee + chargeableWeightKg * tier.ratePerKg) * cityMultiplier).toFixed(
      2,
    ),
  );
  const vat = 0;

  return {
    feeType: "Shipping Fee",
    amount,
    vat,
    currency: "SAR",
    totalAmount: Number((amount + vat).toFixed(2)),
  };
}
