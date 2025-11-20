import { Phone, Mail } from "lucide-react";
import Form from "./Form";

type ContactProps = {
  heightVh?: number;
  /** When true, section fills the viewport minus footer height (5rem). */
  fullPage?: boolean;
};

export default function Contact({
  heightVh = 80,
  fullPage = false,
}: ContactProps) {

  const minHeight = fullPage ? "calc(100vh - 5rem)" : `${heightVh}vh`;

  // Classes that scale up when fullPage is true
  const gridClasses = `w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center ${
    fullPage ? "gap-10 lg:gap-20 mt-12" : "gap-8 lg:gap-16"
  }`;
  const titleClass = fullPage
    ? "font-serif text-[36px] sm:text-[42px] lg:text-[48px] tracking-[9px] sm:tracking-[10px] lg:tracking-[12px] border-b border-white inline-block mx-auto mb-10 sm:mb-12 lg:mb-14"
    : "font-serif text-[32px] sm:text-[36px] lg:text-[40px] tracking-[8px] sm:tracking-[9px] lg:tracking-[10px] border-b border-white inline-block mx-auto mb-8 sm:mb-10 lg:mb-12";
  const iconWrapClass = fullPage
    ? "w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center"
    : "w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 flex items-center justify-center";
  const iconClass = fullPage
    ? "w-5 h-5 sm:w-6 sm:h-6 text-[#bd843b]"
    : "w-4 h-4 sm:w-5 sm:h-5 text-[#bd843b]";
  const labelClass = fullPage
    ? "text-sm sm:text-base tracking-[4px] sm:tracking-[5px] text-white/70 uppercase mb-1 font-semibold"
    : "text-xs sm:text-sm tracking-[4px] sm:tracking-[5px] text-white/70 uppercase mb-1 font-semibold";
  const valuePhoneClass = fullPage
    ? "text-lg sm:text-xl tracking-[3px] sm:tracking-[4px] font-semibold"
    : "text-base sm:text-lg tracking-[4px] sm:tracking-[5px] font-semibold";
  const emailValueClass = fullPage
    ? "text-lg sm:text-xl tracking-wider font-semibold"
    : "text-base sm:text-lg tracking-wider font-semibold";

  return (
    <div
      id="contact"
      className="relative scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
      style={{ minHeight }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none filter brightness-90 contrast-110 saturate-110"
        style={{
          backgroundImage: "url('/imgs/bzn-plane-2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#bd843b]/50 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      </div>

      {/* Content */}
      <div
        className="relative z-[1] flex items-center justify-center px-4 py-10 sm:py-12"
        style={{ minHeight }}
      >
        <div className={gridClasses}>
          {/* Left Side - Contact Info */}
          <div className="text-white space-y-8 text-center lg:text-left">
            <h1 className={titleClass}>CONTACT US</h1>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className={iconWrapClass}>
                  <Phone className={iconClass} />
                </div>
                <div className="text-center lg:text-left shadow-2xl">
                  <p className={labelClass}>PHONE:</p>
                  <p className={valuePhoneClass}>+1 (406) 595-9464</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className={iconWrapClass}>
                  <Mail className={iconClass} />
                </div>
                <div className="text-center lg:text-left">
                  <p className={labelClass}>EMAIL:</p>
                  <p className={emailValueClass}>info@mypristinejet.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Form />
        </div>
      </div>
    </div>
  );
}
