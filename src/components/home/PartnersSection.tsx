import { Container } from "@/components/ui/Container";
import { PartnersMarquee } from "./PartnersMarquee";

export function PartnersSection() {
  return (
    <section className="border-y border-gray-100 bg-white py-16">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-base font-bold uppercase tracking-[0.1em] text-secondary-cyan">
            Our Partners
          </p>
          <h2 className="mt-2 text-3xl font-black text-dark-text lg:text-[2.25rem] lg:leading-10">
            Our Prestigious Clients
          </h2>
        </div>
      </Container>

      <PartnersMarquee />
    </section>
  );
}
