"use client";

import Link from "next/link";
import { useState } from "react";
import { successStories } from "@/lib/data";

export function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="success-stories" id="success-stories">
      <div className="container">
        <div className="success-stories__header">
          <h2 className="success-stories__title">
            Success
            <br />
            Stories
          </h2>
          <div className="success-stories__copy">
            <h3 className="success-stories__subtitle">
              Hear How We&apos;ve Empowered Our Clients
            </h3>
            <p className="success-stories__intro">
              Over the course of our +6 years of software development and marketing
              journey, we have partnered with numerous brands and clients in building
              their digital presence through a growth-focused mindset. We specialise in
              custom software development, with expertise in AI marketing and custom
              app development, as well as tailored digital marketing solutions designed
              to meet your specific industry and business goals, positioning you for
              sustained success.
            </p>
          </div>
          <Link
            href="#success-stories"
            className="success-stories__more"
          >
            View More →
          </Link>
        </div>

        <div className="expanding-cards">
          {successStories.map((story, index) => {
            const isActive = activeIndex === index;
            return (
              <article
                key={story.title}
                className={`expanding-card ${isActive ? "expanding-card--active" : ""}`}
                style={{ backgroundImage: `url(${story.image})` }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
              >
                <div className="expanding-card__veil" />
                <div className="expanding-card__label">
                  <span className="expanding-card__title-vertical">{story.title}</span>
                  <div className="expanding-card__info">
                    <h4 className="expanding-card__title">{story.title}</h4>
                    <p className="expanding-card__description">{story.description}</p>
                    <Link href={story.href} className="expanding-card__link">
                      Explore Case Study
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
