import type { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "Jet Detailing Bozeman MT | Aircraft Detailing for Private Jets",
  description:
    "24/7 mobile jet detailing at Bozeman Yellowstone International Airport. Call (406) 595-9464 for a free quote or to schedule aircraft cleaning.",
  alternates: {
    canonical: "https://pristinejetdetailing.com/",
  },
  openGraph: {
    type: "website",
    url: "https://pristinejetdetailing.com/",
    title: "Jet Detailing Bozeman MT | Aircraft Detailing for Private Jets",
    description:
      "24/7 mobile jet detailing at Bozeman Yellowstone International Airport. Call (406) 595-9464 for a free quote or to schedule aircraft cleaning.",
    siteName: "Pristine Jets",
    images: [
      {
        url: "https://pristinejetdetailing.com/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Pristine Jets aircraft detailing at BZN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jet Detailing Bozeman MT | Aircraft Detailing for Private Jets",
    description:
      "24/7 mobile aircraft detailing in Bozeman, MT at BZN.",
    images: ["https://pristinejetdetailing.com/hero-background.webp"],
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
