import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TermsAndConditionsPage } from "@/components/TermsAndConditionsPage";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${SITE_NAME}`,
  description: `Read the Terms and Conditions for using ${SITE_NAME} website, digital products, and professional services.`,
};

export default function TermsAndConditionsRoute() {
  return (
    <>
      <Header />
      <main id="main-content">
        <TermsAndConditionsPage />
      </main>
      <Footer />
    </>
  );
}
