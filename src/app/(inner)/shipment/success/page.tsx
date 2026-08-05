import { Suspense } from "react";
import { ShipmentSuccessPage } from "@/components/shipment/ShipmentSuccessPage";

export default function ShipmentSuccessRoutePage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ShipmentSuccessPage />
    </Suspense>
  );
}
