import type { Metadata } from "next";
import Locations from "@/components/Locations";

export const metadata: Metadata = {
  title: "Locations | Pristine Jets",
  description:
    "Pristine Jets is based in Belgrade, MT and services airports across Montana, Wyoming, and Idaho including KBZN, KJAC, KGPI, and more.",
  alternates: {
    canonical: "https://pristinejetdetailing.com/locations",
  },
  openGraph: {
    type: "website",
    url: "https://pristinejetdetailing.com/locations",
    title: "Locations | Pristine Jets",
    description:
      "Pristine Jets services airports across Montana, Wyoming, and Idaho. Based in Belgrade, MT.",
    siteName: "Pristine Jets",
  },
};

export default function LocationsPage() {
  return <Locations />;
}
