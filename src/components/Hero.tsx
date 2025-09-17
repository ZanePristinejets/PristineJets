import React from 'react';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Private Air Travel, <span className="text-brand-600">Refined</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Pristine Jets delivers seamless, secure and luxurious private jet charter and fractional
            ownership solutions—engineered around your schedule, your preferences, and your privacy.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#cta" className="btn-primary">Request Itinerary</a>
            <a href="#features" className="text-sm font-semibold text-gray-700 hover:text-brand-600">Explore Fleet →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
