import Image from "next/image";
import { Quote, MapPin } from "lucide-react";
import { InnerPageSection } from "@/components/layout/InnerPageSection";

export function AboutProfileSection() {
  return (
    <InnerPageSection
      bgClassName="overflow-x-hidden bg-white"
      containerClassName="about-section"
    >
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-[var(--about-column-gap)]">
        <div className="about-stack min-w-0">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-12 shrink-0 bg-[var(--about-color-red)]" />
            <p className="about-label text-[var(--about-color-red)]">
              Our Profile
            </p>
          </div>

          <h2 className="about-heading text-[var(--about-color-text)]">
            LEADING COMPETENCIES IN
            <br />
            FREIGHT &amp; DELIVERY SERVICES
          </h2>

          <div className="about-body-stack pt-[15px] pb-6">
            <p className="about-body">
              <span className="about-body-bold">
                High Performance Service Est. (HPS)
              </span>{" "}
              provides delivery services to freight companies and provide the
              best leading competencies in this field. We also have numbers and
              groups of skilled and experience couriers in the same field, and
              then they are appointed according to the required competencies and
              quality in Representing the beneficiary company in the best way, in
              order to satisty customer of our dealers and the credibility in
              the delivery promises.
            </p>
            <p className="about-body">
              The Foundation also provides to all its customers the best
              solution in raising the level of distribution in terms of quality
              and speed, tracking them by the site, and managing them at any
              time.
            </p>
            <p className="about-body">
              The establishment has a group of distinguished memberships of car
              rental companies and the possibility of providing them as soon as
              needed in a manner that suits the type and amount of mail attached
              to the supply from the various distribution channels and work on
              the speed of completion in a manner that matches the goals of the
              institution.
            </p>
          </div>

          <div className="flex gap-5 rounded-xl border-l-4 border-[var(--about-color-navy)] bg-[var(--background-alt)] py-6 pl-7 pr-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
              <Quote className="size-5 text-[var(--about-color-cyan)]" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <p className="about-quote">
                &ldquo;Credibility in the delivery promises is our core
                standard.&rdquo;
              </p>
              <p className="about-quote-name mt-3">Fahad Ahmed Al Harthi</p>
              <p className="about-quote-role">CEO, HPS Logistics</p>
            </div>
          </div>
        </div>

        <div className="about-profile-visual">
          <div className="about-profile-visual-accent" aria-hidden />

          <div className="about-profile-visual-frame">
            <div className="about-profile-visual-media">
              <Image
                src="/images/about/profile-delivery.png"
                alt="HPS delivery professional loading packages"
                fill
                className="object-cover object-[center_22%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="about-profile-visual-overlay" aria-hidden />

              <div className="about-profile-visual-card">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[var(--about-color-cyan)] p-3">
                  <MapPin className="size-6 text-white" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="about-card-title text-white">Extensive Network</p>
                  <p className="about-body-sm text-white/85">
                    Managing precise tracking systems globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InnerPageSection>
  );
}
