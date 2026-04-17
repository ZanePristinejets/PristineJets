const cases = [
  {
    title: "Ceramic Coating",
    images: [null, null, null, null],
  },
  {
    title: "Exterior Wet Wash",
    images: [null, null, null],
  },
  {
    title: "Interior Deep Clean",
    images: [null, null, null, null],
  },
];

export default function CaseResults() {
  return (
    <section className="h-auto bg-[#f9f7f4] py-25 px-4">
      <div className="w-full max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-[#bd843b] text-[12px] tracking-[3px] sm:tracking-[4px]">
            OUR WORK
          </p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-serif tracking-[10px] sm:tracking-[14px] lg:tracking-[18px] text-gray-900">
            CASE RESULTS
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-[13px] sm:text-[12px] leading-relaxed">
            From worn to <span className="font-semibold text-[#bd843b]">pristine</span>. Browse our work across interior
            detailing, exterior treatments, and protective coatings.
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-14">
          {cases.map(({ title, images }) => (
            <div key={title} className="space-y-4">
              {/* Case title */}
              <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-gray-200" />
                <h3 className="text-xs font-semibold tracking-[3px] uppercase text-gray-900">
                  {title}
                </h3>
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Image grid */}
              <div
                className={`grid gap-3 ${
                  images.length === 3
                    ? "grid-cols-3"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
