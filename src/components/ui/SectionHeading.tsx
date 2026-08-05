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
  hero: "text-[2.5rem] font-black leading-tight sm:text-[3rem] lg:text-[4.5rem]",
  section: "text-3xl font-black sm:text-[3rem]",
  card: "text-2xl font-black",
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
