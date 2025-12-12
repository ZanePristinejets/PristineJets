import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-[75vh] md:min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/hero-background.webp"
          alt="Private jet with detailed interior"
          fill
          priority
          fetchPriority="high"
          style={{ objectFit: "cover" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative min-h-[75vh] md:min-h-screen w-full flex flex-col">
        {/* Main Content - centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-3 px-4">
          <div className="text-[#bd843b] text-[12px] tracking-[4px] sm:text-[14px] sm:tracking-[5px] lg:text-[16px] lg:tracking-[7px]">
            FAST, RELIABLE, PRISTINE FINISHES
          </div>

          <h1 className="text-white font-serif text-[34px] tracking-[10px] sm:text-[40px] sm:tracking-[14px] md:text-[50px] md:tracking-[20px] lg:text-[60px] lg:tracking-[30px] pb-3 leading-tight">
            FLIGHT-READY
            <br />
            DETAILING AT BZN
          </h1>

          <p className="text-gray-200 text-[13px] sm:text-[14px] leading-relaxed pb-10">
            24/7 mobile crew delivering meticulous exterior & interior care
            coordinated with local FBOs,
            <br className="hidden md:block" />
            under strict safety and aviation insurance.
          </p>

          {/* CTA button */}
          <Link
            href="/#contact"
            aria-label="Go to Contact Section"
            className="bg-[#996A33] hover:bg-[#8c5523] hover:cursor-pointer text-white text-[12px] tracking-[2px] w-1/2 sm:w-auto px-8 sm:px-10 py-3 transition-colors duration-300"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
}
