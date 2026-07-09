import { processSteps, stats } from "@/lib/data";
import { AnimatedCounter } from "./AnimatedCounter";

const stepIcons = [
  <svg key="flag" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
    <path
      d="M8 7v10M8 7c0-1 1.5-2 3.5-1.5 2 .5 3.5-.5 4.5-1v6c-1 .5-2.5 1.5-4.5 1-2-.5-3.5.5-3.5.5V7z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="plane" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
    <path
      d="M5 12l14-4-4 14-2.5-5.5L5 12z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>,
  <svg key="bulb" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" />
    <path
      d="M10 17h4M9.5 20h5M12 7a3 3 0 0 1 3 3c0 1.5-1.5 2-1.5 4h-3c0-2-1.5-2.5-1.5-4a3 3 0 0 1 3-3z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

function FlowArrow() {
  return (
    <svg
      className="difference-flow__arrow-svg"
      viewBox="0 0 140 48"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 36 C50 2, 90 2, 136 36"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
      <path
        d="M128 30 L136 36 L128 42"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import { SITE_NAME } from "@/lib/site";

export function TaazTechDifference() {
  return (
    <section className="difference" id="difference">
      <div className="container">
        <div className="difference__header">
          <h2 className="difference__title">{SITE_NAME} Difference</h2>
          <h3 className="difference__subtitle">
            What Makes Us The Best App Development and Digital Marketing Agency?
          </h3>
          <p className="difference__intro">
            Are you working with multiple agencies at a time? The result is fragmented
            experiences that waste your crucial budget and lead to missed opportunities.
            What you actually need is a trustworthy partner who understands how to
            seamlessly blend mobile apps and custom software development, supported by
            strategic digital marketing. As a dedicated app development agency and digital
            marketing agency, we offer top-class and scalable digital solutions that help
            you convert customers and achieve measurable ROI.
          </p>
        </div>

        <div className="difference__flow">
          {processSteps.map((step, index) => (
            <div key={step.title} className="difference-flow__group">
              <div className="difference-flow__step">
                <span className="difference-flow__percent">{step.percent}</span>
                <div className="difference-flow__icon">{stepIcons[index]}</div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="difference-flow__connector">
                  <FlowArrow />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="difference__cards">
          {processSteps.map((step) => (
            <article key={step.title} className="difference-card">
              <h4 className="difference-card__title">{step.title}</h4>
              <p className="difference-card__text">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="difference__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-card__value">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="stat-card__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
