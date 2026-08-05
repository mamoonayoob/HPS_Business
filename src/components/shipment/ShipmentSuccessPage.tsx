"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Bell,
  Check,
  Copy,
  List,
  PlusSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  SHIPMENT_SUCCESS,
  SHIPMENT_SUCCESS_FALLBACK,
} from "@/config/shipment-success";
import { clearShipmentDraft } from "@/lib/shipment/shipment-form-storage";
import {
  clearShipmentSuccess,
  readShipmentSuccess,
} from "@/lib/shipment/shipment-success-storage";
import type { ShipmentResponse } from "@/lib/api/shipment";

export function ShipmentSuccessPage() {
  const searchParams = useSearchParams();
  const queryAwb = searchParams.get("awb");
  const [result, setResult] = useState<ShipmentResponse>(SHIPMENT_SUCCESS_FALLBACK);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = readShipmentSuccess(SHIPMENT_SUCCESS_FALLBACK);
    const awbNumber = queryAwb ?? stored.awbNumber;

    setResult({
      ...stored,
      awbNumber,
      shipmentId: awbNumber,
    });
  }, [queryAwb]);

  async function handleCopyAwb() {
    if (!result.awbNumber) {
      return;
    }

    try {
      await navigator.clipboard.writeText(result.awbNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function handleCreateAnother() {
    clearShipmentSuccess();
    clearShipmentDraft();
  }

  const {
    title,
    description,
    awbLabel,
    nextTitle,
    nextItems,
    trackShipment,
    createAnother,
    copied: copiedLabel,
  } = SHIPMENT_SUCCESS;

  return (
    <div className="shipment-success-page">
      <div className="shipment-create-bg" aria-hidden />

      <Container className="shipment-success-container">
        <div className="shipment-success-card">
          <div className="shipment-success-icon-wrap">
            <div className="shipment-success-icon">
              <Check className="size-8" strokeWidth={3} />
            </div>
          </div>

          <h1 className="shipment-success-title">{title}</h1>
          <p className="shipment-success-description">{description}</p>

          <div className="shipment-success-awb-box">
            <p className="shipment-success-awb-label">{awbLabel}</p>
            <div className="shipment-success-awb-row">
              <span className="shipment-success-awb-value">{result.awbNumber}</span>
              <button
                type="button"
                onClick={handleCopyAwb}
                className="shipment-success-copy-btn"
                aria-label="Copy tracking number"
              >
                <Copy className="size-5" strokeWidth={2} />
              </button>
            </div>
            {copied && (
              <p className="shipment-success-copied">{copiedLabel}</p>
            )}
          </div>

          <div className="shipment-success-next-box">
            <h2 className="shipment-success-next-title">{nextTitle}</h2>
            <ul className="shipment-success-next-list">
              {nextItems.map((item) => (
                <li key={item.id} className="shipment-success-next-item">
                  <span
                    className={
                      item.id === "pickup"
                        ? "shipment-success-next-icon shipment-success-next-icon--pickup"
                        : "shipment-success-next-icon shipment-success-next-icon--notify"
                    }
                  >
                    {item.id === "pickup" ? (
                      <Check className="size-3.5" strokeWidth={3} />
                    ) : (
                      <Bell className="size-3.5" strokeWidth={2.25} />
                    )}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="shipment-success-actions">
            <Link
              href={`/track?awb=${encodeURIComponent(result.awbNumber)}`}
              className="shipment-success-btn shipment-success-btn--primary"
            >
              <List className="size-4" strokeWidth={2.25} />
              {trackShipment}
            </Link>
            <Link
              href="/shipment/create/step-1"
              onClick={handleCreateAnother}
              className="shipment-success-btn shipment-success-btn--secondary"
            >
              <PlusSquare className="size-4" strokeWidth={2.25} />
              {createAnother}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
