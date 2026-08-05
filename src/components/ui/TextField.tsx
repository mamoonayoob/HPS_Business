import { cn } from "@/lib/utils";

type FieldSize = "default" | "compact";

type TextFieldProps = {
  label?: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
  className?: string;
  required?: boolean;
  size?: FieldSize;
  hideLabel?: boolean;
};

const sizeClasses: Record<FieldSize, string> = {
  default: "h-11 px-4 text-[15px] rounded-lg",
  compact: "h-11 px-5 text-[15px] rounded-lg",
};

export function TextField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  trailing,
  className,
  required,
  size = "default",
  hideLabel = false,
}: TextFieldProps) {
  const showLabel = label && !hideLabel;

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {showLabel && (
        <label
          htmlFor={id}
          className="text-xs font-bold uppercase tracking-[0.05em] text-muted-text"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={cn(
            "w-full border border-[#e2e8f0] bg-[#f8fafc] font-medium text-dark-text placeholder:text-[#94a3b8] outline-none transition-colors focus:border-secondary-cyan",
            sizeClasses[size],
            icon ? "pl-11 pr-4" : "",
            trailing && "pr-11",
          )}
        />
        {icon && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-text">
            {icon}
          </span>
        )}
        {trailing && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            {trailing}
          </span>
        )}
      </div>
    </div>
  );
}

type FormInputProps = {
  id: string;
  placeholder: string;
  type?: string;
  className?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
};

/** Placeholder-only fields used in quote section (matches Figma — no visible labels). */
export function FormInput({
  id,
  placeholder,
  type = "text",
  className,
  as = "input",
  options,
}: FormInputProps) {
  const baseClass =
    "w-full border border-[#e5e7eb] bg-[#f8fafc] px-5 text-[15px] font-medium text-dark-text placeholder:text-[#9ca3af] outline-none focus:border-secondary-cyan rounded-lg";

  if (as === "textarea") {
    return (
      <textarea
        id={id}
        placeholder={placeholder}
        rows={4}
        className={cn(baseClass, "min-h-[120px] resize-none py-4", className)}
      />
    );
  }

  if (as === "select") {
    return (
      <select
        id={id}
        defaultValue=""
        className={cn(baseClass, "h-11 appearance-none py-2", className)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={cn(baseClass, "h-11 py-2", className)}
    />
  );
}
