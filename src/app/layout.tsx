import type { Metadata } from "next";
import localFont from "next/font/local";
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
  metadataBase: new URL("https://mypristinejet.com"),
  title: "Pristine Jets | Aircraft Detailing in Bozeman, MT",
  description:
    "24/7 mobile aircraft detailing at Bozeman Yellowstone International Airport (BZN). Exterior washes, brightwork polishing, interior cleaning, and protective coatings for private jets in Montana.",
  icons: {
    icon: [{ url: "/imgs/logo.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    url: "https://mypristinejet.com/",
    title: "Pristine Jets | Aircraft Detailing in Bozeman, MT",
    description:
      "24/7 mobile aircraft detailing at Bozeman Yellowstone International Airport (BZN). Exterior washes, brightwork polishing, interior cleaning, and protective coatings.",
    siteName: "Pristine Jets",
    images: [
      {
        url: "https://mypristinejet.com/imgs/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Pristine Jets aircraft detailing at BZN",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pristine Jets | Aircraft Detailing at BZN",
    description: "24/7 mobile aircraft detailing in Bozeman, MT at BZN.",
    images: ["https://mypristinejet.com/imgs/hero-background.webp"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pristine Jets",
  url: "https://mypristinejet.com/",
  logo: "https://mypristinejet.com/imgs/logo.svg",
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
      <body className={`${avenir.variable} ${didot.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
