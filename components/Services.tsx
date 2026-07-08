import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";
import { SemIcon } from "./SemIcon";

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">
            Services
            <br />
            We Offer
          </h2>

          <div className="services__copy">
            <h3 className="services__subtitle">That Guarantee Real Results!</h3>
            <p className="services__intro">
              As a full-service custom software development agency, our mobile and web
              development, combined with flawless digital marketing, have helped clients
              achieve 52–74% increases in conversion rates, 40%+ improvements in organic
              visibility, and a measurable boost in revenue. Experience what it&apos;s like
              to work with an award-winning team that&apos;s genuinely invested in your
              long-term success.
            </p>
          </div>

          <Link href="#services-grid" className="services__badge" aria-label="See more services">
            <Image
              src="/images/circle-animation-1.png"
              alt=""
              width={140}
              height={140}
              className="services__badge-image"
            />
          </Link>
        </div>

        <div className="services__grid" id="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card__icon">
                {"customIcon" in service && service.customIcon === "sem" ? (
                  <>
                    <SemIcon className="service-card__icon-default service-card__icon-svg" />
                    <SemIcon className="service-card__icon-hover service-card__icon-svg service-card__icon-svg--hover" />
                  </>
                ) : (
                  <>
                    <Image
                      src={service.icon!}
                      alt=""
                      width={48}
                      height={48}
                      className="service-card__icon-default"
                    />
                    <Image
                      src={service.iconHover!}
                      alt=""
                      width={48}
                      height={48}
                      className="service-card__icon-hover"
                    />
                  </>
                )}
              </div>
              <h4 className="service-card__title">{service.title}</h4>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
