"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      '<span class="font-bold">Pristine Jets</span> transformed our aircraft interior with their deep clean service -every surface felt <span class="font-bold">fresh, spotless,</span> and truly <span class="font-bold">first-class</span>. Their attention to detail is unmatched.',
    name: "Stella Doe",
    subtitle: "FUSCE FINIBUS IACULIS VELIT",
    image: "/professional-woman-smiling.png",
  },
  {
    id: 2,
    quote:
      '<span class="font-bold">Outstanding</span> service and attention to <span class="font-bold">detail.</span> The team exceeded our expectations in <span class="font-bold">every way possible.</span>',
    name: "John Smith",
    subtitle: "LOREM IPSUM DOLOR SIT",
    image: "/professional-man-suit.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="min-h-[70vh] md:min-h-[90vh] w-full flex items-center justify-center px-4">
      <div className="w-full flex flex-col items-center justify-center mx-auto text-center relative space-y-3 md:space-y-4">
        {/* Header */}
        <div className="pb-10 md:pb-14">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-serif tracking-[6px] sm:tracking-[10px] md:tracking-[12px] text-gray-800 mb-1">
            WHAT CLIENT&apos;S SAY?
          </h2>
          <div className="w-full h-px bg-gray-800 mx-auto"></div>
        </div>

        {/* Quote Icon */}
        <div className="">
          <Quote
            className="w-8 h-8 md:w-10 md:h-10 text-[#896452]  mx-auto"
            fill="currentColor"
          />
        </div>

        {/* Testimonial Content */}
        <div className="mb-8 md:mb-12">
          <blockquote className="text-[18px] sm:text-[20px] md:text-[24px] leading-relaxed text-gray-800 font-semibold max-w-2xl mx-auto min-h-[150px] md:min-h-[125px] px-1">
            &ldquo;
            <span
              dangerouslySetInnerHTML={{ __html: currentTestimonial.quote }}
            />
            &rdquo;
          </blockquote>
        </div>

        {/* Client Info centered, arrows aligned to content edges */}
        <div className="relative w-full max-w-3xl mx-auto px-6 sm:px-10 md:px-16">
          <div className="flex items-center justify-center gap-2">
            <div className="hidden sm:block flex-1 h-px bg-gray-200"></div>

            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
                width={80}
                height={80}
              />
            </div>
            <div className="text-left">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                {currentTestimonial.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 tracking-wider">
                {currentTestimonial.subtitle}
              </p>
            </div>
            <div className="hidden sm:block flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Navigation Arrows positioned to match testimonial width */}
          <button
            onClick={goToPrevious}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full hover:cursor-pointer hover:bg-[#bd843b] hover:text-white border-gray-300 text-[#bd843b] border flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full hover:cursor-pointer hover:bg-[#bd843b] hover:text-white border-gray-300 text-[#bd843b] border flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
