import Link from "next/link";

type ContactPageCtaProps = {
  buttonText?: string;
  buttonHref?: string;
};

export function ContactPageCta({
  buttonText = "Let's make it happen together.",
  buttonHref = "/contact-us",
}: ContactPageCtaProps) {
  return (
    <section className="contact-page-cta">
      <div className="container contact-page-cta__content">
        <p className="contact-page-cta__eyebrow">Ignite Your Potential!</p>
        <h2 className="contact-page-cta__title">
          Unleash Your Vision With Bold,
          Innovative Solutions.
        </h2>
        <Link href={buttonHref} className="contact-page-cta__btn">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
