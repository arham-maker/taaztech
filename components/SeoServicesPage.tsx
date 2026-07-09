import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ContactForm } from "@/components/ContactForm";
import { MadIndustryIcon } from "@/components/MadIndustryIcon";
import { MadTechIcon } from "@/components/MadTechIcon";
import { ServiceFaq } from "@/components/ServiceFaq";
import {
  seoChoosePoints,
  seoCtaPoints,
  seoFaqs,
  seoFaqImage,
  seoHero,
  seoIndustries,
  seoIndustriesLead,
  seoMarketStats,
  seoPortfolio,
  seoServices,
  seoStats,
  seoTechnologies,
  seoWhyNoteBody,
  seoWhyNoteTitle,
  seoWhyRows,
} from "@/lib/seo-services";
import { SITE_NAME } from "@/lib/site";

export function SeoServicesPage() {
  return (
    <>
      <section className="mad-hero">
        <div className="container mad-hero__grid">
          <div className="mad-hero__content">
            <h1 className="mad-hero__title">{seoHero.title}</h1>
            <h2 className="mad-hero__subtitle">{seoHero.subtitle}</h2>
            <p className="mad-hero__intro">{seoHero.intro}</p>
            <p className="mad-hero__intro">{seoHero.introSecondary}</p>
            <div className="mad-hero__actions">
              <Link href="/contact-us" className="btn btn--dark mad-hero__btn">
                Get a Free App Strategy Session
              </Link>
              <Link href="/#success-stories" className="btn btn--outline-dark mad-hero__btn">
                See Our Work
              </Link>
            </div>
          </div>
          <div className="mad-hero__visual">
            <Image
              src={seoHero.heroImage}
              alt="SEO services and search visibility strategy"
              width={1200}
              height={800}
              className="mad-hero__image"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mad-stats-band">
        <div className="container mad-stats-band__grid">
          {seoStats.map((stat) => (
            <div key={stat.label} className="mad-stat">
              <div className="mad-stat__value">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mad-stat__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mad-query-section">
        <div className="container">
          <div className="mad-query-card">
            <h3 className="mad-query-card__title">Start Your Digital Transformation Today</h3>
            <ContactForm variant="query" />
          </div>
        </div>
      </section>

      <section className="mad-section mad-why">
        <div className="container">
          <h2 className="mad-section__title">
            Why SEO Is Still the Highest-ROI Investment for Your Business
          </h2>
          <p className="mad-section__lead">
            Paid ads stop the moment your budget runs out. SEO builds compounding, durable
            visibility that keeps working for you 24 hours a day — through algorithm updates,
            market shifts, and seasonal swings.
          </p>
          <div className="mad-table-wrap">
            <table className="mad-table">
              <thead>
                <tr>
                  <th>The Data</th>
                  <th>What It Means For Your Business</th>
                </tr>
              </thead>
              <tbody>
                {seoWhyRows.map((row) => (
                  <tr key={row.what}>
                    <td>{row.what}</td>
                    <td>{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className="mad-results-note">
            <p className="mad-results-note__text">
              <strong>{seoWhyNoteTitle}:</strong> {seoWhyNoteBody}
            </p>
            <Link href="/#success-stories" className="mad-results-note__link">
              → See all our work
            </Link>
          </aside>
        </div>
      </section>

      <section className="mad-section mad-services">
        <div className="container">
          <h2 className="mad-section__title">Our SEO Services</h2>
          <p className="mad-section__lead">
            Nine interconnected services. One unified strategy. Complete search visibility
            across every channel your customers use to find you.
          </p>
          <div className="mad-services__grid seo-services__grid">
            {seoServices.map((service) => (
              <article key={service.title} className="mad-service-card">
                <div className="mad-service-card__icon">
                  <Image src={service.icon} alt="" width={48} height={48} />
                </div>
                <h3 className="mad-service-card__title">{service.title}</h3>
                <p className="mad-service-card__description">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mad-section seo-choose">
        <div className="container">
          <h2 className="mad-section__title">Why US Businesses Choose {SITE_NAME}</h2>
          <p className="mad-section__lead">
            The SEO industry is crowded. Most agencies sell you a package, send monthly reports
            full of numbers that do not connect to revenue, and go silent when results plateau.
            We operate differently — and we can prove it.
          </p>
          <div className="seo-choose__list">
            {seoChoosePoints.map((point, index) => (
              <article key={point.title} className="seo-choose-row">
                <div className="seo-choose-row__left">
                  <div className="seo-choose-row__num">{index + 1}</div>
                  <h3 className="seo-choose-row__title">{point.title}</h3>
                </div>
                <div className="seo-choose-row__right">
                  <p className="seo-choose-row__text">{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mad-section mad-tech">
        <div className="container">
          <h2 className="mad-section__title">Technologies We Build With</h2>
          <p className="mad-section__lead">
            We choose the right technology for your goals — not the stack we&apos;re most
            comfortable with.
          </p>
          <div className="mad-tech__grid">
            {seoTechnologies.map((tech) => (
              <article key={tech.title} className="mad-tech-card">
                <div className="mad-tech-card__blob" aria-hidden="true" />
                <div className="mad-tech-card__top">
                  <div className="mad-tech-card__icon">
                    <MadTechIcon name={tech.icon} />
                  </div>
                  <div className="mad-tech-card__intro">
                    <h3 className="mad-tech-card__title">{tech.title}</h3>
                    <p className="mad-tech-card__subtitle">{tech.subtitle}</p>
                  </div>
                </div>
                <p className="mad-tech-card__label">Core stack</p>
                <div className="mad-tech-card__tags">
                  {tech.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mad-section mad-industries">
        <div className="container">
          <h2 className="mad-industries__title">industries we serve.</h2>
          <p className="seo-industries__lead">{seoIndustriesLead}</p>
          <div className="mad-industry-boxes">
            {seoIndustries.map((industry) => (
              <article key={industry.title} className="mad-industry-box">
                <div className="mad-industry-box__icon">
                  <MadIndustryIcon name={industry.icon} />
                </div>
                <div className="mad-industry-box__body">
                  <h3 className="mad-industry-box__title">{industry.title}</h3>
                  <p className="mad-industry-box__text">{industry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mad-section mad-market">
        <div className="container">
          <h2 className="mad-section__title">
            The US Mobile App Market Why Timing Matters
          </h2>
          <p className="mad-section__lead">
            If you&apos;re debating whether to invest in a mobile app, the data has already
            answered that question. Here&apos;s what the US market looks like right now.
          </p>
          <div className="mad-market__grid">
            {seoMarketStats.map((stat) => (
              <article key={stat.text} className="mad-market-card">
                <span className="mad-market-card__bullet" aria-hidden="true" />
                <div className="mad-market-card__body">
                  <p className="mad-market-card__text">{stat.text}</p>
                  <span className="mad-market-card__source">({stat.source})</span>
                </div>
              </article>
            ))}
          </div>
          <p className="mad-market__closing">
            The question isn&apos;t whether mobile-first businesses outperform. They do — at
            every growth metric. The question is whether you build now, or spend the next 12
            months watching competitors who did.
          </p>
          <div className="mad-market__cta-wrap">
            <Link href="/contact-us" className="btn btn--dark mad-market__cta">
              Start Your Free App Strategy Session
            </Link>
          </div>
        </div>
      </section>

      <section className="mad-section mad-portfolio">
        <div className="container">
          <h2 className="mad-section__title">Work We&apos;re Proud Of</h2>
          <p className="mad-section__lead">
            These aren&apos;t concept projects. They&apos;re products in active use — built by{" "}
            {SITE_NAME}, live in the real world.
          </p>
          <div className="mad-work-grid">
            {seoPortfolio.map((project) => (
              <article key={project.title} className="mad-work-card">
                <div className="mad-work-card__project">{project.title}</div>
                <p className="mad-work-card__desc">{project.description}</p>
                <div className="mad-work-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="mad-work-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mad-portfolio__cta">
            <Link href="/#success-stories" className="btn btn--dark">
              See full case studies
            </Link>
          </div>
        </div>
      </section>

      <ServiceFaq faqs={seoFaqs} variant="mad" visualImage={seoFaqImage} />

      <section className="mad-section mad-final-cta">
        <div className="container mad-final-cta__inner">
          <h2 className="mad-final-cta__title">
            Ready to Build Your Mobile App? Let&apos;s Talk.
          </h2>
          <p className="mad-final-cta__text">
            Whether you have a fully scoped product roadmap or just a problem worth solving,{" "}
            {SITE_NAME} is ready to help you move fast and build right.
          </p>
          <ul className="mad-final-cta__list">
            {seoCtaPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link href="/contact-us" className="mad-final-cta__btn">
            Schedule Your Free Strategy Session
          </Link>
          <Link href="/#success-stories" className="mad-final-cta__link">
            Or explore our success stories →
          </Link>
        </div>
      </section>
    </>
  );
}
