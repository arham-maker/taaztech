import Link from "next/link";
import { SUPPORT_EMAIL, SITE_NAME } from "@/lib/site";

export function PrivacyPolicyPage() {
  return (
    <>
      <section className="contact-page-hero">
        <div className="container">
          <h1 className="contact-page-hero__title">Privacy Policy</h1>
        </div>
      </section>

      <section className="legal-page">
        <div className="container legal-page__content">
          <p className="legal-page__effective">Effective Date: 10-20-2020</p>

          <p>
            At {SITE_NAME}, we value your privacy and are committed to protecting your
            personal information. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your data when you visit our website or engage with our
            services. By using our website or services, you consent to the practices
            described in this policy.
          </p>

          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>
            When you visit our website or interact with our services, we may collect
            personal information such as:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>IP address</li>
            <li>Location data</li>
            <li>Other information you provide voluntarily</li>
          </ul>

          <h3>Usage Data</h3>
          <p>We may also collect non-personal information, including:</p>
          <ul>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Referral source</li>
            <li>Pages viewed</li>
            <li>Time and date of visits</li>
            <li>Other usage data</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We may use your information for various purposes, including but not limited to:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Communicating with you</li>
            <li>Sending you newsletters or updates</li>
            <li>Analyzing website usage</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We take data security seriously and employ reasonable measures to protect your
            information from unauthorized access, disclosure, alteration, or destruction.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. Please note
            that we are not responsible for the privacy practices of these third parties,
            and we encourage you to review their privacy policies.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing
            experience. You can manage your cookie preferences through your browser
            settings.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, update, or delete your personal information</li>
            <li>Object to the processing of your data</li>
            <li>Withdraw your consent</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>

          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our practices or for
            other operational, legal, or regulatory reasons. The date of the most recent
            revision will be indicated at the top of this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <address className="legal-page__contact">
            <strong>{SITE_NAME}</strong>
            <br />
            1001 W Euless Blvd, Suite 214, Euless, TX 76040
            <br />
            <a href="tel:8178757777">(817) 875 7777</a>
            <br />
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </address>

          <p>
            We appreciate your trust in us and are committed to protecting your privacy.
            Thank you for choosing {SITE_NAME}.
          </p>

          <p className="legal-page__back">
            <Link href="/contact-us">Contact us →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
