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
  title: "Pristine Jets",
  description: "Luxury private jet detailing services",
  icons: {
    icon: [
      { url: "/imgs/logo.svg", type: "image/svg+xml" },
    ],
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
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
