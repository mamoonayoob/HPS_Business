import Image from "next/image";
import { Globe, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { IconBox } from "@/components/ui/IconBox";

export function AboutSection() {
  return (
    <section className="home-section">
      <Container>
        <ScrollReveal className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="home-about-visual-group motion-image-group relative">
            <div className="home-about-visual motion-image-wrap">
              <Image
                src="/images/about-logistics.png"
                alt="Logistics operations at port"
                width={720}
                height={450}
                className="motion-image home-about-visual-img"
              />
            </div>
            <div className="home-experience-badge">
              <span className="home-experience-number">15</span>
              <span className="home-experience-text">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="home-section-label-line bg-secondary-cyan" />
              <p className="home-section-label text-secondary-cyan">About Us</p>
            </div>

            <h2 className="home-section-heading">
              QUICK TRANSPORT &amp;
              <br />
              <span className="text-primary-navy">LOGISTICS SOLUTIONS</span>
            </h2>

            <div className="rounded-lg border-l-4 border-action-red bg-background-alt px-7 py-6">
              <p className="home-section-body">
                High Performance Service Est. (HPS) provides delivery services to
                freight companies and provides the best leading competencies in
                this field. We have groups of skilled and experienced couriers
                appointed according to the required competencies and quality.
              </p>
            </div>

            <div className="grid gap-8 pt-2 sm:grid-cols-2">
              <div>
                <IconBox icon={Globe} variant="soft" size="lg" className="mb-3" />
                <h3 className="home-section-card-title">Global Coverage</h3>
                <p className="mt-2 home-section-card-body">
                  Reliable delivery solutions with skilled couriers worldwide.
                </p>
              </div>
              <div>
                <IconBox icon={Clock} variant="soft" size="lg" className="mb-3" />
                <h3 className="home-section-card-title">On Time Delivery</h3>
                <p className="mt-2 home-section-card-body">
                  Ensured on-time delivery with our reliable logistics network.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
