import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

const avenir = localFont({
  src: [
    { path: "./fonts/Avenir.otf", weight: "400", style: "normal" },
    { path: "./fonts/Avenir-Semi-Bold.otf", weight: "600", style: "normal" },
    { path: "./fonts/Avenir-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-avenir",
  display: "swap",
  fallback: ["system-ui", "Helvetica", "Arial", "sans-serif"],
});

const didot = localFont({
  src: [
    { path: "./fonts/Didot.otf", weight: "400", style: "normal" },
    { path: "./fonts/Didot-Italic.otf", weight: "400", style: "italic" },
    { path: "./fonts/Didot-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-didot",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pristinejetdetailing.com"),
  title: "Jet Detailing Bozeman MT | Aircraft Detailing for Private Jets",
  description:
    "24/7 mobile jet detailing at Bozeman Yellowstone International Airport. Call (406) 595-9464 for a free quote or to schedule aircraft cleaning.",
  openGraph: {
    type: "website",
    url: "https://pristinejetdetailing.com",
    title: "Jet Detailing Bozeman MT | Aircraft Detailing for Private Jets",
    description:
      "24/7 mobile jet detailing at Bozeman Yellowstone International Airport (BZN). Exterior washes, brightwork polishing, interior cleaning, and protective coatings.",
    siteName: "Pristine Jets",
    images: [
      {
        url: "https://pristinejetdetailing.com/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Pristine Jets jet detailing in Bozeman, MT",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jet Detailing Bozeman MT | Aircraft Detailing for Private Jets",
    description: "24/7 mobile jet detailing in Bozeman, MT.",
    images: ["https://pristinejetdetailing.com/hero-background.webp"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pristine Jets",
  url: "https://pristinejetdetailing.com",
  logo: "https://pristinejetdetailing.com/logo.png",
  sameAs: ["https://www.instagram.com/pristinejets/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-406-595-9464",
    email: "info@mypristinejet.com",
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          id="html-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>

      <body className={`${avenir.variable} ${didot.variable}`}>
        {/* Google Analytics + ads (gtag) */}
        <Script
          id="gtag-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-SK60D4KXHP"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SK60D4KXHP');
    gtag('config', 'AW-17878807824');
  `}
        </Script>

        <Banner />
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
