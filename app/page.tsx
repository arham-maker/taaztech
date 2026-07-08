import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { SuccessStories } from "@/components/SuccessStories";
import { Services } from "@/components/Services";
import { PartnerLogos } from "@/components/PartnerLogos";
import { FAQ } from "@/components/FAQ";
import { TaazTechDifference } from "@/components/TaazTechDifference";
import { CTABanner } from "@/components/CTABanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <ClientLogos />
        <SuccessStories />
        <Services />
        <PartnerLogos />
        <FAQ />
        <TaazTechDifference />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
