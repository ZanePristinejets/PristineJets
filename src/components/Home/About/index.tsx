import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-[65vh] md:min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/about-background.webp"
          alt="Man sitting in detailed Private jet"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[65vh] md:min-h-screen px-6 sm:px-10 lg:px-36 pt-16 lg:pt-20">
        <div className="max-w-2xl">
          {/* main heading */}
          <div className="flex flex-col">
            <span className="text-[#bd843b] text-xs sm:text-sm tracking-[4px] sm:tracking-[7px]">
              ABOUT
            </span>
            <h1 className="font-serif text-white text-[32px] sm:text-[38px] lg:text-[45px] tracking-[10px] sm:tracking-[16px] lg:tracking-[20px]">
              PRISTINE JETS
            </h1>
          </div>
        </div>

        {/* Bottom Right Content */}
        <div className="absolute bottom-10 right-6 sm:right-10 lg:bottom-16 lg:right-36 max-w-xs w-[calc(100%-3rem)] sm:w-auto">
          <p className="text-gray-100 text-sm sm:text-sm leading-relaxed mb-2">
            At Pristine Jets, we combine aviation expertise with an unmatched
            attention to detail. Based in Bozeman, Montana, our 24/7 mobile crew
            delivers premium cleaning and protection services tailored to every
            aircraft.
          </p>

          <Link
            href="/about"
            aria-label="Learn More About Pristine Jets"
            className="text-[#bd843b] hover:text-[#8c5523] hover:cursor-pointer underline underline-offset-3 transition-all duration-300 tracking-[2px] uppercase text-xs py-3"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
