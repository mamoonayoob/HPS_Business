import type {
  ShipmentStep1,
  ShipmentStep2,
  ShipmentStep3,
  ShipmentStep4,
} from "@/lib/api/shipment";

export type ShipmentFormData = {
  step1: ShipmentStep1;
  step2: ShipmentStep2;
  step3: ShipmentStep3;
  step4: ShipmentStep4;
};

export const SHIPMENT_FORM_STORAGE_KEY = "hps-shipment-draft";
export const SHIPMENT_META_STORAGE_KEY = "hps-shipment-meta";

export type ShipmentWizardMeta = {
  completedStep: number;
  otpSent: boolean;
  otpVerified: boolean;
};

const defaultMeta: ShipmentWizardMeta = {
  completedStep: 0,
  otpSent: false,
  otpVerified: false,
};

export function readShipmentDraft(
  fallback: ShipmentFormData,
): ShipmentFormData {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = sessionStorage.getItem(SHIPMENT_FORM_STORAGE_KEY);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw) as Partial<ShipmentFormData>;
    return {
      step1: { ...fallback.step1, ...parsed.step1 },
      step2: { ...fallback.step2, ...parsed.step2 },
      step3: { ...fallback.step3, ...parsed.step3 },
      step4: { ...fallback.step4, ...parsed.step4 },
    };
  } catch {
    return fallback;
  }
}

export function writeShipmentDraft(data: ShipmentFormData) {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(SHIPMENT_FORM_STORAGE_KEY, JSON.stringify(data));
}

export function clearShipmentDraft() {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.removeItem(SHIPMENT_FORM_STORAGE_KEY);
  sessionStorage.removeItem(SHIPMENT_META_STORAGE_KEY);
}

export function readShipmentMeta(
  fallback: ShipmentWizardMeta = defaultMeta,
): ShipmentWizardMeta {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = sessionStorage.getItem(SHIPMENT_META_STORAGE_KEY);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw) as Partial<ShipmentWizardMeta>;
    return {
      completedStep: parsed.completedStep ?? fallback.completedStep,
      otpSent: parsed.otpSent ?? fallback.otpSent,
      otpVerified: parsed.otpVerified ?? fallback.otpVerified,
    };
  } catch {
    return fallback;
  }
}

export function writeShipmentMeta(meta: ShipmentWizardMeta) {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(SHIPMENT_META_STORAGE_KEY, JSON.stringify(meta));
}
