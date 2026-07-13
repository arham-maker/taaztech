import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WebsiteDesignDevelopmentPage } from "@/components/WebsiteDesignDevelopmentPage";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Professional Website Design and Development Services | ${SITE_NAME}`,
  description: `Elevate your online presence with ${SITE_NAME}'s exceptional website design services. Transform your brand today.`,
};

export default function WebsiteDesignDevelopmentRoute() {
  return (
    <>
      <Header />
      <main id="main-content">
        <WebsiteDesignDevelopmentPage />
      </main>
      <Footer />
    </>
  );
}
