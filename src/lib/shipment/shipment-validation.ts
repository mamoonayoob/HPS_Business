import type {
  ShipmentStep1,
  ShipmentStep2,
  ShipmentStep3,
} from "@/lib/api/shipment";

export type StepValidationResult = {
  valid: boolean;
  errors: Partial<Record<string, string>>;
};

function required(value: string, message: string): string | undefined {
  return value.trim() ? undefined : message;
}

function validateEmail(value: string): string | undefined {
  if (!value.trim()) {
    return "Email is required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return "Enter a valid email address.";
  }

  return undefined;
}

function validatePhone(value: string): string | undefined {
  if (!value.trim()) {
    return "Phone number is required.";
  }

  if (value.replace(/\D/g, "").length < 8) {
    return "Enter a valid phone number.";
  }

  return undefined;
}

function validatePositiveNumber(
  value: string,
  label: string,
): string | undefined {
  if (!value.trim()) {
    return `${label} is required.`;
  }

  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return `Enter a valid ${label.toLowerCase()}.`;
  }

  return undefined;
}

export function validateStep1(
  data: ShipmentStep1,
  otpVerified: boolean,
): StepValidationResult {
  const errors: Partial<Record<string, string>> = {};

  const contactPersonError = required(
    data.contactPerson,
    "Contact person is required.",
  );
  if (contactPersonError) {
    errors.contactPerson = contactPersonError;
  }

  const phoneError = validatePhone(data.phoneNumber);
  if (phoneError) {
    errors.phoneNumber = phoneError;
  }

  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.email = emailError;
  }

  if (!otpVerified) {
    errors.otp = "Please verify your email with OTP.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateStep2(data: ShipmentStep2): StepValidationResult {
  const errors: Partial<Record<string, string>> = {};

  const contactPersonError = required(
    data.contactPerson,
    "Contact person is required.",
  );
  if (contactPersonError) {
    errors.contactPerson = contactPersonError;
  }

  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.email = emailError;
  }

  const phoneError = validatePhone(data.phoneNumber);
  if (phoneError) {
    errors.phoneNumber = phoneError;
  }

  const addressError = required(data.addressLine, "Address is required.");
  if (addressError) {
    errors.addressLine = addressError;
  }

  const pinError = required(data.pinCode, "Pin code is required.");
  if (pinError) {
    errors.pinCode = pinError;
  }

  if (!data.city.trim()) {
    errors.city = "City is required.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateStep3(data: ShipmentStep3): StepValidationResult {
  const errors: Partial<Record<string, string>> = {};

  const weightError = validatePositiveNumber(
    data.weight,
    "Package weight",
  );
  if (weightError) {
    errors.weight = weightError;
  }

  const valueError = validatePositiveNumber(
    data.packageValue,
    "Package value",
  );
  if (valueError) {
    errors.packageValue = valueError;
  }

  const contentError = required(data.content, "Package content is required.");
  if (contentError) {
    errors.content = contentError;
  }

  const lengthError = validatePositiveNumber(data.length, "Length");
  if (lengthError) {
    errors.length = lengthError;
  }

  const breadthError = validatePositiveNumber(data.breadth, "Breadth");
  if (breadthError) {
    errors.breadth = breadthError;
  }

  const heightError = validatePositiveNumber(data.height, "Height");
  if (heightError) {
    errors.height = heightError;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateStep(
  step: number,
  data: {
    step1: ShipmentStep1;
    step2: ShipmentStep2;
    step3: ShipmentStep3;
  },
  otpVerified: boolean,
): StepValidationResult {
  switch (step) {
    case 1:
      return validateStep1(data.step1, otpVerified);
    case 2:
      return validateStep2(data.step2);
    case 3:
      return validateStep3(data.step3);
    default:
      return { valid: true, errors: {} };
  }
}

export function getFirstIncompleteStep(
  data: {
    step1: ShipmentStep1;
    step2: ShipmentStep2;
    step3: ShipmentStep3;
  },
  otpVerified: boolean,
  targetStep: number,
): number {
  for (let current = 1; current < targetStep; current += 1) {
    if (!validateStep(current, data, otpVerified).valid) {
      return current;
    }
  }

  return targetStep;
}

export function canAccessStep(
  targetStep: number,
  data: {
    step1: ShipmentStep1;
    step2: ShipmentStep2;
    step3: ShipmentStep3;
  },
  otpVerified: boolean,
): boolean {
  if (targetStep < 1 || targetStep > 4) {
    return false;
  }

  return getFirstIncompleteStep(data, otpVerified, targetStep) === targetStep;
}
