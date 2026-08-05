"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ShipmentStepper } from "./ShipmentStepper";
import { ShipmentCreateStep1 } from "./ShipmentCreateStep1";
import { ShipmentCreateStep2 } from "./ShipmentCreateStep2";
import { ShipmentCreateStep3 } from "./ShipmentCreateStep3";
import { ShipmentCreateStep4 } from "./ShipmentCreateStep4";
import { SHIPMENT_STEP1, SHIPMENT_STEP4 } from "@/config/shipment-create";
import {
  calculateShipping,
  createShipment,
  isShipmentApiMock,
  sendOtp,
  verifyOtp,
} from "@/lib/api/shipment";
import { ApiError } from "@/lib/api/client";
import {
  clearShipmentDraft,
  readShipmentDraft,
  readShipmentMeta,
  writeShipmentDraft,
  writeShipmentMeta,
  type ShipmentFormData,
  type ShipmentWizardMeta,
} from "@/lib/shipment/shipment-form-storage";
import { writeShipmentSuccess } from "@/lib/shipment/shipment-success-storage";
import {
  getFirstIncompleteStep,
  validateStep,
  canAccessStep,
} from "@/lib/shipment/shipment-validation";
import {
  SHIPMENT_DUMMY_DATA,
  SHIPMENT_DUMMY_META,
} from "@/lib/shipment/shipment-dummy-data";

const initialData: ShipmentFormData = {
  step1: {
    contactPerson: "",
    phoneNumber: "",
    alternatePhone: "",
    email: "",
    otp: "",
  },
  step2: {
    contactPerson: "",
    email: "",
    phoneNumber: "",
    alternatePhone: "",
    addressLine: "",
    pinCode: "",
    city: "Riyadh",
  },
  step3: {
    weight: "",
    packageValue: "",
    content: "",
    length: "",
    breadth: "",
    height: "",
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

const initialMeta: ShipmentWizardMeta = {
  completedStep: 0,
  otpSent: false,
  otpVerified: false,
};

export function ShipmentCreateWizard({ step }: { step: number }) {
  const router = useRouter();
  const [formData, setFormData] = useState<ShipmentFormData>(initialData);
  const [meta, setMeta] = useState<ShipmentWizardMeta>(initialMeta);
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<string, string>>
  >({});

  useEffect(() => {
    setFormData(readShipmentDraft(initialData));
    setMeta(readShipmentMeta(initialMeta));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    writeShipmentDraft(formData);
  }, [formData, hydrated]);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    writeShipmentMeta(meta);
  }, [meta, hydrated]);

  useEffect(() => {
    if (!hydrated || step <= 1) {
      return;
    }

    const allowedStep = getFirstIncompleteStep(
      formData,
      meta.otpVerified,
      step,
    );

    if (allowedStep !== step) {
      router.replace(`/shipment/create/step-${allowedStep}`);
    }
  }, [hydrated, step, formData, meta.otpVerified, router]);

  function updateStep<K extends keyof ShipmentFormData>(
    key: K,
    field: keyof ShipmentFormData[K],
    value: string,
  ) {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[String(field)];
      return next;
    });

    if (key === "step1" && field === "email") {
      setMeta((prev) => ({
        ...prev,
        otpSent: false,
        otpVerified: false,
      }));
    }

    if (key === "step1" && field === "otp") {
      setMeta((prev) => ({
        ...prev,
        otpVerified: false,
      }));
    }

    setFormData((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  }

  async function handleSendOtp() {
    if (!formData.step1.email) return;
    setLoading(true);
    setError(null);
    try {
      await sendOtp(formData.step1.email);
      setMeta((prev) => ({ ...prev, otpSent: true }));
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : err instanceof Error
            ? err.message
            : "Failed to send OTP. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyOtp() {
    if (!formData.step1.email || !formData.step1.otp) return;
    setLoading(true);
    setError(null);
    try {
      await verifyOtp(formData.step1.email, formData.step1.otp);
      setMeta((prev) => ({ ...prev, otpVerified: true }));
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next.otp;
        return next;
      });
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : err instanceof Error
            ? err.message
            : "OTP verification failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleCalculateShipping() {
    setCalculating(true);
    setError(null);

    try {
      const result = await calculateShipping(formData.step2, formData.step3);
      setFormData((prev) => ({
        ...prev,
        step4: result,
      }));
    } catch {
      setError("Unable to calculate shipping. Please try again.");
    } finally {
      setCalculating(false);
    }
  }

  async function handleSubmit() {
    if (!formData.step4.calculated) {
      setError(SHIPMENT_STEP4.calculateFirstError);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await createShipment({
        sender: formData.step1,
        recipient: formData.step2,
        order: formData.step3,
        shipping: formData.step4,
      });

      clearShipmentDraft();
      writeShipmentSuccess(result);
      router.replace(
        `/shipment/success?awb=${encodeURIComponent(result.awbNumber)}`,
      );
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "Failed to place order. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleStepClick(targetStep: number) {
    if (targetStep === step) {
      return;
    }

    if (
      !canAccessStep(
        targetStep,
        formData,
        meta.otpVerified,
      )
    ) {
      setError("Complete previous steps before opening this step.");
      return;
    }

    setError(null);
    setFieldErrors({});
    router.push(`/shipment/create/step-${targetStep}`);
  }

  function handleLoadDemoData() {
    setFormData(SHIPMENT_DUMMY_DATA);
    setMeta(SHIPMENT_DUMMY_META);
    setFieldErrors({});
    setError(null);
  }

  function checkStepAccess(targetStep: number) {
    return canAccessStep(targetStep, formData, meta.otpVerified);
  }

  function handleNext() {
    setError(null);

    const validation = validateStep(step, formData, meta.otpVerified);
    if (!validation.valid) {
      setFieldErrors(validation.errors);
      setError("Please fill all required fields before continuing.");
      return;
    }

    setFieldErrors({});
    setMeta((prev) => ({
      ...prev,
      completedStep: Math.max(prev.completedStep, step),
    }));

    if (step < 4) {
      router.push(`/shipment/create/step-${step + 1}`);
    } else {
      handleSubmit();
    }
  }

  if (!hydrated) {
    return null;
  }

  return (
    <div className="shipment-create-page">
      <div className="shipment-create-bg" aria-hidden />

      <Container className="shipment-create-container">
        <div className="shipment-create-header">
          <h1 className="shipment-create-title">{SHIPMENT_STEP1.pageTitle}</h1>
          {isShipmentApiMock() && (
            <button
              type="button"
              onClick={handleLoadDemoData}
              className="shipment-demo-btn"
            >
              {SHIPMENT_STEP4.loadDemoData}
            </button>
          )}
        </div>

        <ShipmentStepper
          currentStep={step}
          canAccessStep={checkStepAccess}
          onStepClick={handleStepClick}
        />

        {step === 1 && (
          <ShipmentCreateStep1
            data={formData.step1}
            loading={loading}
            otpSent={meta.otpSent}
            otpVerified={meta.otpVerified}
            errors={fieldErrors}
            onChange={(field, value) => updateStep("step1", field, value)}
            onSendOtp={handleSendOtp}
            onVerifyOtp={handleVerifyOtp}
            onNext={handleNext}
          />
        )}

        {step === 2 && (
          <ShipmentCreateStep2
            data={formData.step2}
            loading={loading}
            errors={fieldErrors}
            onChange={(field, value) => updateStep("step2", field, value)}
            onNext={handleNext}
          />
        )}

        {step === 3 && (
          <ShipmentCreateStep3
            data={formData.step3}
            loading={loading}
            errors={fieldErrors}
            onChange={(field, value) => updateStep("step3", field, value)}
            onNext={handleNext}
          />
        )}

        {step === 4 && (
          <ShipmentCreateStep4
            data={formData.step4}
            loading={loading}
            calculating={calculating}
            error={error}
            onCalculate={handleCalculateShipping}
            onSubmit={handleSubmit}
          />
        )}

        {(step === 1 || step === 2 || step === 3) && error && (
          <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-action-red">
            {error}
          </p>
        )}
      </Container>
    </div>
  );
}
