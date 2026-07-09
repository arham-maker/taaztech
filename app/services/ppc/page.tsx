import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PpcPage } from "@/components/PpcPage";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `PPC Services | ${SITE_NAME}`,
  description: `Maximize ROI with expert PPC services by ${SITE_NAME}. Affordable ad campaigns and data-driven results to grow your business.`,
};

export default function PpcRoute() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <PpcPage />
      </main>
      <Footer />
    </>
  );
}
