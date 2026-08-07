import { Eye, Gem, Target } from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const identityCards = [
  {
    icon: Target,
    title: "OUR MISSION",
    accentClass: "about-core-card--mission",
    iconClass: "about-core-icon--mission",
    text: "To become the first number and the best choice in creating new opportunities and many aspects of delivery and postal services, this is represented in the best form of postal transport. Achieving a leading position in the field of providing and managing postal services by raising the level of quality and enabling our customers to view the course of the postal activity related to it according to the mechanism presented to our customers and raise the level of service from quality and performance.",
  },
  {
    icon: Eye,
    title: "OUR VISION",
    accentClass: "about-core-card--vision",
    iconClass: "about-core-icon--vision",
    text: "We proudly acknowledge that our collaboration with clients has exceeded expectations, driving us toward geographic expansion and major contracts. We dedicate full teams to ensure mutual growth and success. Committed to maintaining and enhancing work efficiency, we focus on strategic decisions to improve services and stay updated with market and technological advancements.",
  },
  {
    icon: Gem,
    title: "OUR VALUES",
    accentClass: "about-core-card--values",
    iconClass: "about-core-icon--values",
    text: "Our values focus on becoming a leading delivery service by prioritizing safety, efficiency, and innovation. We strive for complete customer satisfaction through improved services, innovative solutions, and maintaining high-quality standards. Our strategies include enhancing employee performance, fostering integrity, and creating a work environment built on honesty and excellence.",
  },
];

export function AboutCoreIdentitySection() {
  return (
    <InnerPageSection
      bgClassName="bg-background-alt"
      containerClassName="about-section"
    >
      <div className="about-core-intro">
        <span className="about-core-badge">Core Identity</span>
        <h2 className="about-core-title">
          DRIVING SUSTAINABLE
          <br />
          <span className="text-[var(--about-color-cyan)]">GROWTH</span>
        </h2>
      </div>

      <ScrollReveal stagger className="about-core-grid">
        {identityCards.map((card) => (
          <article
            key={card.title}
            className={`motion-card motion-card--top-accent about-core-card ${card.accentClass}`}
          >
            <div className={`about-core-icon ${card.iconClass}`}>
              <card.icon className="size-8" strokeWidth={1.75} />
            </div>
            <h3 className="about-core-card-title">{card.title}</h3>
            <p className="about-core-card-body">{card.text}</p>
          </article>
        ))}
      </ScrollReveal>
    </InnerPageSection>
  );
}
