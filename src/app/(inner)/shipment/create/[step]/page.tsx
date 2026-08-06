import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ step: string }>;
};

/** Route segment validates step; UI is rendered by create/layout.tsx wizard. */
export default async function ShipmentStepPage({ params }: Props) {
  const { step: stepParam } = await params;
  const match = stepParam.match(/^step-(\d)$/);
  const step = match ? Number(match[1]) : 0;

  if (step < 1 || step > 4) {
    notFound();
  }

  return null;
}
