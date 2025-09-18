export default function About() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/imgs/about-background.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-36 pt-20">
        <div className="max-w-2xl">
          {/* main heading */}
          <div className="flex flex-col">
            <span className="text-[#bd843b] text-sm tracking-[7px]">ABOUT</span>
            <h1 className="font-serif text-white text-[45px] tracking-[20px]">PRISTINE JETS</h1>
          </div>
        </div>

        {/* Bottom Right Content */}
        <div className="absolute bottom-16 right-36 max-w-xs">
          <p className="text-gray-100 text-sm leading-relaxed mb-2">
            Sed tempus rhoncus magna, in venenatis ligula faucibus eget. Mauris
            ullamcorper arcu lectus, in consectetur eros semper fermentum.
            Quisque urna ex, fermentum ut massa vitmus.
          </p>

          <button className="text-[#bd843b] hover:text-[#8c5523] hover:cursor-pointer underline underline-offset-3 transition-all duration-300 tracking-[2px] uppercase text-xs py-3">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
