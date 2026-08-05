import { apiClient } from "./client";
import { mockTrackShipment } from "@/lib/tracking/tracking-mock";

export type TrackingEvent = {
  status: string;
  location?: string;
  description?: string;
  date: string;
  time: string;
  completed: boolean;
  current?: boolean;
  pending?: boolean;
};

export type TrackingResponse = {
  awbNumber: string;
  status: string;
  expectedDelivery: string;
  events: TrackingEvent[];
};

const trackingEndpoint =
  process.env.NEXT_PUBLIC_TRACKING_API ?? "/shipments/track";

/**
 * Mock mode is ON by default. Set NEXT_PUBLIC_TRACKING_API_MOCK=false
 * in .env.local when the real backend is ready.
 */
export function isTrackingApiMock(): boolean {
  return process.env.NEXT_PUBLIC_TRACKING_API_MOCK !== "false";
}

async function trackShipmentApi(
  awbNumber: string,
): Promise<TrackingResponse> {
  return apiClient<TrackingResponse>(
    `${trackingEndpoint}?awb=${encodeURIComponent(awbNumber)}`,
    { method: "GET" },
  );
}

export async function trackShipment(
  awbNumber: string,
): Promise<TrackingResponse> {
  if (isTrackingApiMock()) {
    return mockTrackShipment(awbNumber);
  }

  return trackShipmentApi(awbNumber);
}
