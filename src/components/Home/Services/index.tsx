import { Droplets, Sparkle, Snowflake, BrickWallShield } from "lucide-react";

export default function Services() {
  return (
    <section className="min-h-screen bg-white py-16 sm:py-20 lg:py-28 px-4">
      <div className="w-full mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <p className="text-[#bd843b] text-[12px] tracking-[3px] sm:tracking-[4px]">
            METICULOUS CARE, INSIDE AND OUT
          </p>
          <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-serif tracking-[10px] sm:tracking-[14px] lg:tracking-[18px] text-gray-900">
            OUR SERVICES
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-[13px] sm:text-[12px] leading-relaxed">
            At Pristine Jets, every detail matters. From cabin to fuselage, our
            expert crew delivers precision cleaning, polishing, and protection
            that keep your aircraft in top condition. Available 24/7 in Bozeman,
            we bring meticulous care wherever your jet is.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:gap-0 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Wet/Dry Washes */}
          <div className="border border-gray-200 p-6 sm:p-8 lg:p-12 group hover:shadow-md hover:border-[#bd843b] transition-all duration-300 text-left">
            <div className="mb-4">
              <Droplets className="w-8 h-8 lg:w-10 lg:h-10 stroke-1 group-hover:text-[#bd843b] transition-all duration-300" />
            </div>
            <h3 className="text-base font-semibold tracking-[2px] sm:tracking-[3px] text-gray-900 mb-3">
              WET/DRY WASHES
            </h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              Thorough exterior cleaning tailored to your aircraft and
              conditions - from quick dry washes to full wet treatments for a
              spotless finish.
            </p>
          </div>

          {/* Wax/Ceramic Protection */}
          <div className="border border-gray-200 p-6 sm:p-8 lg:p-12 group hover:shadow-md hover:border-[#bd843b] transition-all duration-300 text-left">
            <div className="mb-4">
              <BrickWallShield className="w-8 h-8 lg:w-10 lg:h-10 group-hover:text-[#bd843b] transition-all duration-300 stroke-1" />
            </div>
            <h3 className="text-base font-semibold tracking-[2px] sm:tracking-[3px] text-gray-900 mb-3">
              WAX/CERAMIC PROTECTION
            </h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              Long-lasting protection against the elements with premium wax and
              ceramic coatings that preserve shine and safeguard your paint.
            </p>
          </div>

          {/* Brightwork Polishing */}
          <div className="border border-gray-200 p-6 sm:p-8 lg:p-12 group hover:shadow-md hover:border-[#bd843b] transition-all duration-300 text-left">
            <div className="mb-4">
              <Sparkle className="w-8 h-8 lg:w-10 lg:h-10 group-hover:text-[#bd843b] transition-all duration-300 stroke-1" />
            </div>
            <h3 className="text-base font-semibold tracking-[2px] sm:tracking-[3px] text-gray-900 mb-3">
              BRIGHTWORK POLISHING
            </h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              Expert polishing for leading edges, spinners, and brightwork -
              restoring a mirror-like finish that reflects true excellence.
            </p>
          </div>

          {/* De-Ice Boot Treatment */}
          <div className="border border-gray-200 p-6 sm:p-8 lg:p-12 group hover:shadow-md hover:border-[#bd843b] transition-all duration-300 text-left">
            <div className="mb-4">
              <Snowflake className="w-8 h-8 lg:w-10 lg:h-10 group-hover:text-[#bd843b] transition-all duration-300 stroke-1" />
            </div>
            <h3 className="text-base font-semibold tracking-[2px] sm:tracking-[3px] text-gray-900 mb-3">
              DE-ICE BOOT TREATMENT
            </h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              Specialized cleaning and conditioning of de-ice boots to maximize
              performance, reduce wear, and maintain safety in all seasons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
