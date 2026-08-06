/**
 * Figma file eqh3HSOKgO0vw3TIfig6bQ — page → frame node IDs for parity QA.
 */
export const FIGMA_FILE_KEY = "eqh3HSOKgO0vw3TIfig6bQ";

export const FIGMA_PAGES = {
  home: { nodeId: "2014:2", route: "/" },
  about: { nodeId: "2014:641", route: "/about" },
  process: { nodeId: "2020:916", route: "/process" },
  careers: { nodeId: "2020:1085", route: "/careers" },
  resources: { nodeId: "2020:1260", route: "/resources" },
  contact: { nodeId: "2020:1380", route: "/contact" },
  freightForwarding: { nodeId: "2045:2", route: "/services/freight-forwarding" },
  login: { nodeId: "2070:3819", route: "/login" },
  track: { nodeId: "2103:2166", route: "/track" },
  createShipmentStep1: { nodeId: "2094:2052", route: "/shipment/create/step-1" },
  createShipmentStep2: { nodeId: "2094:2224", route: "/shipment/create/step-2" },
  createShipmentStep3: { nodeId: "2095:2679", route: "/shipment/create/step-3" },
  createShipmentStep4: { nodeId: "2095:3556", route: "/shipment/create/step-4" },
  header: { nodeId: "2072:4695", route: null },
  footer: { nodeId: "2070:1621", route: null },
} as const;

/** Screens composed in code — no dedicated Figma frame */
export const COMPOSED_ROUTES = ["/services", "/shipment/success"] as const;
