import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Pristine Jets Aircraft Detailing in Bozeman, MT",
  description:
    "Learn about Pristine Jets, a Bozeman-based aircraft detailing company providing 24/7 mobile jet cleaning, protection, and brightwork services at Bozeman Yellowstone International Airport (BZN).",
  alternates: {
    canonical: "https://mypristinejet.com/about",
  },
  openGraph: {
    type: "article",
    url: "https://mypristinejet.com/about",
    title: "About Pristine Jets | Aircraft Detailing in Bozeman, MT",
    description:
      "Bozeman-based aircraft detailing: exterior and interior jet care, brightwork polishing, protective coatings, and 24/7 mobile service at BZN.",
    siteName: "Pristine Jets",
    images: [
      {
        url: "https://mypristinejet.com/imgs/about-background.jpg",
        width: 1200,
        height: 630,
        alt: "About Pristine Jets aircraft detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pristine Jets | Aircraft Detailing",
    description:
      "24/7 mobile aircraft detailing in Bozeman, MT at BZN. Exterior and interior care, brightwork polishing, protective coatings.",
    images: ["https://mypristinejet.com/imgs/about-background.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}
