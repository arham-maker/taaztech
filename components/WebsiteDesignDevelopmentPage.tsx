import Image from "next/image";
import Link from "next/link";
import { ContactPageCta } from "@/components/ContactPageCta";
import { ServiceFaq } from "@/components/ServiceFaq";
import {
  websiteDesignFaqs,
  websiteDesignFaqSection,
  websiteDesignHero,
  websiteDesignIndustries,
  websiteDesignServices,
  websiteDesignWhy,
} from "@/lib/website-design-development";

export function WebsiteDesignDevelopmentPage() {
  return (
    <>
      <section className="wdd-hero">
        <div className="container wdd-hero__grid">
          <div className="wdd-hero__content">
            <h1 className="wdd-hero__title">
              Website Design and
              <br />
              Development
            </h1>
            <p className="wdd-hero__intro">{websiteDesignHero.intro}</p>
            <p className="wdd-hero__intro">{websiteDesignHero.introSecondary}</p>
          </div>
          <div className="wdd-hero__visual">
            <Image
              src={websiteDesignHero.heroImage}
              alt="Professional website design and development"
              width={866}
              height={576}
              className="wdd-hero__image"
              priority
            />
          </div>
        </div>
        <div className="wdd-hero__bar" aria-hidden="true" />
      </section>

      <section className="wdd-why-services">
        <div className="container wdd-why-services__grid">
          <div className="wdd-why-services__left">
            <h2 className="wdd-why-services__title">{websiteDesignWhy.title}</h2>
            <p className="wdd-why-services__lead">{websiteDesignWhy.lead}</p>
            <ul className="wdd-why-services__list">
              {websiteDesignWhy.points.map((point) => (
                <li key={point.label}>
                  <strong>{point.label}</strong> {point.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="wdd-why-services__cards">
            <div className="wdd-why-services__col">
              {[websiteDesignServices[0], websiteDesignServices[2], websiteDesignServices[4]].map(
                (service) => (
                  <article key={service.title} className="wdd-service-card">
                    <h3 className="wdd-service-card__title">{service.title}</h3>
                    <p className="wdd-service-card__text">{service.description}</p>
                  </article>
                )
              )}
            </div>
            <div className="wdd-why-services__col wdd-why-services__col--offset">
              {[websiteDesignServices[1], websiteDesignServices[3]].map((service) => (
                <article key={service.title} className="wdd-service-card">
                  <h3 className="wdd-service-card__title">{service.title}</h3>
                  <p className="wdd-service-card__text">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceFaq
        faqs={websiteDesignFaqs}
        intro={websiteDesignFaqSection.intro}
        title={websiteDesignFaqSection.title}
        variant="wdd"
        visualImage={websiteDesignFaqSection.image}
      />

      <section className="wdd-cta-wrap">
        <div className="container">
          <div className="wdd-cta-bar">
            <p className="wdd-cta-bar__text">
              Transform your online presence—let&apos;s design your perfect website now!
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
            {websiteDesignIndustries.map((industry) => (
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
