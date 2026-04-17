import type { Metadata } from "next";
import CaseResults from "@/components/CaseResults";

export const metadata: Metadata = {
  title: "Case Results | Pristine Jets",
  description:
    "Browse real aircraft detailing results from Pristine Jets — exterior washes, ceramic coatings, interior deep cleans, and brightwork polishing across Montana and Wyoming.",
  alternates: {
    canonical: "https://pristinejetdetailing.com/case-results",
  },
  openGraph: {
    type: "article",
    url: "https://pristinejetdetailing.com/case-results",
    title: "Case Results | Pristine Jets",
    description:
      "See before and after results from Pristine Jets aircraft detailing services including ceramic coatings, wet washes, interior cleaning, and brightwork polishing.",
    siteName: "Pristine Jets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Results | Pristine Jets",
    description:
      "Real aircraft detailing results from Pristine Jets in Bozeman, MT.",
  },
};

export default function CaseResultsPage() {
  return (
    <div>
      {/* <CaseResults /> */}
    </div>
  );
}
