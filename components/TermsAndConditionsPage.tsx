import Link from "next/link";
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/lib/site";

export function TermsAndConditionsPage() {
  return (
    <>
      <section className="contact-page-hero">
        <div className="container">
          <h1 className="contact-page-hero__title">Terms and Conditions</h1>
        </div>
      </section>

      <section className="legal-page">
        <div className="container legal-page__content">
          <p className="legal-page__effective">Effective Date: 02-06-2025</p>

          <p>
            Welcome to {SITE_NAME}. By accessing or using our website, digital products, or
            services, you agree to the following Terms and Conditions. Please read them
            carefully before engaging with our agency.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By using our website or hiring us for services, you confirm that you have read,
            understood, and accepted these Terms and Conditions. If you do not agree to these
            terms, please do not use our services.
          </p>

          <h2>2. Services Offered</h2>
          <p>
            {SITE_NAME} provides tailored tech and creative solutions including but not
            limited to:
          </p>

          <h3>AI-Powered Software Development</h3>
          <ul>
            <li>Generative AI App Development</li>
            <li>Software MVP Development (Mobile, Web, eCommerce, Marketplace)</li>
          </ul>

          <h3>Mobile App Development</h3>
          <ul>
            <li>Android App Development</li>
            <li>iOS App Development</li>
            <li>Cross Platform App Development</li>
            <li>Social Networking App Development</li>
            <li>Customer Support SaaS</li>
            <li>Marketing and Sales SaaS</li>
            <li>eCommerce SaaS Solutions</li>
            <li>Accounting and Financial SaaS Solutions</li>
            <li>HR and Recruitment SaaS Solutions</li>
          </ul>

          <h3>Digital Marketing Services</h3>
          <ul>
            <li>
              SEO Optimization (On-Page SEO, Off-Page SEO, Local SEO, International SEO,
              Technical SEO, Keyword Research)
            </li>
            <li>
              Search Engine Marketing (PPC, Bing PPC, Amazon PPC, Ecommerce PPC, AEO
              Services, Voice Search Optimization)
            </li>
            <li>
              Social Media Marketing (Facebook, Instagram, TikTok, YouTube, LinkedIn)
            </li>
            <li>Paid Advertising</li>
            <li>Content Marketing (Email Marketing, Newsletters, Articles, FAQs, Forums)</li>
          </ul>

          <h3>MVP (Minimum Viable Product) Development</h3>
          <ul>
            <li>Software MVP Development</li>
            <li>Mobile App MVP Development</li>
            <li>Web App MVP</li>
            <li>eCommerce MVP</li>
            <li>Marketplace MVP</li>
            <li>SaaS MVP</li>
            <li>Blockchain MVP</li>
            <li>Generative AI MVP</li>
          </ul>

          <h3>Website Design &amp; Development</h3>
          <ul>
            <li>Custom Website Development</li>
            <li>eCommerce Website Development</li>
            <li>Responsive Website Development</li>
            <li>CMS Development</li>
            <li>Website Redesign</li>
            <li>Landing Page Development</li>
            <li>Blog and Article Website Development</li>
            <li>Personal Portfolio Website Development</li>
            <li>Event &amp; Conference Website Development</li>
            <li>Corporate/Business Website Development</li>
          </ul>

          <h3>Digital Arts and Creative Design</h3>
          <ul>
            <li>Logo Design</li>
            <li>Custom Graphics Design</li>
          </ul>

          <p>
            <strong>Note:</strong> Our software development page is currently under
            construction and will be updated soon.
          </p>
          <p>
            All services are customized according to the client&apos;s needs and outlined in
            a formal proposal or service agreement before project commencement.
          </p>

          <h2>3. Client Responsibilities</h2>
          <p>Clients agree to:</p>
          <ul>
            <li>Provide timely access to necessary information, content, or assets</li>
            <li>Respond to communications regarding feedback, approvals, and revisions</li>
            <li>Make payments according to the agreed schedule</li>
            <li>Follow all project timelines and service agreements</li>
          </ul>
          <p>
            Failure to comply may impact project delivery or result in service suspension.
          </p>

          <h2>4. Payment Terms</h2>
          <p>
            Payment terms are outlined in your invoice or service agreement. {SITE_NAME}{" "}
            reserves the right to pause work or apply late fees if payments are delayed or
            incomplete.
          </p>

          <h2>5. Revisions and Deliverables</h2>
          <p>
            Each service package includes a defined number of revisions. Additional changes
            outside the agreed scope may incur extra charges. Final deliverables and timelines
            will be provided at the start of the engagement.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All custom work (including code, designs, and strategies) remains the property of{" "}
            {SITE_NAME} until final payment is received. Upon full payment, ownership rights
            to the approved deliverables transfer to the client.
          </p>

          <h2>7. Confidentiality</h2>
          <p>
            We maintain strict confidentiality regarding any client data, business strategies,
            or proprietary information shared during engagement. We will not disclose
            information to third parties without written consent unless required by law.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            {SITE_NAME} is not liable for any indirect, incidental, or consequential damages
            resulting from the use or performance of our services. Outcomes may vary due to
            factors beyond our control (e.g., platform updates, market changes, or third-party
            tools).
          </p>

          <h2>9. Termination</h2>
          <p>
            Either party may terminate services with written notice. Clients will be billed
            for work completed up to termination date. Partially completed work remains
            property of {SITE_NAME} until payment is settled.
          </p>

          <h2>10. Modifications to Terms</h2>
          <p>
            We may revise these Terms and Conditions at any time. Updates will be published
            on our website and take effect immediately upon posting. Continued use of
            services implies acceptance of any changes.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by and interpreted according to the laws of the State of
            Texas, USA. All disputes shall fall under Texas jurisdiction.
          </p>

          <h2>Contact Information</h2>
          <address className="legal-page__contact">
            <strong>{SITE_NAME}</strong>
            <br />
            1001 W Euless Blvd, Suite 214
            <br />
            Euless, TX 76040
            <br />
            United States
            <br />
            Phone: <a href="tel:8178757777">817.875.7777</a>
            <br />
            Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <br />
            Website:{" "}
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer">
              {SITE_URL}
            </a>
          </address>

          <p className="legal-page__back">
            <Link href="/privacy-policy">Privacy Policy →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
