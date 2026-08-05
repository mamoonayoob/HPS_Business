import { ApiError } from "@/lib/api/client";
import type {
  ShipmentPayload,
  ShipmentResponse,
  ShipmentStep2,
  ShipmentStep3,
  ShipmentStep4,
} from "@/lib/api/shipment";
import { calculateShippingFee } from "@/lib/shipment/calculate-rates";

/** Demo OTP accepted in mock mode (any non-empty OTP also works). */
export const MOCK_DEMO_OTP = "123456";

function delay(ms = 400): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function mockSendOtp(
  email: string,
): Promise<{ success: boolean }> {
  await delay();
  return { success: Boolean(email.trim()) };
}

export async function mockVerifyOtp(
  email: string,
  otp: string,
): Promise<{ verified: boolean }> {
  await delay();

  const normalizedOtp = otp.trim();
  const verified =
    Boolean(email.trim()) &&
    (normalizedOtp === MOCK_DEMO_OTP || normalizedOtp.length >= 4);

  if (!verified) {
    throw new ApiError("Invalid OTP. Use 123456 in demo mode.", 400);
  }

  return { verified: true };
}

export async function mockCalculateShipping(
  recipient: ShipmentStep2,
  order: ShipmentStep3,
): Promise<ShipmentStep4> {
  await delay();
  const fee = calculateShippingFee(recipient, order);

  return {
    paymentMode: "cod",
    calculated: true,
    ...fee,
  };
}

export async function mockCreateShipment(
  payload: ShipmentPayload,
): Promise<ShipmentResponse> {
  await delay(600);
  const awbNumber = `HPS-${Date.now().toString().slice(-9)}`;

  return {
    shipmentId: awbNumber,
    awbNumber,
    message: "Shipment created successfully.",
  };
}
