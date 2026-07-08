import Image from "next/image";
import { clientLogos } from "@/lib/data";

export function ClientLogos() {
  return (
    <section className="client-logos" aria-label="Client logos">
      <div className="client-logos__track">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div key={`${logo.src}-${index}`} className="client-logos__item">
            <Image src={logo.src} alt={logo.alt} width={180} height={72} />
          </div>
        ))}
      </div>
    </section>
  );
}
