import { Phone, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function FactsSection() {
  return (
    <section className="border-y border-border-light bg-white py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-12 bg-action-red" />
              <p className="text-base font-bold uppercase tracking-[0.1em] text-action-red">
                Some Facts
              </p>
            </div>
            <h2 className="text-3xl font-black leading-tight text-dark-text sm:text-[3rem] sm:leading-[3rem]">
              #1 PLACE TO MANAGE
              <br />
              ALL SHIPMENTS
            </h2>
            <p className="text-lg leading-7 text-muted-text">
              Effortlessly manage all your shipments with HPS Logistics &amp;
              Delivery. Streamline operations, track packages, and ensure
              reliable, on-time delivery.
            </p>
            <div className="flex items-center gap-5 rounded-xl border border-border-light bg-white p-6 shadow-sm">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-action-red">
                <Phone className="size-8 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted-text">
                  Call for any query!
                </p>
                <p className="text-2xl font-black text-primary-navy">
                  +966 9200 14641
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "50k+", label: "Happy Clients", bg: "bg-primary-navy" },
                { value: "120k+", label: "Shipments", bg: "bg-secondary-cyan" },
                { value: "40k+", label: "Reviews", bg: "bg-action-red" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.bg} rounded-xl p-5 text-center text-white`}
                >
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wide text-white/80">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 rounded-2xl border border-border-light bg-background-alt p-8 sm:grid-cols-2">
              {[
                {
                  title: "Reliable & Efficient",
                  text: "End to end reliable customized solutions whether you're a small business or multinational.",
                },
                {
                  title: "Professional Fleet",
                  text: "A huge professional fleet of GPS enabled vehicles ensuring enhanced customer experience.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="flex items-center gap-2 text-lg font-black text-dark-text">
                    <CheckCircle2 className="size-5 text-secondary-cyan" />
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-text">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
