import Link from "next/link";
import { img } from "@/lib/images";

export function ContactPageCta() {
  return (
    <section
      className="contact-page-cta"
      style={{
        backgroundImage: `url(${img("dark-illustration-background-1-1.png")})`,
      }}
    >
      <div className="container contact-page-cta__content">
        <h2 className="contact-page-cta__title">Ignite your potential!</h2>
        <p className="contact-page-cta__subtitle">
          Unleash your vision with bold, innovative solutions.
        </p>
        <Link href="/#services" className="btn btn--hero contact-page-cta__btn">
          Explore More
        </Link>
      </div>
    </section>
  );
}
