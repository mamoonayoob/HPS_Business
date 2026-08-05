import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: Props) {
  return (
    <InnerPageSection containerClassName="py-20">
      <SectionHeading size="section" className="mb-4">
        {title}
      </SectionHeading>
      <p className="max-w-xl text-lg text-muted-text">{description}</p>
    </InnerPageSection>
  );
}
