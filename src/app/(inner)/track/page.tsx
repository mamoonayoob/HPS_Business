import { Suspense } from "react";
import { TrackShipmentPage } from "@/components/track/TrackShipmentPage";

export default function TrackPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <TrackShipmentPage />
    </Suspense>
  );
}
