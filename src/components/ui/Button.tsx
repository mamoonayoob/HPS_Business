import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "navy";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  showArrow?: boolean;
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-action-red text-white shadow-[0_5px_7.5px_rgba(255,59,49,0.3)] hover:bg-[#e6352c]",
  secondary:
    "bg-primary-navy text-white shadow-md hover:bg-[#172574]",
  navy: "bg-primary-navy text-white shadow-md hover:bg-[#172574]",
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className,
  disabled,
  showArrow,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-black uppercase tracking-[0.1em] transition-colors disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="size-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
