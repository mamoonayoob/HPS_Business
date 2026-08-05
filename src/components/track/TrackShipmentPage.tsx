"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Check,
  ClipboardList,
  Copy,
  Loader2,
  Lock,
  MapPin,
  Package,
  PackageCheck,
  ScanLine,
  Share2,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TRACK_SHIPMENT } from "@/config/track-shipment";
import { trackShipment } from "@/lib/api/tracking";
import type { TrackingEvent, TrackingResponse } from "@/lib/api/tracking";
import { ApiError } from "@/lib/api/client";
import { cn } from "@/lib/utils";

const statusIcons: Record<string, LucideIcon> = {
  Delivered: PackageCheck,
  "Out For Delivery": Truck,
  "In Transit": Truck,
  "Order Picked Up": Package,
  "Order Received": ClipboardList,
};

function getProgressPercent(events: TrackingEvent[]) {
  const completed = events.filter((event) => event.completed && !event.pending).length;
  return Math.round((completed / events.length) * 100);
}

function TimelineNode({ event }: { event: TrackingEvent }) {
  const Icon = statusIcons[event.status] ?? Package;

  if (event.pending) {
    return (
      <div className="track-timeline-node track-timeline-node--pending">
        <span className="track-timeline-node-dot" />
      </div>
    );
  }

  if (event.current) {
    return (
      <div className="track-timeline-node track-timeline-node--current">
        <span className="track-timeline-pulse" aria-hidden />
        <Icon className="size-4" strokeWidth={2.25} />
      </div>
    );
  }

  return (
    <div className="track-timeline-node track-timeline-node--complete">
      <Check className="size-4" strokeWidth={2.75} />
    </div>
  );
}

function TimelineItem({
  event,
  isLast,
}: {
  event: TrackingEvent;
  isLast: boolean;
}) {
  const location = event.location ?? event.description ?? "";

  return (
    <div
      className={cn(
        "track-timeline-item",
        event.pending && "track-timeline-item--pending",
        event.current && "track-timeline-item--current",
      )}
    >
      {!isLast && <span className="track-timeline-line" aria-hidden />}

      <div className="track-timeline-date">
        <p className="track-timeline-date-value">{event.date}</p>
        <p
          className={cn(
            "track-timeline-time",
            event.current && "track-timeline-time--current",
          )}
        >
          {event.time}
        </p>
      </div>

      <TimelineNode event={event} />

      <div
        className={cn(
          "track-timeline-details",
          event.current && "track-timeline-details--current",
        )}
      >
        {event.current && (
          <span className="track-timeline-live-badge">{TRACK_SHIPMENT.liveUpdates}</span>
        )}
        <p
          className={cn(
            "track-timeline-status",
            event.current && "track-timeline-status--current",
          )}
        >
          {event.status}
        </p>
        {location && (
          <p className="track-timeline-location">
            <MapPin className="size-4 shrink-0" strokeWidth={2} />
            {location}
          </p>
        )}
        {event.current && (
          <Truck
            className="track-timeline-decoration"
            strokeWidth={1.5}
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}

function TrackingSkeleton() {
  return (
    <div className="track-results track-results--loading" aria-hidden>
      <div className="track-summary-card track-skeleton-card">
        <div className="track-skeleton-block track-skeleton-block--lg" />
        <div className="track-skeleton-block track-skeleton-block--sm" />
      </div>
      <div className="track-history-card track-skeleton-card">
        <div className="track-skeleton-block track-skeleton-block--title" />
        <div className="track-skeleton-timeline">
          {[1, 2, 3].map((item) => (
            <div key={item} className="track-skeleton-row">
              <div className="track-skeleton-block track-skeleton-block--date" />
              <div className="track-skeleton-dot" />
              <div className="track-skeleton-block track-skeleton-block--detail" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TrackShipmentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialAwb = searchParams.get("awb") ?? "";

  const [awb, setAwb] = useState(initialAwb);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tracking, setTracking] = useState<TrackingResponse | null>(null);
  const [copied, setCopied] = useState(false);

  const progressPercent = useMemo(
    () => (tracking ? getProgressPercent(tracking.events) : 0),
    [tracking],
  );

  async function fetchTracking(awbNumber: string) {
    if (!awbNumber.trim()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await trackShipment(awbNumber.trim());
      setTracking(result);
      router.replace(`/track?awb=${encodeURIComponent(result.awbNumber)}`, {
        scroll: false,
      });
    } catch (err) {
      setTracking(null);
      setError(
        err instanceof ApiError
          ? err.message
          : TRACK_SHIPMENT.notFoundError,
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (initialAwb) {
      setAwb(initialAwb);
      void fetchTracking(initialAwb);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialAwb]);

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    void fetchTracking(awb);
  }

  async function handleCopyAwb() {
    if (!tracking?.awbNumber) {
      return;
    }

    try {
      await navigator.clipboard.writeText(tracking.awbNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const copy = TRACK_SHIPMENT;

  return (
    <div className="track-page">
      <div className="shipment-create-bg" aria-hidden />

      <Container className="track-container">
        <div className={cn("track-search-card", tracking && "track-search-card--compact")}>
          <span className="track-search-accent" aria-hidden />

          <div className="track-search-header">
            <div className="track-search-icon-wrap">
              <Package className="size-7 text-secondary-cyan" strokeWidth={1.75} />
            </div>
            <div>
              <h1 className="track-search-title">{copy.searchTitle}</h1>
              <p className="track-search-subtitle">{copy.searchSubtitle}</p>
            </div>
          </div>

          <form onSubmit={handleTrack} className="track-search-form">
            <label htmlFor="track-awb" className="track-search-label">
              {copy.awbLabel}
            </label>
            <div className="track-search-input-wrap">
              <input
                id="track-awb"
                type="text"
                value={awb}
                onChange={(e) => setAwb(e.target.value)}
                placeholder={copy.awbPlaceholder}
                className="track-search-input"
              />
              <ScanLine
                className="track-search-input-icon"
                strokeWidth={2}
                aria-hidden
              />
            </div>

            <button
              type="submit"
              disabled={loading || !awb.trim()}
              className="track-search-submit"
            >
              {loading ? (
                <Loader2 className="size-5 animate-spin" strokeWidth={2.25} />
              ) : (
                <MapPin className="size-5" strokeWidth={2.25} />
              )}
              {loading ? copy.locating : copy.locateButton}
            </button>
          </form>

          <div className="track-search-footer">
            <span className="track-search-footer-item">
              <Lock className="size-4" strokeWidth={2} />
              {copy.secureConnection}
            </span>
            <span className="track-search-footer-item track-search-footer-item--online">
              <span className="track-search-online-dot" aria-hidden />
              {copy.systemOnline}
            </span>
          </div>
        </div>

        {error && <p className="track-error">{error}</p>}

        {!tracking && !loading && !error && (
          <div className="track-empty-state">
            <div className="track-empty-icon">
              <Truck className="size-8" strokeWidth={1.75} />
            </div>
            <p>{copy.emptyHint}</p>
          </div>
        )}

        {loading && !tracking && <TrackingSkeleton />}

        {tracking && (
          <div className="track-results track-results--visible">
            <div className="track-summary-card">
              <div className="track-summary-main">
                <p className="track-summary-label">{copy.awbNumberLabel}</p>
                <div className="track-summary-awb-row">
                  <p className="track-summary-awb">{tracking.awbNumber}</p>
                  <button
                    type="button"
                    onClick={handleCopyAwb}
                    className="track-summary-copy"
                    aria-label={copy.copyAwb}
                  >
                    <Copy className="size-4" strokeWidth={2} />
                    {copied ? copy.copied : copy.copyAwb}
                  </button>
                </div>

                <div className="track-progress">
                  <div className="track-progress-header">
                    <span className="track-progress-label">{copy.progressLabel}</span>
                    <span className="track-progress-value">{progressPercent}%</span>
                  </div>
                  <div className="track-progress-bar">
                    <span
                      className="track-progress-fill"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="track-summary-meta">
                <span className="track-status-badge">
                  <span className="track-status-dot" aria-hidden />
                  {tracking.status}
                </span>
                <p className="track-expected-delivery">
                  {copy.expectedDeliveryLabel}{" "}
                  <strong>{tracking.expectedDelivery}</strong>
                </p>
              </div>
            </div>

            <div className="track-history-card">
              <div className="track-history-header">
                <div>
                  <h2 className="track-history-title">{copy.historyTitle}</h2>
                  <p className="track-history-count">
                    {tracking.events.length} {copy.eventsLabel}
                  </p>
                </div>
                <div className="track-history-actions">
                  <button
                    type="button"
                    className="track-history-action"
                    aria-label="Share tracking"
                  >
                    <Share2 className="size-5" strokeWidth={2} />
                  </button>
                </div>
              </div>

              <div className="track-timeline">
                {tracking.events.map((event, index) => (
                  <TimelineItem
                    key={`${event.status}-${index}`}
                    event={event}
                    isLast={index === tracking.events.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
