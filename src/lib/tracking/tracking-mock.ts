import type { TrackingResponse } from "@/lib/api/tracking";
import { TRACKING_DUMMY } from "@/config/track-shipment";

function delay(ms = 400): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function mockTrackShipment(
  awbNumber: string,
): Promise<TrackingResponse> {
  await delay();

  return {
    ...TRACKING_DUMMY,
    awbNumber: awbNumber.trim() || TRACKING_DUMMY.awbNumber,
    events: TRACKING_DUMMY.events.map((event) => ({ ...event })),
  };
}
