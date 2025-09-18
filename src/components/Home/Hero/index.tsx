import Header from "./Header";

export default function Home() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/imgs/hero-background.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen w-full flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content - centered */}
        <div className="flex-1 space-y-3 flex flex-col items-center justify-center text-center">
          <div className="text-[#bd843b] text-[16px] tracking-[7px]">
            FAST, RELIABLE, PRISTINE FINISHES
          </div>

          <h1 className="text-white font-serif text-[60px] tracking-[30px] pb-3">
            FLIGHT-READY
            <br />
            DETAILING AT BZN
          </h1>

          <p className="text-gray-200 text-[14px] pb-10">
            24/7 mobile crew delivering meticulous exterior & interior care
            coordinated with local FBOs,
            <br />
            under strict safety and aviation insurance.
          </p>

          {/* CTA button */}
          <button className="bg-[#bd843b] hover:bg-[#8c5523] hover:cursor-pointer text-white text-[12px] tracking-[2px] px-10 py-3 transition-colors duration-300">
            GET A QUOTE
          </button>
        </div>
      </div>
    </section>
  );
}
