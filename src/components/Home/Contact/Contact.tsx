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
      <div className="relative z-10 min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Contact Info */}
          <div className="text-white space-y-8">
            <h1 className="font-serif text-[40px] tracking-[10px] border-b border-white inline-block mx-auto mb-12">
              CONTACT US
            </h1>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#bd843b]" />
                </div>
                <div>
                  <p className="text-sm tracking-[5px] text-white/70 uppercase mb-1">
                    PHONE:
                  </p>
                  <p className="text-lg tracking-[5px]">+00 (9876)543-210</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#bd843b]" />
                </div>
                <div>
                  <p className="text-sm text-white/70 tracking-[5px] uppercase mb-1">
                    EMAIL:
                  </p>
                  <p className="text-lg tracking-wider">
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
