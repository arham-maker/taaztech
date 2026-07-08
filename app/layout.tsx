import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top Digital Marketing & App Development Company in Dallas, TX",
  description:
    "TaazTech is a software development company and marketing agency in Dallas. Provides AI-empowered solutions to international and local brands",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Top Digital Marketing & App Development Company in Dallas, TX",
    description:
      "TaazTech is a software development company and marketing agency in Dallas. Provides AI-empowered solutions to international and local brands",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/2025/03/cropped-crossway-watermark-logo-32x32.png", sizes: "32x32" },
      {
        url: "/images/2025/03/cropped-crossway-watermark-logo-192x192.png",
        sizes: "192x192",
      },
    ],
    apple: "/images/2025/03/cropped-crossway-watermark-logo-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
