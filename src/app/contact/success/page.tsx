import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function ContactSuccessPage() {
  return (
    <>
      {/* Google Ads Conversion Tracking for Lead Submission */}
      <Script id="ads-conversion-submit-lead" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16699184983/SSbKCIn6lO0bENeu5Zo-',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>
      
      <main className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/bzn-plane-2.webp"
            alt="Aircraft on the ramp at Bozeman Yellowstone International Airport"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center brightness-80 contrast-140 saturate-110"
          />

          {/* Warm color overlay */}
          <div className="absolute inset-0 bg-[#bd843b]/65 mix-blend-multiply pointer-events-none" />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        {/* Content */}
        <section className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 text-center text-white">
          <h1 className="font-serif text-[32px] sm:text-[36px] lg:text-[40px] tracking-[8px] sm:tracking-[9px] lg:tracking-[10px] mb-4">
            THANK YOU
          </h1>
          <p className="text-white/90 text-base sm:text-lg tracking-wide mb-8">
            Your message has been received. A member of our team will contact
            you shortly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              aria-label="Return to Home Page"
              className="inline-block bg-white text-black hover:bg-white/90 px-6 py-2.5 tracking-[2px] text-sm transition-colors"
            >
              RETURN HOME
            </Link>
            <Link
              href="/#contact"
              aria-label="Contact Email Again"
              className="inline-block bg-[#bd843b] text-white hover:bg-[#a76c3b] px-6 py-2.5 tracking-[2px] text-sm transition-colors"
            >
              CONTACT AGAIN
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
