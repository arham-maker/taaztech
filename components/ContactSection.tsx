import { SUPPORT_EMAIL, SITE_NAME } from "@/lib/site";
import { ContactForm } from "./ContactForm";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 4h3l1.2 5.2-1.9 1.1a12 12 0 0 0 5 5l1.1-1.9L20 15.5V18.5a1.5 1.5 0 0 1-1.6 1.5C10.2 20 4 13.8 4 5.6A1.5 1.5 0 0 1 5.5 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

type ContactSectionProps = {
  variant?: "home" | "page";
};

export function ContactSection({ variant = "home" }: ContactSectionProps) {
  const isPage = variant === "page";

  return (
    <section
      className={`contact ${isPage ? "contact--page" : ""}`}
      id={isPage ? undefined : "contact"}
    >
      <div className="container contact__grid">
        <div className="contact__info">
          {isPage ? (
            <>
              <h2 className="contact__subtitle">Get in touch with us!</h2>
              <p className="contact__description">
                At {SITE_NAME}, we blend collaboration, innovation and a commitment to
                exceeding expectations.
              </p>
            </>
          ) : (
            <>
              <h3 className="contact__title">
                Build &amp; Scale Your Presence With AI-Powered Digital Solutions
              </h3>
              <p className="contact__description">
                Get in touch with our integrated{" "}
                <strong>AI development and digital growth agency</strong> to schedule a free
                consultation. Whether you are a startup looking to disrupt the market or an
                enterprise seeking to optimize global operations, we deliver the technical
                foundation and marketing reach to help you achieve{" "}
                <strong>scalable, long-term ROI.</strong> Let&apos;s transform your vision into a
                future-proof digital reality.
              </p>
            </>
          )}

          <ul className="contact__details">
            <li>
              <span className="contact__icon" aria-hidden>
                <PhoneIcon />
              </span>
              <a href="tel:8178757777">817.875.7777</a>
            </li>
            <li>
              <span className="contact__icon" aria-hidden>
                <MailIcon />
              </span>
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </li>
            <li>
              <span className="contact__icon" aria-hidden>
                <PinIcon />
              </span>
              <span>1001 W Euless Blvd, Suite 214, Euless, TX 76040</span>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
