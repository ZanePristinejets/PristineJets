import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imgs/contact-background.jpg')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />

      {/* Content */}
      <section className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 text-center text-white">
        <h1 className="font-serif text-[32px] sm:text-[36px] lg:text-[40px] tracking-[8px] sm:tracking-[9px] lg:tracking-[10px] mb-4">
          THANK YOU
        </h1>
        <p className="text-white/90 text-base sm:text-lg tracking-wide mb-8">
          Your message has been received. A member of our team will contact you shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-white text-black hover:bg-white/90 px-6 py-2.5 tracking-[3px] text-sm transition-colors"
          >
            RETURN HOME
          </Link>
          <Link
            href="/#contact"
            className="inline-block bg-[#bd843b] text-white hover:bg-[#a76c3b] px-6 py-2.5 tracking-[3px] text-sm transition-colors"
          >
            CONTACT AGAIN
          </Link>
        </div>
      </section>
    </main>
  );
}

 
