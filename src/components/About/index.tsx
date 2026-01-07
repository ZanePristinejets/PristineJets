import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full h-full bg-white">
      {/* About Section (single) */}
      <section className="min-h-[calc(100vh-5rem)] w-full relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/imgs/aircraft-detailers.webp"
            alt="Man sitting in detailed Private jet"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[80%_center] sm:object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Content */}
        <div className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col">
          {/* Main Content - centered */}
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-3 px-4 pt-10 md:pt-10 lg:pt-5 xl:pt-0">
            <div className="text-[#bd843b] text-[12px] sm:text-xs tracking-[3px] sm:tracking-[5px] uppercase mb-2">
              ABOUT
            </div>

            <h1 className="font-serif text-white text-[24px] sm:text-[30px] xl:text-[40px] tracking-[8px] sm:tracking-[14px] md:tracking-[18px] leading-tight">
              PRISTINE JETS
            </h1>

            <div className="mt-4 space-y-4 text-gray-100 text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-relaxed w-[80%] xl:w-[75%] mx-auto">
              <p>
                At Pristine Jets, we believe that every aircraft deserves
                meticulous attention. Founded in Bozeman, Montana, our team was
                built on a passion for aviation and a commitment to excellence
                in care. Whether on the ramp or in the hangar, we bring the same
                precision and pride to every detail we perform.
              </p>
              <p>
                Our 24/7 mobile crew specializes in comprehensive aircraft
                cleaning and protection services, from wet and dry washes to wax
                and ceramic coatings, brightwork polishing, and de-ice boot
                treatments. We tailor our process to each jet, ensuring lasting
                protection, improved performance, and an immaculate appearance
                that reflects the highest standards of ownership.
              </p>
              <p>
                More than just a detailing company, Pristine Jets is a trusted
                partner in aircraft care. We understand the investment your jet
                represents, and our mission is to keep it operating and
                presenting at its very best - ready for flight at any hour. With
                precision, reliability, and dedication, we keep your aircraft
                truly pristine, inside and out.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                aria-label="Go to Contact Page to Get a Quote"
                className="inline-block bg-[#996A33] hover:bg-[#8c5523] text-white text-xs tracking-[2px] px-8 py-3 transition-colors duration-300"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
