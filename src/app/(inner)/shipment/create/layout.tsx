import { ShipmentCreateWizard } from "@/components/shipment/ShipmentCreateWizard";

/**
 * Wizard lives in layout so step navigation does not remount the form
 * (avoids blank flash + sessionStorage re-read on every step change).
 */
export default function ShipmentCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ShipmentCreateWizard />
      {children}
    </>
  );
}
