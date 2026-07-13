import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SeoServicesPage } from "@/components/SeoServicesPage";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Top SEO Services | Boost Google Rankings & Traffic | ${SITE_NAME}`,
  description: `${SITE_NAME} delivers complete SEO, AEO, GEO, and voice search optimization to boost Google rankings, AI visibility, and organic traffic.`,
};

export default function SeoServicesRoute() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SeoServicesPage />
      </main>
      <Footer />
    </>
  );
}
