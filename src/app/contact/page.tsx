import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Schedule Aircraft Detailing at BZN",
  description:
    "Contact Pristine Jets to schedule 24/7 aircraft detailing at Bozeman Yellowstone International Airport (BZN). Call +1 (406) 595-9464 or email info@mypristinejet.com to book exterior and interior jet cleaning.",
  alternates: {
    canonical: "https://mypristinejet.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://mypristinejet.com/contact",
    title: "Contact Pristine Jets | Aircraft Detailing at BZN",
    description:
      "Schedule aircraft detailing in Bozeman, MT. 24/7 mobile crew for exterior and interior jet care at BZN.",
    siteName: "Pristine Jets",
    images: [
      {
        url: "https://mypristinejet.com/imgs/bzn-plane-2.webp",
        width: 1200,
        height: 630,
        alt: "Contact Pristine Jets at BZN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pristine Jets | Aircraft Detailing",
    description:
      "24/7 mobile aircraft detailing at Bozeman Yellowstone International Airport (BZN).",
    images: ["https://mypristinejet.com/imgs/bzn-plane-2.webp"],
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
