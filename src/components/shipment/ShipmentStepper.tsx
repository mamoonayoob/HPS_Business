import { Calendar, Check, FileText, Truck, User } from "lucide-react";
import { SHIPMENT_CREATE_STEPS } from "@/config/shipment-create";
import { cn } from "@/lib/utils";

const stepIcons = [Truck, User, FileText, Calendar] as const;

type Props = {
  currentStep: number;
  canAccessStep: (stepId: number) => boolean;
  onStepClick: (stepId: number) => void;
};

export function ShipmentStepper({
  currentStep,
  canAccessStep,
  onStepClick,
}: Props) {
  const progressPercent =
    currentStep <= 1
      ? 0
      : ((currentStep - 1) / (SHIPMENT_CREATE_STEPS.length - 1)) * 100;

  return (
    <div className="shipment-stepper">
      <div className="shipment-stepper-track" aria-hidden>
        <div
          className="shipment-stepper-progress"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="shipment-stepper-steps">
        {SHIPMENT_CREATE_STEPS.map((step, index) => {
          const Icon = stepIcons[index];
          const isActive = step.id === currentStep;
          const isComplete = step.id < currentStep;
          const isAccessible = canAccessStep(step.id);
          const isClickable = isAccessible && !isActive;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => isClickable && onStepClick(step.id)}
              disabled={!isClickable}
              aria-current={isActive ? "step" : undefined}
              aria-label={`${step.stepLabel}: ${step.title}${isClickable ? "" : isActive ? " (current)" : " (locked)"
                }`}
              className={cn(
                "shipment-stepper-item",
                isClickable && "shipment-stepper-item--clickable",
                !isAccessible && !isActive && "shipment-stepper-item--locked",
              )}
            >
              <div
                className={cn(
                  "shipment-stepper-icon",
                  isActive &&
                  currentStep === 1 &&
                  "shipment-stepper-icon--active",
                  isActive &&
                  currentStep > 1 &&
                  "shipment-stepper-icon--active-filled",
                  !isActive && !isComplete && "shipment-stepper-icon--inactive",
                  isComplete && "shipment-stepper-icon--complete",
                )}
              >
                {isComplete ? (
                  <Check className="size-5" strokeWidth={2.5} />
                ) : (
                  <Icon className="size-5" strokeWidth={1.75} />
                )}
              </div>

              <div className="shipment-stepper-copy">
                <p
                  className={cn(
                    "shipment-stepper-label",
                    isActive && "shipment-stepper-label--active",
                    isComplete && "shipment-stepper-label--complete",
                    !isActive &&
                    !isComplete &&
                    "shipment-stepper-label--inactive",
                  )}
                >
                  {step.stepLabel}
                </p>
                <p
                  className={cn(
                    "shipment-stepper-title",
                    isActive && "shipment-stepper-title--active",
                    isComplete && "shipment-stepper-title--complete",
                    !isActive &&
                    !isComplete &&
                    "shipment-stepper-title--inactive",
                  )}
                >
                  {step.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
