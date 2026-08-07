import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  accent?: "cyan" | "red";
};

export function SectionLabel({
  children,
  className,
  accent = "cyan",
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-bold uppercase tracking-[0.1em]",
        accent === "cyan" ? "text-secondary-cyan" : "text-action-red",
        className,
      )}
    >
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: "hero" | "section" | "card";
};

const sizeClasses = {
  hero: "text-[1.75rem] font-black leading-tight sm:text-[2rem] lg:text-[2.75rem]",
  section: "text-xl font-black sm:text-2xl lg:text-[1.75rem]",
  card: "text-lg font-black sm:text-xl",
};

export function SectionHeading({
  children,
  as: Tag = "h2",
  className,
  size = "section",
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "text-dark-text",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
