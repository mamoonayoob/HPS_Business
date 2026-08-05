export const SHIPMENT_SUCCESS = {
  title: "Shipment Created Successfully!",
  description:
    "Thank you for choosing HPS Logistics. Your order has been placed and a pickup has been scheduled according to your preferences.",
  awbLabel: "YOUR TRACKING NUMBER (AWB)",
  nextTitle: "What happens next?",
  nextItems: [
    {
      id: "pickup",
      text: "Our courier will arrive at the sender's address for pickup.",
    },
    {
      id: "notify",
      text: "You will receive SMS and Email updates on the status of your shipment.",
    },
  ],
  trackShipment: "Track Shipment",
  createAnother: "Create Another",
  copied: "Copied!",
} as const;

/** Static fallback until API values are available on the success page. */
export const SHIPMENT_SUCCESS_FALLBACK = {
  shipmentId: "HPS-847291054",
  awbNumber: "HPS-847291054",
  message: "Shipment created successfully.",
} as const;
