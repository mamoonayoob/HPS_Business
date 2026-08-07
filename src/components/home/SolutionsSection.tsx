import { Truck, Users, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IconBox } from "@/components/ui/IconBox";

const solutions = [
  {
    icon: Truck,
    variant: "solid-navy" as const,
    accentClass: "motion-card--accent-cyan",
    title: "Reliable & Efficient Delivery",
    description:
      "We provide end to end reliable and customised logistics solutions tailored precisely to your operational requirements.",
  },
  {
    icon: Users,
    variant: "solid-cyan" as const,
    accentClass: "motion-card--accent-red",
    title: "Enhanced Customer Experience",
    description:
      "HPS provides an enhanced customer experience with complete, transparent, and seamless logistics solutions.",
  },
  {
    icon: ShieldCheck,
    variant: "solid-red" as const,
    accentClass: "motion-card--accent-cyan",
    title: "Professional Delivery Fleet",
    description:
      "We have a huge professional fleet of GPS enabled vehicles ensuring tracking, safety, and speed at every step.",
  },
];

export function SolutionsSection() {
  return (
    <section className="home-section home-section--dark">
      <Container>
        <ScrollReveal>
          <div className="mx-auto mb-8 sm:mb-10 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded border border-secondary-cyan/30 bg-secondary-cyan/10 px-3 py-1.5">
              <span className="size-2 rounded-full bg-secondary-cyan" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.08em] text-secondary-cyan">
                Customized Solutions
              </span>
            </span>
            <h2 className="home-section-heading home-section-heading--light mt-4">
              Customized Logistics
              <br />
              <span className="text-secondary-cyan">Solutions from HPS</span>
            </h2>
            <p className="home-section-lead mt-3">
              Whether you&apos;re a small business or a multinational corporation,
              HPS Logistics is your trusted partner for all your transportation
              and logistics needs.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger className="grid gap-6 lg:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.title}
              className={`motion-card motion-card--top-accent ${item.accentClass} relative overflow-hidden rounded-2xl bg-[#151b3d] px-5 pb-6 pt-6 sm:px-6 sm:pb-7 sm:pt-7 shadow-lg`}
            >
              <IconBox
                icon={item.icon}
                variant={item.variant}
                size="xl"
                className="mb-3"
              />
              <h3 className="home-section-card-title">{item.title}</h3>
              <p className="home-section-card-body mt-3">
                {item.description}
              </p>
            </article>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
