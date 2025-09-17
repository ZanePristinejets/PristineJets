import React from 'react';

const features = [
  {
    title: 'Safety First',
    desc: 'ARGUS & Wyvern registered partners with uncompromising maintenance standards.'
  },
  {
    title: 'Global Reach',
    desc: 'Access to 7,000+ aircraft worldwide, matched precisely to each mission profile.'
  },
  {
    title: 'Personalization',
    desc: 'Catering, ground transport, and onboard ambiance curated to your preferences.'
  },
  {
    title: 'Transparent Pricing',
    desc: 'Clear, optimized quoting—no hidden repositioning surprises.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Fly Pristine</h2>
          <p className="mt-4 text-gray-600">Operational excellence meets boutique service.</p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(f => (
            <div key={f.title} className="group relative">
              <div className="absolute -inset-2 -z-10 rounded-xl opacity-0 transition group-hover:opacity-100 group-hover:shadow-soft" />
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
