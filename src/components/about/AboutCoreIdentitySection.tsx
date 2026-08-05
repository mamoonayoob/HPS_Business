import { Target, Eye, Gem } from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";

const identityCards = [
  {
    icon: Target,
    title: "Our Mission",
    borderColor: "border-[var(--about-color-cyan)]",
    text: "To become the first number and the best choice in creating new opportunities and many aspects of delivery and postal services, this is represented in the best form of postal transport. Achieving a leading position in the field of providing and managing postal services by raising the level of quality and enabling our customers to view the course of the postal activity related to it according to the mechanism presented to our customers and raise the level of service from quality and performance.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    borderColor: "border-[var(--about-color-navy)]",
    text: "We proudly acknowledge that our collaboration with clients has exceeded expectations, driving us toward geographic expansion and major contracts. We dedicate full teams to ensure mutual growth and success. Committed to maintaining and enhancing work efficiency, we focus on strategic decisions to improve services and stay updated with market and technological advancements.",
  },
  {
    icon: Gem,
    title: "Our Values",
    borderColor: "border-[var(--about-color-red)]",
    text: "Our values focus on becoming a leading delivery service by prioritizing safety, efficiency, and innovation. We strive for complete customer satisfaction through improved services, innovative solutions, and maintaining high-quality standards. Our strategies include enhancing employee performance, fostering integrity, and creating a work environment built on honesty and excellence.",
  },
];

export function AboutCoreIdentitySection() {
  return (
    <InnerPageSection bgClassName="bg-white" containerClassName="about-section">
      <div className="about-stack mx-auto mb-16 max-w-3xl items-center text-center">
        <span className="about-label-pill inline-block rounded-full border border-[rgba(46,49,147,0.2)] bg-white px-4 py-1.5 text-[var(--about-color-navy)] shadow-sm">
          Core Identity
        </span>
        <h2 className="about-display">
          DRIVING SUSTAINABLE
          <br />
          <span className="text-[var(--about-color-cyan)]">GROWTH</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {identityCards.map((card) => (
          <article
            key={card.title}
            className={`flex flex-col rounded-xl border border-gray-100 border-t-4 bg-white px-8 pb-8 pt-9 shadow-[0_10px_15px_rgba(0,0,0,0.03)] ${card.borderColor}`}
          >
            <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-gray-100 bg-background-alt shadow-inner">
              <card.icon
                className="size-8 text-[var(--about-color-navy)]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="about-card-heading mb-4">{card.title}</h3>
            <p className="about-body-sm">{card.text}</p>
          </article>
        ))}
      </div>
    </InnerPageSection>
  );
}
