import { apiClient } from "./client";
import {
  mockCalculateShipping,
  mockCreateShipment,
  mockSendOtp,
  mockVerifyOtp,
} from "@/lib/shipment/shipment-mock";

export type ShipmentStep1 = {
  contactPerson: string;
  phoneNumber: string;
  alternatePhone?: string;
  email: string;
  otp?: string;
};

export type ShipmentStep2 = {
  contactPerson: string;
  email: string;
  phoneNumber: string;
  alternatePhone?: string;
  addressLine: string;
  pinCode: string;
  city: string;
};

export type ShipmentStep3 = {
  weight: string;
  packageValue: string;
  content: string;
  length: string;
  breadth: string;
  height: string;
};

export type ShipmentStep4 = {
  paymentMode: "cod";
  calculated: boolean;
  feeType: string;
  amount: number;
  vat: number;
  currency: string;
  totalAmount: number;
};

export type ShipmentPayload = {
  sender: ShipmentStep1;
  recipient: ShipmentStep2;
  order: ShipmentStep3;
  shipping: ShipmentStep4;
};

export type ShipmentResponse = {
  shipmentId: string;
  awbNumber: string;
  message: string;
};

export type CalculateShippingRequest = {
  recipient: ShipmentStep2;
  order: ShipmentStep3;
};

export type SendOtpRequest = {
  email: string;
};

export type VerifyOtpRequest = {
  email: string;
  otp: string;
};

const shipmentEndpoint =
  process.env.NEXT_PUBLIC_SHIPMENT_API ?? "/shipments";

/**
 * Mock mode is ON by default. Set NEXT_PUBLIC_SHIPMENT_API_MOCK=false
 * in .env.local when the real backend is ready.
 */
export function isShipmentApiMock(): boolean {
  return process.env.NEXT_PUBLIC_SHIPMENT_API_MOCK !== "false";
}

async function sendOtpApi(email: string): Promise<{ success: boolean }> {
  return apiClient<{ success: boolean }>(`${shipmentEndpoint}/send-otp`, {
    method: "POST",
    body: JSON.stringify({ email } satisfies SendOtpRequest),
  });
}

async function verifyOtpApi(
  email: string,
  otp: string,
): Promise<{ verified: boolean }> {
  return apiClient<{ verified: boolean }>(`${shipmentEndpoint}/verify-otp`, {
    method: "POST",
    body: JSON.stringify({ email, otp } satisfies VerifyOtpRequest),
  });
}

async function calculateShippingApi(
  recipient: ShipmentStep2,
  order: ShipmentStep3,
): Promise<ShipmentStep4> {
  const result = await apiClient<
    Omit<ShipmentStep4, "paymentMode" | "calculated">
  >(`${shipmentEndpoint}/calculate`, {
    method: "POST",
    body: JSON.stringify({ recipient, order } satisfies CalculateShippingRequest),
  });

  return {
    paymentMode: "cod",
    calculated: true,
    ...result,
  };
}

async function createShipmentApi(
  payload: ShipmentPayload,
): Promise<ShipmentResponse> {
  return apiClient<ShipmentResponse>(shipmentEndpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function sendOtp(email: string): Promise<{ success: boolean }> {
  if (isShipmentApiMock()) {
    return mockSendOtp(email);
  }

  return sendOtpApi(email);
}

export async function verifyOtp(
  email: string,
  otp: string,
): Promise<{ verified: boolean }> {
  if (isShipmentApiMock()) {
    return mockVerifyOtp(email, otp);
  }

  return verifyOtpApi(email, otp);
}

export async function calculateShipping(
  recipient: ShipmentStep2,
  order: ShipmentStep3,
): Promise<ShipmentStep4> {
  if (isShipmentApiMock()) {
    return mockCalculateShipping(recipient, order);
  }

  return calculateShippingApi(recipient, order);
}

export async function createShipment(
  payload: ShipmentPayload,
): Promise<ShipmentResponse> {
  if (isShipmentApiMock()) {
    return mockCreateShipment(payload);
  }

  return createShipmentApi(payload);
}
