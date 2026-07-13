import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SemServicesPage } from "@/components/SemServicesPage";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Top SEM Services | ${SITE_NAME}`,
  description: `${SITE_NAME} delivers expert search engine marketing services including Google Ads, Bing Ads, and PPC campaigns to drive instant qualified traffic and measurable ROI.`,
};

export default function SemServicesRoute() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SemServicesPage />
      </main>
      <Footer />
    </>
  );
}
