import { Truck, Users, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

const solutions = [
  {
    icon: Truck,
    iconBg: "bg-primary-navy border-secondary-cyan/30",
    borderTop: "border-secondary-cyan",
    title: "Reliable & Efficient Delivery",
    description:
      "We provide end to end reliable and customised logistics solutions tailored precisely to your operational requirements.",
  },
  {
    icon: Users,
    iconBg: "bg-secondary-cyan border-primary-navy/30",
    borderTop: "border-action-red",
    title: "Enhanced Customer Experience",
    description:
      "HPS provides an enhanced customer experience with complete, transparent, and seamless logistics solutions.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-action-red border-red-400/30",
    borderTop: "border-secondary-cyan",
    title: "Professional Delivery Fleet",
    description:
      "We have a huge professional fleet of GPS enabled vehicles ensuring tracking, safety, and speed at every step.",
  },
];

export function SolutionsSection() {
  return (
    <section className="bg-hero-dark py-12 md:py-16 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 sm:gap-3 rounded border border-secondary-cyan/30 bg-secondary-cyan/10 px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="size-2 rounded-full bg-secondary-cyan" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.08em] text-secondary-cyan">
              Customized Solutions
            </span>
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-black text-white lg:text-[3rem] lg:leading-tight">
            Customized Logistics
            <br />
            <span className="text-secondary-cyan">Solutions from HPS</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 text-gray-300">
            Whether you&apos;re a small business or a multinational corporation,
            HPS Logistics is your trusted partner for all your transportation
            and logistics needs.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {solutions.map((item) => (
            <article
              key={item.title}
              className={`relative overflow-hidden rounded-2xl border-t-4 bg-[#151b3d] px-5 pb-6 pt-7 sm:px-8 sm:pb-8 sm:pt-9 shadow-lg ${item.borderTop}`}
            >
              <div
                className={`mb-3 sm:mb-4 flex size-12 sm:size-16 items-center justify-center rounded-xl border ${item.iconBg}`}
              >
                <item.icon className="size-6 sm:size-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-[26px] text-gray-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
