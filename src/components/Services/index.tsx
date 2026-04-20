import HomeServices from "@/components/Home/Services";

export default function Services() {
  return (
    <div className="relative w-full h-full bg-white">
      {/* Black header bar */}
      <section className="bg-stone-950 text-white px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 mt-10">
          <p className="text-[#bd843b] text-[10px] sm:text-[12px] tracking-[4px] uppercase">
            METICULOUS CARE, INSIDE AND OUT
          </p>
          <h1 className="font-serif text-[20px] sm:text-[30px] xl:text-[40px] tracking-[8px] sm:tracking-[14px] leading-tight">
            OUR SERVICES
          </h1>
          <p className="text-gray-300 text-sm sm:text-[13px] leading-relaxed max-w-xl mx-auto">
            At Pristine Jets, every detail matters. From cabin to fuselage, our
            expert crew delivers precision cleaning, polishing, and protection
            that keep your aircraft in top condition. Available 24/7 in Bozeman
            and all locations, we bring meticulous care wherever your jet is.
          </p>
        </div>
      </section>

      {/* Services component */}
      <HomeServices focus="interior" hideHeader />
    </div>
  );
}
