import { Droplets, Sparkle, Snowflake, BrickWallShield } from "lucide-react";

export default function Services() {
  return (
    <section className="min-h-screen bg-white py-28 px-4">
      <div className="w-full mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <p className="text-[#bd843b] text-[12px] tracking-[4px]">
            METICULOUS CARE, INSIDE AND OUT
          </p>
          <h1 className="text-[40px] font-serif tracking-[18px] text-gray-900">
            OUR SERVICES
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-[12px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt auctor urna. Aenean orci tellus, luctus sed velit. Nam
            fringilla sagittis mauris id sollicitudin.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 max-w-4xl mx-auto">
          {/* Wet/Dry Washes */}
          <div className="border border-gray-200 p-12 group hover:cursor-pointer hover:shadow-md hover:border-[#bd843b] transition-all duration-300 text-left">
            <div className="mb-4">
              <Droplets className="w-10 h-10 stroke-1 group-hover:text-[#bd843b] transition-all duration-300" />
            </div>
            <h3 className="text-base font-semibold tracking-[3px] text-gray-900 mb-3">
              WET/DRY WASHES
            </h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              Lorem ipsum dolor sit amet adipiscing elit donec auctor urna velit
              semean orci tellus a aliquet vel justo Nam fringilla mauris id
              fringilla ut neque sollicitudin.
            </p>
          </div>

          {/* Wax/Ceramic Protection */}
          <div className="border border-gray-200 p-12 group hover:cursor-pointer hover:shadow-md hover:border-[#bd843b] transition-all duration-300 text-left">
            <div className="mb-4">
              <BrickWallShield className="w-10 h-10 group-hover:text-[#bd843b] transition-all duration-300 stroke-1" />
            </div>
            <h3 className="text-base font-semibold tracking-[3px] text-gray-900 mb-3">
              WAX/CERAMIC PROTECTION
            </h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              Sed tellus lorem suscipit at neque in fringilla sagittis est velit
              maecenas gravida risus id placerat ultrices, felis nunc molestie
              eros id posuere risus mauris ac ex.
            </p>
          </div>

          {/* Brightwork Polishing */}
          <div className="border border-gray-200 p-12 group hover:cursor-pointer hover:shadow-md hover:border-[#bd843b] transition-all duration-300 text-left">
            <div className="mb-4">
              <Sparkle className="w-10 h-10 group-hover:text-[#bd843b] transition-all duration-300 stroke-1" />
            </div>
            <h3 className="text-base font-semibold tracking-[3px] text-gray-900 mb-3">
              BRIGHTWORK POLISHING
            </h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              Sed tellus lorem suscipit at neque in fringilla sagittis est velit
              maecenas gravida risus id placerat ultrices, felis nunc molestie
              eros id posuere risus mauris ac ex.
            </p>
          </div>

          {/* De-Ice Boot Treatment */}
          <div className="border border-gray-200 p-12 group hover:cursor-pointer hover:shadow-md hover:border-[#bd843b] transition-all duration-300 text-left">
            <div className="mb-4">
              <Snowflake className="w-10 h-10 group-hover:text-[#bd843b] transition-all duration-300 stroke-1" />
            </div>
            <h3 className="text-base font-semibold tracking-[3px] text-gray-900 mb-3">
              DE-ICE BOOT TREATMENT
            </h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">
              Lorem ipsum dolor sit amet adipiscing elit donec auctor urna velit
              semean orci tellus a aliquet vel justo Nam fringilla mauris id
              fringilla ut neque sollicitudin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
