import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { ContactPageCta } from "@/components/ContactPageCta";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us - ${SITE_NAME}`,
  description: `Get in touch with ${SITE_NAME}. We blend collaboration, innovation and a commitment to exceeding expectations.`,
};

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="contact-page-hero">
          <div className="container">
            <h1 className="contact-page-hero__title">Contact Us</h1>
          </div>
        </section>
        <ContactSection variant="page" />
        <ContactPageCta />
      </main>
      <Footer />
    </>
  );
}
