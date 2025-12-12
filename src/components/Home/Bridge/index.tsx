import Link from "next/link";

export default function Bridge() {
  return (
    <section aria-label="Call to action" className="bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-36 py-10 sm:py-12 lg:py-16 text-center">
        <p className="text-[#bd843b] text-[10px] sm:text-xs tracking-[5px] sm:tracking-[6px] uppercase">
          PREMIUM CARE
        </p>
        <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-serif tracking-[1px] text-gray-900">
          Ready for a spotless flight?
        </h2>
        <p className="text-gray-600 mt-3 text-xs max-w-2xl mx-auto">
          From quick turnarounds to full detailing - our team is on standby 24/7
          to keep your aircraft pristine.
        </p>

        <div className="mt-6 sm:mt-8">
          <Link
            href="#contact"
            aria-label="Go to Contact Section"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-[#bd843b] text-[#bd843b] hover:bg-[#bd843b] hover:text-white transition-colors duration-300 tracking-[3px] text-xs sm:text-sm uppercase"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
