import React from 'react';

export function CallToAction() {
  return (
    <section id="cta" className="relative isolate py-20 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Schedule. Your Cabin. Your Way.</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Submit a mission profile and our aviation advisors will return with optimized aircraft
          options, pricing, and timing within minutes.
        </p>
        <form className="mt-10 grid gap-4 sm:grid-cols-3">
          <input type="text" required placeholder="Departure City" className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
          <input type="text" required placeholder="Arrival City" className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
          <button type="submit" className="btn-primary">Get Quote</button>
        </form>
        <p className="mt-3 text-xs text-gray-500">Placeholder form – integrate backend / CRM later.</p>
      </div>
    </section>
  );
}
