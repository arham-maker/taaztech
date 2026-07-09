import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ContactPageCta } from "@/components/ContactPageCta";
import { ServiceFaq } from "@/components/ServiceFaq";
import {
  ppcCampaignSection,
  ppcFaqs,
  ppcHero,
  ppcIndustries,
  ppcRelatedServices,
  ppcWhy,
} from "@/lib/ppc";

export function PpcPage() {
  return (
    <>
      <section className="ppc-hero">
        <div className="container ppc-hero__grid">
          <div className="ppc-hero__content">
            <h1 className="ppc-hero__title">{ppcHero.title}</h1>
            <p className="ppc-hero__intro">{ppcHero.intro}</p>
            <p className="ppc-hero__intro">{ppcHero.introSecondary}</p>
            <p className="ppc-hero__intro">{ppcHero.introTertiary}</p>
          </div>
          <div className="ppc-hero__visual">
            <Image
              src={ppcHero.heroImage}
              alt="Development"
              width={2501}
              height={2501}
              className="ppc-hero__image"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mad-query-section">
        <div className="container">
          <div className="mad-query-card">
            <h3 className="mad-query-card__title">Get Your Query.!</h3>
            <ContactForm variant="query" />
          </div>
        </div>
      </section>

      <section className="ppc-why">
        <div className="container ppc-why__grid">
          <div className="ppc-why__left">
            <h2 className="ppc-why__title">{ppcWhy.title}</h2>
            <p className="ppc-why__lead">{ppcWhy.lead}</p>
            <ul className="ppc-why__list">
              {ppcWhy.points.map((point) => (
                <li key={point.label}>
                  <strong>{point.label}</strong> {point.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="ppc-why__cards">
            <div className="ppc-why__col">
              {ppcRelatedServices.slice(0, 3).map((service) => (
                <article key={service.title} className="ppc-related-card">
                  <h3 className="ppc-related-card__title">{service.title}</h3>
                  <p className="ppc-related-card__text">{service.description}</p>
                </article>
              ))}
            </div>
            <div className="ppc-why__col ppc-why__col--offset">
              {ppcRelatedServices.slice(3).map((service) => (
                <article key={service.title} className="ppc-related-card">
                  <h3 className="ppc-related-card__title">{service.title}</h3>
                  <p className="ppc-related-card__text">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceFaq
        faqs={ppcFaqs}
        intro={ppcCampaignSection.intro}
        title={ppcCampaignSection.title}
        variant="ppc"
        visualImage={ppcCampaignSection.image}
      />

      <section className="wdd-cta-wrap">
        <div className="container">
          <div className="wdd-cta-bar">
            <p className="wdd-cta-bar__text">Ready to Bring Your PPC Idea to Life?</p>
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
            {ppcIndustries.map((industry) => (
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
