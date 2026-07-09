import Image from "next/image";
import Link from "next/link";
import { ContactPageCta } from "@/components/ContactPageCta";
import {
  semHero,
  semIndustries,
  semInvestSection,
  semRelatedServices,
  semWhy,
} from "@/lib/sem-services";

export function SemServicesPage() {
  return (
    <>
      <section className="ppc-hero">
        <div className="container ppc-hero__grid">
          <div className="ppc-hero__content">
            <h1 className="ppc-hero__title">{semHero.title}</h1>
            <p className="ppc-hero__intro">{semHero.intro}</p>
            <p className="ppc-hero__intro">{semHero.introSecondary}</p>
          </div>
          <div className="ppc-hero__visual">
            <Image
              src={semHero.heroImage}
              alt="SEM services illustration"
              width={2623}
              height={2003}
              className="ppc-hero__image"
              priority
            />
          </div>
        </div>
      </section>

      <section className="ppc-why">
        <div className="container ppc-why__grid">
          <div className="ppc-why__left">
            <h2 className="ppc-why__title">{semWhy.title}</h2>
            <p className="ppc-why__lead">{semWhy.lead}</p>
            <ul className="ppc-why__list">
              {semWhy.points.map((point) => (
                <li key={point.label}>
                  <strong>{point.label}</strong> {point.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="ppc-why__cards">
            <div className="ppc-why__col">
              {semRelatedServices.slice(0, 3).map((service) => (
                <article key={service.title} className="ppc-related-card">
                  <h3 className="ppc-related-card__title">{service.title}</h3>
                  <p className="ppc-related-card__text">{service.description}</p>
                </article>
              ))}
            </div>
            <div className="ppc-why__col ppc-why__col--offset">
              {semRelatedServices.slice(3).map((service) => (
                <article key={service.title} className="ppc-related-card">
                  <h3 className="ppc-related-card__title">{service.title}</h3>
                  <p className="ppc-related-card__text">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sem-invest">
        <div className="container sem-invest__grid">
          <div className="sem-invest__visual">
            <Image
              src={semInvestSection.image}
              alt="SEM management services"
              width={2623}
              height={2003}
              className="sem-invest__image"
            />
          </div>
          <div className="sem-invest__content">
            <h2 className="sem-invest__title">{semInvestSection.title}</h2>
            {semInvestSection.paragraphs.map((paragraph) => (
              <p key={paragraph} className="sem-invest__text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="wdd-cta-wrap">
        <div className="container">
          <div className="wdd-cta-bar">
            <p className="wdd-cta-bar__text">
              Boost your rankings and drive traffic—start optimizing today!
            </p>
            <Link href="/contact-us" className="wdd-cta-bar__btn">
              Get A Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="wdd-industries">
        <div className="container">
          <h2 className="wdd-industries__title">industries we serve.</h2>
          <div className="wdd-industries__grid">
            {semIndustries.map((industry) => (
              <article key={industry.title} className="wdd-industry-box">
                <div className="wdd-industry-box__icon">
                  <Image src={industry.icon} alt="" width={56} height={56} />
                </div>
                <div className="wdd-industry-box__body">
                  <h3 className="wdd-industry-box__title">{industry.title}</h3>
                  <p className="wdd-industry-box__text">{industry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactPageCta />
    </>
  );
}
