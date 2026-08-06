"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ShipmentStepper } from "./ShipmentStepper";
import { ShipmentCreateStep1 } from "./ShipmentCreateStep1";
import { ShipmentCreateStep2 } from "./ShipmentCreateStep2";
import { ShipmentCreateStep3 } from "./ShipmentCreateStep3";
import { ShipmentCreateStep4 } from "./ShipmentCreateStep4";
import { ShipmentCreateSkeleton } from "./ShipmentCreateSkeleton";
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
import { parseShipmentStep } from "@/lib/shipment/shipment-step";

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

export function ShipmentCreateWizard() {
  const router = useRouter();
  const pathname = usePathname();
  const step = parseShipmentStep(pathname);
  const [formData, setFormData] = useState<ShipmentFormData>(initialData);
  const [meta, setMeta] = useState<ShipmentWizardMeta>(initialMeta);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<string, string>>
  >({});
  const skipNextPersist = useRef(true);

  useEffect(() => {
    setFormData(readShipmentDraft(initialData));
    setMeta(readShipmentMeta(initialMeta));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (skipNextPersist.current) {
      skipNextPersist.current = false;
      return;
    }

    const timer = window.setTimeout(() => {
      writeShipmentDraft(formData);
    }, 120);

    return () => window.clearTimeout(timer);
  }, [formData, ready]);

  useEffect(() => {
    if (!ready) {
      return;
    }

    writeShipmentMeta(meta);
  }, [meta, ready]);

  useEffect(() => {
    if (!ready || step <= 1) {
      return;
    }

    const allowedStep = getFirstIncompleteStep(
      formData,
      meta.otpVerified,
      step,
    );

    if (allowedStep !== step) {
      router.replace(`/shipment/create/step-${allowedStep}`, { scroll: false });
    }
  }, [ready, step, formData, meta.otpVerified, router]);

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
    router.push(`/shipment/create/step-${targetStep}`, { scroll: false });
  }

  function handleLoadDemoData() {
    setFormData(SHIPMENT_DUMMY_DATA);
    setMeta(SHIPMENT_DUMMY_META);
    writeShipmentDraft(SHIPMENT_DUMMY_DATA);
    writeShipmentMeta(SHIPMENT_DUMMY_META);
    skipNextPersist.current = true;
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
      router.push(`/shipment/create/step-${step + 1}`, { scroll: false });
    } else {
      handleSubmit();
    }
  }

  if (!ready) {
    return <ShipmentCreateSkeleton />;
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
