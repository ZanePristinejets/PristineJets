import type { Metadata } from "next";
import Home from "@/components/Home";

export const metadata: Metadata = {
  title: "Pristine Jets | Aircraft Detailing in Bozeman, MT",
  description:
    "24/7 mobile aircraft detailing at Bozeman Yellowstone International Airport. Call (406) 595-9464 for a free quote or to book exterior and interior jet cleaning.",
  alternates: {
    canonical: "https://mypristinejet.com/",
  },
  openGraph: {
    type: "website",
    url: "https://mypristinejet.com/",
    title: "Pristine Jets | Aircraft Detailing in Bozeman, MT",
    description:
      "24/7 mobile aircraft detailing at Bozeman Yellowstone International Airport. Call (406) 595-9464 for a free quote or to book exterior and interior jet cleaning.",
    siteName: "Pristine Jets",
    images: [
      {
        url: "https://mypristinejet.com/imgs/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Pristine Jets aircraft detailing at BZN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pristine Jets | Aircraft Detailing at BZN",
    description:
      "24/7 mobile aircraft detailing in Bozeman, MT at BZN.",
    images: ["https://mypristinejet.com/imgs/hero-background.webp"],
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
