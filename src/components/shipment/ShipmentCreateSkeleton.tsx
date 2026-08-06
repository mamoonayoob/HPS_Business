import { Container } from "@/components/ui/Container";

export function ShipmentCreateSkeleton() {
  return (
    <div className="shipment-create-page">
      <div className="shipment-create-bg" aria-hidden />
      <Container className="shipment-create-container">
        <div className="shipment-create-skeleton-title" aria-hidden />
        <div className="shipment-create-skeleton-stepper" aria-hidden />
        <div className="shipment-form-card shipment-create-skeleton-card">
          <div className="shipment-create-skeleton-line shipment-create-skeleton-line--lg" />
          <div className="shipment-create-skeleton-line shipment-create-skeleton-line--md" />
          <div className="shipment-create-skeleton-grid">
            <div className="shipment-create-skeleton-field" />
            <div className="shipment-create-skeleton-field" />
            <div className="shipment-create-skeleton-field" />
          </div>
          <div className="shipment-create-skeleton-grid shipment-create-skeleton-grid--2">
            <div className="shipment-create-skeleton-field" />
            <div className="shipment-create-skeleton-field" />
          </div>
          <div className="shipment-create-skeleton-btn" aria-hidden />
        </div>
      </Container>
    </div>
  );
}
