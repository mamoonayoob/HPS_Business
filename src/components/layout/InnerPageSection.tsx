import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type InnerPageSectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bgClassName?: string;
  id?: string;
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
}: InnerPageSectionProps) {
  return (
    <section id={id} className={cn(bgClassName, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
