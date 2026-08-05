import { notFound } from "next/navigation";
import { ShipmentCreateWizard } from "@/components/shipment/ShipmentCreateWizard";

type Props = {
  params: Promise<{ step: string }>;
};

export default async function ShipmentStepPage({ params }: Props) {
  const { step: stepParam } = await params;
  const match = stepParam.match(/^step-(\d)$/);
  const step = match ? Number(match[1]) : 0;

  if (step < 1 || step > 4) {
    notFound();
  }

  return <ShipmentCreateWizard step={step} />;
}
