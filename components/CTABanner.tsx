import Link from "next/link";
import { img } from "@/lib/images";

export function CTABanner() {
  return (
    <section
      className="cta-banner"
      style={{
        backgroundImage: `url(${img("dark-illustration-background-1-1.png")})`,
      }}
    >
      <div className="container cta-banner__content">
        <h2 className="cta-banner__title">
          <span className="cta-banner__line">
            Insights That Drive{" "}
            <span className="cta-banner__accent">Success,</span>
          </span>
          <span className="cta-banner__line">
            <span className="cta-banner__accent">Passion That Fuels</span>{" "}
            Innovation.
          </span>
        </h2>
        <Link href="/contact-us" className="btn btn--hero cta-banner__btn">
          Explore More
        </Link>
      </div>
    </section>
  );
}
