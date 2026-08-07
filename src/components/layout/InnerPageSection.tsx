import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type InnerPageSectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bgClassName?: string;
  id?: string;
  /** Fade-in when section enters viewport. Off for heroes above the fold. */
  reveal?: boolean;
};

/**
 * Full-width section with content aligned to the header logo via Container.
 */
export function InnerPageSection({
  children,
  className,
  containerClassName,
  bgClassName,
  id,
  reveal = true,
}: InnerPageSectionProps) {
  const content = reveal ? (
    <ScrollReveal>{children}</ScrollReveal>
  ) : (
    children
  );

  return (
    <section id={id} className={cn(bgClassName, className)}>
      <Container className={containerClassName}>{content}</Container>
    </section>
  );
}
