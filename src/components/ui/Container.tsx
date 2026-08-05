import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Centered content band — equal left/right gutter, aligned with header logo.
 * Outer margin grows automatically on wide screens via mx-auto + max-width.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--site-max-width)] px-[var(--site-gutter)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
