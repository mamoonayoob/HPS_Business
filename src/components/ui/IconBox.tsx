import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ICON_BRAND_VARIANTS = ["cyan", "navy", "red"] as const;

export type IconBrandVariant = (typeof ICON_BRAND_VARIANTS)[number];

export type IconBoxVariant =
  | IconBrandVariant
  | "soft"
  | "solid-cyan"
  | "solid-navy"
  | "solid-red"
  | "on-dark";

export type IconBoxSize = "sm" | "md" | "lg" | "xl";

type IconBoxProps = {
  icon: LucideIcon;
  variant?: IconBoxVariant;
  size?: IconBoxSize;
  className?: string;
  iconClassName?: string;
  strokeWidth?: number;
};

export function getIconVariant(index: number): IconBrandVariant {
  return ICON_BRAND_VARIANTS[index % ICON_BRAND_VARIANTS.length];
}

export function IconBox({
  icon: Icon,
  variant = "soft",
  size = "lg",
  className,
  iconClassName,
  strokeWidth = 2,
}: IconBoxProps) {
  return (
    <div
      className={cn("icon-box", `icon-box--${size}`, `icon-box--${variant}`, className)}
    >
      <Icon className={cn("icon-box__glyph", iconClassName)} strokeWidth={strokeWidth} />
    </div>
  );
}
