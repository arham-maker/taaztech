"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

const faqIcons = [
  "monitor",
  "ai",
  "marketing",
  "web",
  "integration",
  "roi",
  "industries",
  "support",
] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="faq__title">Frequently Asked Questions</h2>

        <div className="faq__columns">
          <div className="faq__column">
            {leftFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                faq={faq}
                icon={faqIcons[index]}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          <div className="faq__column">
            {rightFaqs.map((faq, index) => {
              const globalIndex = index + 4;
              return (
                <AccordionItem
                  key={faq.question}
                  faq={faq}
                  icon={faqIcons[globalIndex]}
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

function AccordionItem({
  faq,
  icon,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  icon: (typeof faqIcons)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button
        type="button"
        className="faq-item__button"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="faq-item__icon" aria-hidden>
          <FaqIcon type={icon} />
        </span>
        <span className="faq-item__question">{faq.question}</span>
        <span className="faq-item__toggle" aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div className="faq-item__panel" hidden={!isOpen}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}

function FaqIcon({ type }: { type: (typeof faqIcons)[number] }) {
  const paths: Record<(typeof faqIcons)[number], string> = {
    monitor:
      "M4 5h16v10H4V5zm2 12h12v2H6v-2zm2-9h8v6H8V8z",
    ai: "M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.7l5.4-.8L12 2z",
    marketing:
      "M4 18V6l8 4 8-4v12l-8 4-8-4zm2-1.2l6 3 6-3V8.2l-6 3-6-3v8.8z",
    web: "M3 5h18v12H3V5zm2 2v8h14V7H5zm3 10h8v2H8v-2z",
    integration:
      "M8 7h8v2H8V7zm0 5h5v2H8v-2zm-3 8l3-3h8l3 3V6H5v14z",
    roi: "M5 19V5h2v12h12v2H5zm4-3l3-4 3 3 4-6 3 2v-8H7v13h2z",
    industries:
      "M5 19V9h4v10H5zm6 0V5h4v14h-4zm6 0v-7h4v7h-4z",
    support:
      "M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.5 3 5.7V18h8v-3.3c1.8-1.2 3-3.3 3-5.7a7 7 0 0 0-7-7zm-2 18h4v2h-4v-2z",
  };

  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={paths[type]} />
    </svg>
  );
}
