import type { ShipmentResponse } from "@/lib/api/shipment";

export const SHIPMENT_SUCCESS_STORAGE_KEY = "hps-shipment-success";

export function writeShipmentSuccess(result: ShipmentResponse) {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(SHIPMENT_SUCCESS_STORAGE_KEY, JSON.stringify(result));
}

export function readShipmentSuccess(
  fallback: ShipmentResponse,
): ShipmentResponse {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = sessionStorage.getItem(SHIPMENT_SUCCESS_STORAGE_KEY);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw) as Partial<ShipmentResponse>;
    return {
      shipmentId: parsed.shipmentId ?? fallback.shipmentId,
      awbNumber: parsed.awbNumber ?? fallback.awbNumber,
      message: parsed.message ?? fallback.message,
    };
  } catch {
    return fallback;
  }
}

export function clearShipmentSuccess() {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.removeItem(SHIPMENT_SUCCESS_STORAGE_KEY);
}
