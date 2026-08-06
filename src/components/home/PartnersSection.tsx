import { Container } from "@/components/ui/Container";
import { PartnersMarquee } from "./PartnersMarquee";

export function PartnersSection() {
  return (
    <section className="home-section--partners">
      <Container>
        <div className="mb-10 text-center">
          <p className="home-section-label text-secondary-cyan">Our Partners</p>
          <h2 className="home-section-heading mt-2">
            Our Prestigious Clients
          </h2>
        </div>
      </Container>

      <PartnersMarquee />
    </section>
  );
}
