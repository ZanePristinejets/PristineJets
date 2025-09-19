import { Phone, Mail } from "lucide-react";
import Form from "./Form";

export default function Contact() {
  return (
    <div className="min-h-[80vh] relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/imgs/contact-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[80vh] flex items-center justify-center px-4 py-10 sm:py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Contact Info */}
          <div className="text-white space-y-8 text-center lg:text-left">
            <h1 className="font-serif text-[32px] sm:text-[36px] lg:text-[40px] tracking-[8px] sm:tracking-[9px] lg:tracking-[10px] border-b border-white inline-block mx-auto mb-8 sm:mb-10 lg:mb-12">
              CONTACT US
            </h1>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 flex items-center justify-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#bd843b]" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xs sm:text-sm tracking-[4px] sm:tracking-[5px] text-white/70 uppercase mb-1">
                    PHONE:
                  </p>
                  <p className="text-base sm:text-lg tracking-[4px] sm:tracking-[5px]">
                    +00 (9876)543-210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#bd843b]" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xs sm:text-sm text-white/70 tracking-[4px] sm:tracking-[5px] uppercase mb-1">
                    EMAIL:
                  </p>
                  <p className="text-base sm:text-lg tracking-wider">
                    info@pristinejets.com
                  </p>
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
