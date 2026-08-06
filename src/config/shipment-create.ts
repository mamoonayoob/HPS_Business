export const SHIPMENT_CREATE_STEPS = [
  { id: 1, stepLabel: "STEP-1", title: "Sender Details", slug: "step-1" },
  { id: 2, stepLabel: "STEP-2", title: "Recipient Details", slug: "step-2" },
  { id: 3, stepLabel: "STEP-3", title: "Order Details", slug: "step-3" },
  { id: 4, stepLabel: "STEP-4", title: "Schedule PickUp", slug: "step-4" },
] as const;

export const SHIPMENT_STEP1 = {
  pageTitle: "Create Shipment",
  cardTitle: "Sender Details",
  sectionTitle: "PickUp Contact Details",
  fields: {
    contactPerson: {
      label: "CONTACT PERSON",
      placeholder: "Enter Contact Person Name",
    },
    phoneNumber: {
      label: "PHONE NUMBER",
      placeholder: "Enter Phone Number",
    },
    alternatePhone: {
      placeholder: "Alternate Phone Number (Optional)",
    },
    email: {
      label: "EMAIL ADDRESS",
      placeholder: "Enter Email Address",
      sendOtp: "Send OTP",
    },
    otp: {
      placeholder: "Enter OTP",
      verify: "Verify",
    },
  },
  submit: "Save & Next",
} as const;

export const SHIPMENT_CITIES = [
  "Riyadh",
  "Jeddah",
  "Dammam",
  "Mecca",
  "Medina",
  "Khobar",
  "Tabuk",
  "Abha",
] as const;

export const SHIPMENT_STEP2 = {
  cardTitle: "Recipient Details",
  deliverySection: "Delivery Contact Details",
  addressSection: "Complete Address Details",
  fields: {
    contactPerson: {
      label: "CONTACT PERSON",
      placeholder: "Enter Contact Person Name",
    },
    email: {
      label: "EMAIL ADDRESS",
      placeholder: "Enter Email Address",
    },
    phoneNumber: {
      label: "PHONE NUMBER",
      placeholder: "Enter Phone Number",
    },
    alternatePhone: {
      placeholder: "Alternate Phone Number (Optional)",
    },
    addressLine: {
      label: "ADDRESS",
      placeholder: "Flat, Housing no., Building, Apartment, Area, street",
    },
    pinCode: {
      label: "PIN CODE",
      placeholder: "Enter Pin Code",
    },
    city: {
      label: "CITY",
    },
  },
  submit: "Next",
} as const;

export const SHIPMENT_STEP3 = {
  cardTitle: "Package Details",
  fields: {
    weight: {
      label: "PACKAGE WEIGHT IN KG",
      placeholder: "Enter Package Weight in Kg",
    },
    weightHint: "(Max. 3 digits after decimal place)",
    packageValue: {
      label: "PACKAGE VALUE",
      placeholder: "Enter Package Value",
    },
    content: {
      label: "PACKAGE CONTENT",
      placeholder: "Write Package Content",
    },
    dimensions: "DIMENSIONS",
    length: {
      label: "LENGTH (IN CM)",
      placeholder: "Length (in cm)",
    },
    breadth: {
      label: "BREADTH (IN CM)",
      placeholder: "Breadth (in cm)",
    },
    height: {
      label: "HEIGHT (IN CM)",
      placeholder: "Height (in cm)",
    },
    dimensionsHint:
      "Shipping charges are calculated based on the higher value of package dimensions or weight.",
  },
  submit: "Next",
} as const;

export const SHIPMENT_STEP4 = {
  cardTitle: "Calculate Shipping",
  paymentModeLabel: "Payment Mode",
  paymentModeValue: "Cash on Delivery",
  calculate: "Calculate Shipping",
  table: {
    feeType: "Fee Type",
    amount: "Amount",
    vat: "VAT",
    currency: "Currency",
  },
  feeTypeValue: "Shipping Fee",
  totalLabel: "Total Amount:",
  submit: "Place Order",
  calculating: "Calculating shipping...",
  calculateFirstError: "Please calculate shipping before placing your order.",
  loadDemoData: "Load Demo Data",
} as const;
