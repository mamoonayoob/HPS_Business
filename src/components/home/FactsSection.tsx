import { Phone, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconBox } from "@/components/ui/IconBox";

export function FactsSection() {
  return (
    <section className="home-section--facts">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="home-section-label-line bg-action-red" />
              <p className="home-section-label text-action-red">Some Facts</p>
            </div>
            <h2 className="home-section-heading">
              #1 PLACE TO MANAGE
              <br />
              ALL SHIPMENTS
            </h2>
            <p className="home-section-lead">
              Effortlessly manage all your shipments with HPS Logistics &amp;
              Delivery. Streamline operations, track packages, and ensure
              reliable, on-time delivery.
            </p>
            <div className="flex items-center gap-3 sm:gap-5 rounded-xl border border-border-light bg-white p-4 sm:p-6 shadow-sm">
              <IconBox icon={Phone} variant="red" size="xl" />
              <div className="min-w-0">
                <p className="home-stat-label">Call for any query!</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-black text-primary-navy">
                  +966 9200 14641
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { value: "50k+", label: "Happy Clients", bg: "bg-primary-navy" },
                { value: "120k+", label: "Shipments", bg: "bg-secondary-cyan" },
                { value: "40k+", label: "Reviews", bg: "bg-action-red" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.bg} rounded-xl p-3 sm:p-5 text-center text-white`}
                >
                  <p className="home-fact-stat-value">{item.value}</p>
                  <p className="home-fact-stat-label">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:gap-6 rounded-2xl border border-border-light bg-background-alt p-5 sm:p-8 sm:grid-cols-2">
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
                  <p className="flex items-center gap-2 home-section-card-title">
                    <CheckCircle2 className="size-5 text-secondary-cyan" />
                    {item.title}
                  </p>
                  <p className="mt-2 home-section-card-body">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
