import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileAppDevelopmentPage } from "@/components/MobileAppDevelopmentPage";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Top Mobile App Development Company | ${SITE_NAME}`,
  description: `${SITE_NAME} is a full-cycle mobile app development company building custom iOS, Android, cross-platform, and AI-powered apps for startups and enterprises.`,
};

export default function MobileAppDevelopmentRoute() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <MobileAppDevelopmentPage />
      </main>
      <Footer />
    </>
  );
}
