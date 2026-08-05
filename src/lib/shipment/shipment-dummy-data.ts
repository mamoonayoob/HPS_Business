import type { ShipmentFormData, ShipmentWizardMeta } from "./shipment-form-storage";
import { MOCK_DEMO_OTP } from "./shipment-mock";

/** Pre-filled demo data for testing the Create Shipment wizard end-to-end. */
export const SHIPMENT_DUMMY_DATA: ShipmentFormData = {
  step1: {
    contactPerson: "Ahmed",
    phoneNumber: "+966501234567",
    alternatePhone: "+966509876543",
    email: "ahmed.sender@example.com",
    otp: MOCK_DEMO_OTP,
  },
  step2: {
    contactPerson: "Fatima Hassan",
    email: "fatima.recipient@example.com",
    phoneNumber: "+966512345678",
    alternatePhone: "",
    addressLine: "Building 12, Al Olaya District, King Fahd Road",
    pinCode: "12211",
    city: "Riyadh",
  },
  step3: {
    weight: "2.5",
    packageValue: "500",
    content: "Electronics - Mobile Accessories",
    length: "30",
    breadth: "20",
    height: "15",
  },
  step4: {
    paymentMode: "cod",
    calculated: false,
    feeType: "Shipping Fee",
    amount: 0,
    vat: 0,
    currency: "SAR",
    totalAmount: 0,
  },
};

export const SHIPMENT_DUMMY_META: ShipmentWizardMeta = {
  completedStep: 3,
  otpSent: true,
  otpVerified: true,
};
