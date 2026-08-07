import Image from "next/image";
import { PARTNERS } from "@/config/partners";

function LogoTrack({ idPrefix }: { idPrefix: string }) {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12">
      {PARTNERS.map((partner, index) => (
        <div
          key={`${idPrefix}-${partner.name}-${index}`}
          className="relative h-[41px] w-[180px] shrink-0 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain object-center"
            sizes="180px"
          />
        </div>
      ))}
    </div>
  );
}

export function PartnersMarquee() {
  return (
    <div className="partners-marquee relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

      <div className="partners-marquee-track flex w-max items-center">
        <LogoTrack idPrefix="a" />
        <div aria-hidden>
          <LogoTrack idPrefix="b" />
        </div>
      </div>
    </div>
  );
}
