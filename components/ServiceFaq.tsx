"use client";

import Image from "next/image";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceFaqProps = {
  title?: string;
  intro?: string | string[];
  faqs: FaqItem[];
  className?: string;
  variant?: "default" | "mad" | "wdd" | "ppc";
  visualImage?: string;
};

function renderIntro(intro: string | string[], className: string) {
  const paragraphs = Array.isArray(intro) ? intro : [intro];
  return paragraphs.map((paragraph) => (
    <p key={paragraph} className={className}>
      {paragraph}
    </p>
  ));
}

function FaqStackIcon() {
  return (
    <svg className="service-faq-item__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 8l8-4 8 4-8 4-8-4zm0 6l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M4 14l8 4 8-4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function ServiceFaq({
  title = "Frequently Asked Questions",
  intro,
  faqs,
  className = "",
  variant = "default",
  visualImage,
}: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (variant === "mad" || variant === "wdd" || variant === "ppc") {
    const sectionClass =
      variant === "mad"
        ? "service-faq--mad"
        : variant === "ppc"
          ? "service-faq--ppc"
          : "service-faq--wdd";
    const titleClass =
      variant === "mad"
        ? "service-faq--mad__title"
        : variant === "ppc"
          ? "service-faq--ppc__title"
          : "service-faq--wdd__title";
    const introClass =
      variant === "mad"
        ? "service-faq--mad__intro"
        : variant === "ppc"
          ? "service-faq--ppc__intro"
          : "service-faq--wdd__intro";
    const gridClass =
      variant === "mad"
        ? "service-faq--mad__grid"
        : variant === "ppc"
          ? "service-faq--ppc__grid"
          : "service-faq--wdd__grid";
    const listClass =
      variant === "mad"
        ? "service-faq--mad__list"
        : variant === "ppc"
          ? "service-faq--ppc__list"
          : "service-faq--wdd__list";
    const imageClass =
      variant === "mad"
        ? "service-faq--mad__image"
        : variant === "ppc"
          ? "service-faq--ppc__image"
          : "service-faq--wdd__image";
    const visualClass =
      variant === "mad"
        ? "service-faq--mad__visual"
        : variant === "ppc"
          ? "service-faq--ppc__visual"
          : "service-faq--wdd__visual";
    const contentClass =
      variant === "mad"
        ? "service-faq--mad__content"
        : variant === "ppc"
          ? "service-faq--ppc__content"
          : "service-faq--wdd__content";

    return (
      <section className={`service-faq ${sectionClass} ${className}`.trim()}>
        <div className={`container ${gridClass}`}>
          <div className={visualClass}>
            {visualImage && (
              <Image
                src={visualImage}
                alt={
                  variant === "mad"
                    ? "Mobile app interface mockups"
                    : variant === "ppc"
                      ? "Advertising Agency for Maximum ROI"
                      : "Website design and development illustration"
                }
                width={719}
                height={605}
                className={imageClass}
              />
            )}
          </div>
          <div className={contentClass}>
            <h2 className={titleClass}>{title}</h2>
            {intro && renderIntro(intro, introClass)}
            <div className={listClass}>
              {faqs.map((faq, index) =>
                variant === "mad" ? (
                  <MadFaqItem
                    key={faq.question}
                    faq={faq}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ) : (
                  <WddFaqItem
                    key={faq.question}
                    faq={faq}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section className={`service-faq ${className}`.trim()}>
      <div className="container">
        <h2 className="service-faq__title">{title}</h2>
        <div className="service-faq__columns">
          <div className="service-faq__column">
            {leftFaqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          <div className="service-faq__column">
            {rightFaqs.map((faq, index) => {
              const globalIndex = index + leftFaqs.length;
              return (
                <FaqItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === globalIndex}
                  onToggle={() =>
                    setOpenIndex(openIndex === globalIndex ? null : globalIndex)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WddFaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`service-faq-item service-faq-item--wdd ${isOpen ? "service-faq-item--open" : ""}`}>
      <button type="button" className="service-faq-item__button" onClick={onToggle}>
        <span className="service-faq-item__toggle" aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
        <span className="service-faq-item__question">{faq.question}</span>
      </button>
      {isOpen && (
        <div className="service-faq-item__panel">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function MadFaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`service-faq-item service-faq-item--mad ${isOpen ? "service-faq-item--open" : ""}`}>
      <button type="button" className="service-faq-item__button" onClick={onToggle}>
        <FaqStackIcon />
        <span className="service-faq-item__question">{faq.question}</span>
        <span className="service-faq-item__toggle" aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="service-faq-item__panel">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`service-faq-item ${isOpen ? "service-faq-item--open" : ""}`}>
      <button type="button" className="service-faq-item__button" onClick={onToggle}>
        <span className="service-faq-item__question">{faq.question}</span>
        <span className="service-faq-item__toggle" aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="service-faq-item__panel">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
