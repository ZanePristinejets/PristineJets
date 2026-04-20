import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Pristine Jets",
  description:
    "Pristine Jets offers expert aircraft detailing including exterior washing, ceramic coating, interior cabin sanitization, and more. Available 24/7 across Montana, Wyoming, and Idaho.",
  alternates: {
    canonical: "https://pristinejetdetailing.com/services",
  },
  openGraph: {
    type: "website",
    url: "https://pristinejetdetailing.com/services",
    title: "Services | Pristine Jets",
    description:
      "Expert aircraft detailing services — exterior, interior, hangar cleaning, and more.",
    siteName: "Pristine Jets",
  },
};

export default function ServicesPage() {
  return <Services />;
}
