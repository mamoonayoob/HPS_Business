import Image from "next/image";
import { Globe, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-gray-100 p-2 shadow-lg">
              <Image
                src="/images/about-logistics.png"
                alt="Logistics operations at port"
                width={720}
                height={450}
                className="h-[400px] w-full rounded-xl object-cover lg:h-[450px]"
              />
            </div>
            <div className="absolute -bottom-4 right-4 flex items-center gap-4 rounded-xl border border-gray-100 bg-white px-6 py-5 shadow-xl">
              <span className="text-5xl font-black text-action-red">15</span>
              <span className="text-sm font-bold uppercase leading-tight tracking-wide text-dark-text">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-12 bg-secondary-cyan" />
              <p className="text-base font-bold uppercase tracking-[0.1em] text-secondary-cyan">
                About Us
              </p>
            </div>

            <h2 className="text-3xl font-black leading-tight text-dark-text sm:text-[3rem] sm:leading-[3rem]">
              QUICK TRANSPORT &amp;
              <br />
              <span className="text-primary-navy">LOGISTICS SOLUTIONS</span>
            </h2>

            <div className="rounded-lg border-l-4 border-action-red bg-background-alt px-7 py-6">
              <p className="text-base leading-[26px] text-muted-text">
                High Performance Service Est. (HPS) provides delivery services to
                freight companies and provides the best leading competencies in
                this field. We have groups of skilled and experienced couriers
                appointed according to the required competencies and quality.
              </p>
            </div>

            <div className="grid gap-8 pt-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 flex size-14 items-center justify-center rounded-lg border border-gray-100 bg-background-alt">
                  <Globe className="size-7 text-secondary-cyan" />
                </div>
                <h3 className="text-lg font-black text-dark-text">
                  Global Coverage
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-text">
                  Worldwide network spanning 150+ hubs and 52 cargo airports.
                </p>
              </div>
              <div>
                <div className="mb-3 flex size-14 items-center justify-center rounded-lg border border-gray-100 bg-background-alt">
                  <Clock className="size-7 text-secondary-cyan" />
                </div>
                <h3 className="text-lg font-black text-dark-text">
                  On Time Delivery
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-text">
                  GPS-enabled fleet ensuring reliable, on-time promises globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
