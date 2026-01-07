export default function Banner() {
  return (
    <div
      aria-label="Site wide announcement"
      className="w-full bg-[#000000] text-white sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center">
        <p className="flex items-center justify-center text-[9px] sm:text-[14px] tracking-[1px] uppercase font-sans-serif font-bold">
          24/7 Mobile Aircraft Detailing
        </p>
      </div>
    </div>
  );
}
