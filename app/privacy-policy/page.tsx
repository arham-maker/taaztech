import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PrivacyPolicyPage } from "@/components/PrivacyPolicyPage";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Learn how ${SITE_NAME} collects, uses, and protects your personal information when you visit our website or engage with our services.`,
};

export default function PrivacyPolicyRoute() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PrivacyPolicyPage />
      </main>
      <Footer />
    </>
  );
}
