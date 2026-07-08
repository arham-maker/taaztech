import Image from "next/image";
import { partnerLogos } from "@/lib/data";

export function PartnerLogos() {
  return (
    <section className="partner-logos" aria-label="Awards and partners">
      <div className="container partner-logos__grid">
        {partnerLogos.map((logo) => (
          <div key={logo.alt} className="partner-logos__item">
            <Image src={logo.src} alt={logo.alt} width={100} height={50} />
          </div>
        ))}
      </div>
    </section>
  );
}
