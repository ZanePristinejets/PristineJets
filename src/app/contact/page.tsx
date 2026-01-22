import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Schedule Jet Detailing in Bozeman, MT | Pristine Jets",
  description:
    "24/7 mobile jet detailing at Bozeman Yellowstone International Airport. Call (406) 595-9464 for a free quote or to schedule jet cleaning.",
  alternates: {
    canonical: "https://pristinejetdetailing.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://pristinejetdetailing.com/contact",
    title: "Schedule Jet Detailing in Bozeman, MT | Pristine Jets",
    description:
      "Schedule aircraft detailing in Bozeman, MT. 24/7 mobile crew for exterior and interior jet care at BZN.",
    siteName: "Pristine Jets",
    images: [
      {
        url: "https://pristinejetdetailing.com/bzn-plane-2.webp",
        width: 1200,
        height: 630,
        alt: "Contact Pristine Jets at BZN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule Jet Detailing in Bozeman, MT | Pristine Jets",
    description:
      "24/7 mobile aircraft detailing at Bozeman Yellowstone International Airport (BZN).",
    images: ["https://pristinejetdetailing.com/bzn-plane-2.webp"],
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="">
        <Contact fullPage={true} />
      </div>
    </>
  );
}
