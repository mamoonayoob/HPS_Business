export function parseShipmentStep(pathname: string): number {
  const match = pathname.match(/\/shipment\/create\/step-(\d)$/);
  if (!match) {
    return 1;
  }

  const step = Number(match[1]);
  return step >= 1 && step <= 4 ? step : 1;
}
