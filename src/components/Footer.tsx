import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 text-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold text-gray-900">Pristine Jets</p>
        <nav className="flex gap-6 text-gray-600">
          <a href="#features" className="hover:text-brand-600">Features</a>
          <a href="#cta" className="hover:text-brand-600">Quote</a>
          <a href="#" className="hover:text-brand-600">Privacy</a>
        </nav>
        <p className="text-gray-500">© {new Date().getFullYear()} Pristine Jets. All rights reserved.</p>
      </div>
    </footer>
  );
}
