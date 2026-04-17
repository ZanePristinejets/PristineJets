const cases = [
  {
    title: "Ceramic Coating",
    description:
      "Full exterior ceramic coating applied after a thorough wet wash and polish. Provides up to 5 years of protection against UV, oxidation, and environmental contaminants.",
    images: [null, null, null, null],
  },
  {
    title: "Exterior Wet Wash",
    description:
      "Full-surface wet wash removing heavy buildup from leading edges, belly, and fuselage. Aircraft prepped and ready for protective treatment.",
    images: [null, null, null],
  },
  {
    title: "Interior Deep Clean",
    description:
      "Cabin sanitization, leather conditioning, carpet extraction, and window detailing — restoring the interior to a guest-ready standard.",
    images: [null, null, null, null],
  },
  {
    title: "Brightwork Polishing",
    description:
      "Mirror-finish restoration of leading edges, spinner cones, and aluminum surfaces. Oxidation and hazing fully removed.",
    images: [null, null, null],
  },
  {
    title: "Hybrid Ceramic Coating Wax",
    description:
      "Spray-applied SiO₂ sealant delivering a hydrophobic, high-gloss layer with 8–12 months of durability. Applied between full ceramic services.",
    images: [null, null, null, null],
  },
];

export default function CaseResults() {
  return (
    <div className="relative w-full h-full bg-white">
      {/* Page hero */}
      <section className="w-full bg-stone-950 py-16 px-6 sm:py-20 text-center">
        <p className="text-[#bd843b] text-[12px] tracking-[3px] sm:tracking-[5px] uppercase mb-4">
          OUR WORK
        </p>
        <h1 className="font-serif text-white text-[28px] sm:text-[36px] lg:text-[48px] tracking-[10px] sm:tracking-[16px] lg:tracking-[20px]">
          CASE RESULTS
        </h1>
        <p className="mt-5 text-gray-400 max-w-lg mx-auto text-[13px] leading-relaxed">
          From worn to{" "}
          <span className="text-[#bd843b] font-semibold">pristine</span>.
          Every job below reflects our commitment to meticulous aircraft care.
        </p>
      </section>

      {/* Cases */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {cases.map(({ title, description, images }, caseIdx) => (
            <div key={title} className="space-y-6">
              {/* Case header */}
              <div className="space-y-2 border-l-2 border-[#bd843b] pl-4">
                <h2 className="text-base font-semibold tracking-[3px] uppercase text-gray-900">
                  {title}
                </h2>
                <p className="text-gray-500 text-[13px] leading-relaxed max-w-xl">
                  {description}
                </p>
              </div>

              {/* Image grid */}
              <div
                className={`grid gap-3 ${
                  images.length === 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : "grid-cols-2 sm:grid-cols-4"
                }`}
              >
                {images.map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] bg-black rounded-sm border border-gray-800"
                  />
                ))}
              </div>

              {/* Divider — skip after last */}
              {caseIdx < cases.length - 1 && (
                <div className="h-px bg-gray-100 mt-4" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
