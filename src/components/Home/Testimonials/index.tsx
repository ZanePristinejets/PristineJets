"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "I highly recommend Zane and his crew. They gave such personalized and diligent professional attention to detail, and I love the product.",
    name: "David J.",
    subtitle: "Valued Customer",
    image: "/default-avatar.webp",
  },
    {
    id: 2,
    quote:
      "Excellent service. Detail oriented, on time and reliable. Highly recommended 5/5",
    name: "Milen S.",
    subtitle: "Valued Customer",
    image: "/default-avatar.webp",
  },
  {
    id: 3,
    quote:
      "Great experience working with Pristine Jets. They were responsive, showed up on time, and paid close attention to detail. Would definitely use them again.",
    name: "Jonathan S.",
    subtitle: "Valued Customer",
    image: "/default-avatar.webp",
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
    <section className="h-auto py-25 w-full flex items-center justify-center px-4 bg-white">
      <div className="w-full flex flex-col items-center justify-center mx-auto text-center relative space-y-3 md:space-y-4">
        {/* Header */}
        <div className="pb-10 md:pb-14">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-serif tracking-[6px] sm:tracking-[10px] md:tracking-[12px] text-gray-800 mb-1">
            WHAT OUR CLIENT&apos;S SAY
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
            &ldquo;{currentTestimonial.quote}&rdquo;
          </blockquote>
        </div>

        {/* Client Info centered with arrows inline */}
        <div className="flex items-center justify-center gap-4 w-[50%]">
          <button
            onClick={goToPrevious}
            aria-label="Previous testimonial"
            className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full hover:cursor-pointer bg-[#bd843b] hover:bg-white text-white border-gray-300 hover:text-[#bd843b] border flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <div className="hidden md:block flex-1 h-px bg-gray-200"></div>

          <div className="shrink-0 rounded-full overflow-hidden">
            <Image
              src={currentTestimonial.image || "/default-avatar.png"}
              alt={currentTestimonial.name}
              className="w-14 h-14 object-cover"
              width={80}
              height={80}
            />
          </div>
          <div className="text-left">
            <h3 className="text-base md:text-lg font-semibold text-gray-800">
              {currentTestimonial.name}
            </h3>
            {currentTestimonial.subtitle && (
              <p className="text-xs md:text-sm text-gray-500 tracking-wider">
                {currentTestimonial.subtitle}
              </p>
            )}
          </div>

          <div className="hidden md:block flex-1 h-px bg-gray-200"></div>

          <button
            onClick={goToNext}
            aria-label="Next testimonial"
            className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full hover:cursor-pointer bg-[#bd843b] hover:bg-white text-white border-gray-300 hover:text-[#bd843b] border flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
