import { Users, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";

const teamCards = [
  {
    icon: Users,
    title: "Skilled",
    label: "Expert Staff",
    labelClass: "text-[var(--about-color-cyan)]",
    offset: false,
    extraPadding: true,
  },
  {
    icon: Briefcase,
    title: "NOON",
    label: "Strategic Partner",
    labelClass: "text-[var(--about-color-red)]",
    offset: true,
    extraPadding: false,
  },
];

export function AboutTeamSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--about-color-navy)]">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_0,transparent_50%)] bg-[length:40px_40px]" />
      </div>

      <Container className="about-section relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-[var(--about-column-gap)]">
          <div className="grid grid-cols-2 gap-4">
            {teamCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm ${card.offset ? "mt-8" : ""} ${card.extraPadding ? "pb-14" : ""}`}
              >
                <card.icon className="size-10 text-white" strokeWidth={1.5} />
                <h3 className="about-card-title mt-3 text-white">
                  {card.title}
                </h3>
                <p className={`about-card-label mt-1 ${card.labelClass}`}>
                  {card.label}
                </p>
              </div>
            ))}
          </div>

          <div className="about-stack lg:pl-12">
            <p className="about-label text-[var(--about-color-cyan)]">
              Our Team
            </p>
            <h2 className="about-heading text-white">
              HIGHLY EXPERIENCED STAFF &amp; ADVANCED
              SOLUTIONS
            </h2>
            <p className="about-body-light">
              Our organization boasts highly experienced staff, offering advanced delivery solutions with efficiency and
              expertise. We cover cities in the western area and can arrange the required number of couriers. Our pre-
              planned strategies ensure efficient postal distribution, effective team management, and seamless operations
              under pressure. Prioritizing excellent customer service, we aim to achieve complete customer satisfaction, our
              ultimate goal.
            </p>
            <div className="rounded-r-lg border-l-4 border-[var(--about-color-cyan)] bg-white/5 py-6 pl-7 pr-6">
              <p className="about-body-light">
                We aim to collaborate with leading companies in the digital commerce and logistics sectors, such as{" "}
                <strong className="font-bold text-white">NOON</strong>, to earn your trust and dedicate our efforts to enhancing services. Our focus is on improving
                quality, capacity, and preserving your brand image within customer communities. By delivering
                exceptional services, we strive to strengthen your market position and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
