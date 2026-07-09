import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ContactForm } from "@/components/ContactForm";
import { MadIndustryIcon } from "@/components/MadIndustryIcon";
import { MadTechIcon } from "@/components/MadTechIcon";
import { ServiceFaq } from "@/components/ServiceFaq";
import {
  mobileAppCtaPoints,
  mobileAppFaqs,
  mobileAppFaqImage,
  mobileAppFaqIntro,
  mobileAppHero,
  mobileAppIndustries,
  mobileAppMarketStats,
  mobileAppPortfolio,
  mobileAppProcess,
  mobileAppServices,
  mobileAppStats,
  mobileAppTechnologies,
  mobileAppTimelines,
  mobileAppWhyRows,
} from "@/lib/mobile-app-development";
import { SITE_NAME } from "@/lib/site";

export function MobileAppDevelopmentPage() {
  return (
    <>
      <section className="mad-hero">
        <div className="container mad-hero__grid">
          <div className="mad-hero__content">
            <h1 className="mad-hero__title">{mobileAppHero.title}</h1>
            <h2 className="mad-hero__subtitle">{mobileAppHero.subtitle}</h2>
            <p className="mad-hero__intro">{mobileAppHero.intro}</p>
            <p className="mad-hero__intro">{mobileAppHero.introSecondary}</p>
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
              src={mobileAppHero.heroImage}
              alt="Mobile app interfaces on smartphone mockups"
              width={1104}
              height={960}
              className="mad-hero__image"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mad-stats-band">
        <div className="container mad-stats-band__grid">
          {mobileAppStats.map((stat) => (
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
            <h3 className="mad-query-card__title">Get Your Query.!</h3>
            <ContactForm variant="query" />
          </div>
        </div>
      </section>

      <section className="mad-section mad-why">
        <div className="container">
          <h2 className="mad-section__title">
            Why US Businesses Choose {SITE_NAME} for Mobile App Development
          </h2>
          <p className="mad-section__lead">
            The US mobile app economy now exceeds $138 billion annually. Businesses that
            invest in high-quality, user-first mobile products grow 3–5x faster than those
            relying on web-only experiences. But most app projects fail — over 70% go over
            budget, miss deadlines, or launch with critical usability flaws that kill
            retention. We exist to be the exception.
          </p>
          <div className="mad-table-wrap">
            <table className="mad-table">
              <thead>
                <tr>
                  <th>What We Do</th>
                  <th>What That Means For You</th>
                </tr>
              </thead>
              <tbody>
                {mobileAppWhyRows.map((row) => (
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
              <strong>Real work, real results.</strong> We built the Empowered People mental
              health platform, helping clinicians manage crisis care at scale. We developed
              the Behavioral Therapy cross-platform app powered by machine learning. We
              launched ShipSearch — a cargo management platform for the maritime industry. We
              designed Land Buy, a property search app for a Dallas-based real estate firm.
              These aren&apos;t placeholder logos. They&apos;re products in active use.
            </p>
            <Link href="/#success-stories" className="mad-results-note__link">
              → See all our work
            </Link>
          </aside>
        </div>
      </section>

      <section className="mad-section mad-services">
        <div className="container">
          <h2 className="mad-section__title">Our Mobile App Development Services</h2>
          <p className="mad-section__lead">
            Whether you need a polished consumer app, a complex enterprise platform, or an
            AI-driven product that doesn&apos;t exist yet — we have the technical depth and
            design judgment to build it right, on time, and on budget.
          </p>
          <div className="mad-services__grid">
            {mobileAppServices.map((service) => (
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

      <section className="mad-section mad-process">
        <div className="container">
          <h2 className="mad-section__title">Our Mobile App Development Process</h2>
          <h3 className="mad-section__subtitle">From Idea to App Store</h3>
          <p className="mad-section__lead">
            No black boxes. No status update theatre. Here&apos;s exactly how we build.
          </p>
          <div className="mad-process-list">
            {mobileAppProcess.map((step) => (
              <article key={step.title} className="mad-process-row">
                <div className="mad-process-row__left">
                  <div className="mad-process-row__num">{step.step}</div>
                  <h4 className="mad-process-row__name">{step.title}</h4>
                  <p className="mad-process-row__timing">{step.duration}</p>
                </div>
                <div className="mad-process-row__right">
                  <p className="mad-process-row__text">{step.description}</p>
                  <div className="mad-process-row__tags">
                    {step.deliverables.map((item) => (
                      <span key={item} className="mad-process-row__tag">
                        {item}
                      </span>
                    ))}
                  </div>
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
            {mobileAppTechnologies.map((tech) => (
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

      <section className="mad-section mad-timeline">
        <div className="container">
          <h2 className="mad-section__title">Mobile App Development Timeline Guide</h2>
          <p className="mad-section__lead">
            Every project is different. Here&apos;s a transparent breakdown based on our
            experience building 200+ applications — so you can align your expectations
            before we even talk.
          </p>
          <div className="mad-timeline__grid">
            {mobileAppTimelines.map((item) => (
              <article
                key={item.title}
                className={`mad-timeline-card ${item.featured ? "mad-timeline-card--featured" : ""}`}
              >
                {item.featured && <span className="mad-timeline-card__badge">Most Popular</span>}
                <h3 className="mad-timeline-card__title">{item.title}</h3>
                <p className="mad-timeline-card__duration">{item.duration}</p>
                <hr className="mad-timeline-card__divider" />
                <p className="mad-timeline-card__text">{item.audience}</p>
              </article>
            ))}
          </div>
          <p className="mad-timeline__note">
            Investment ranges vary based on feature complexity, integrations, and team size.
            Request a detailed, itemized estimate after a free discovery call — no
            obligation.
          </p>
          <div className="mad-timeline__cta">
            <Link href="/contact-us" className="btn btn--dark">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="mad-section mad-industries">
        <div className="container">
          <h2 className="mad-industries__title">industries we serve.</h2>
          <div className="mad-industry-boxes">
            {mobileAppIndustries.map((industry) => (
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
            If you&apos;re debating whether to invest in a mobile app, the data has
            already answered that question. Here&apos;s what the US market looks like
            right now.
          </p>
          <div className="mad-market__grid">
            {mobileAppMarketStats.map((stat) => (
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
            The question isn&apos;t whether mobile-first businesses outperform. They do —
            at every growth metric. The question is whether you build now, or spend the
            next 12 months watching competitors who did.
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
            These aren&apos;t concept projects. They&apos;re products in active use — built
            by {SITE_NAME}, live in the real world.
          </p>
          <div className="mad-work-grid">
            {mobileAppPortfolio.map((project) => (
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

      <ServiceFaq
        faqs={mobileAppFaqs}
        intro={mobileAppFaqIntro}
        variant="mad"
        visualImage={mobileAppFaqImage}
      />

      <section className="mad-section mad-final-cta">
        <div className="container mad-final-cta__inner">
          <h2 className="mad-final-cta__title">
            Ready to Build Your Mobile App? Let&apos;s Talk.
          </h2>
          <p className="mad-final-cta__text">
            Whether you have a fully scoped product roadmap or just a problem worth
            solving, {SITE_NAME} is ready to help you move fast and build right.
          </p>
          <ul className="mad-final-cta__list">
            {mobileAppCtaPoints.map((point) => (
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
