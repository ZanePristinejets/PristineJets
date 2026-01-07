"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [showAirports, setShowAirports] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowAirports(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="absolute w-full flex justify-between items-center p-4 sm:p-5 lg:p-6 z-10">
      {/* Logo */}
      <Link
        href="/"
        aria-label="Return to Home Page"
        className="ml-0 lg:ml-64 hover:cursor-pointer"
      >
        <Image
          src="/imgs/logo.svg"
          alt="Pristine Jets Logo"
          width={65}
          height={65}
          className="w-16 h-16 sm:w-20 sm:h-20"
        />
      </Link>

      {/* Airports dropdown + Contact button */}
      <div className="mr-0 lg:mr-64 flex items-center gap-5 relative">
        {/* Airports dropdown trigger */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={showAirports}
            onClick={() => setShowAirports((v) => !v)}
            className="hover:scale-105 inline-flex items-center gap-0.5 text-white hover:text-[#bd843b] hover:cursor-pointer text-[12px] tracking-[1px] sm:tracking-[2px] transition-all duration-300"
          >
            <span className="font-semibold">LOCATIONS</span>
            {/* Chevron down icon to the right */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-4 h-4 scale-125 mb-0.5 transition-transform duration-600 ${showAirports ? "rotate-180" : "rotate-0"}`}
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {showAirports && (
            <div className="absolute left-1/2 top-full -translate-x-1/2 mt-3 w-80 max-w-[90vw] rounded-sm bg-stone-900/80 text-white shadow-2xl border border-white/10 backdrop-blur-md overflow-hidden z-20">
              <div className="px-3 py-2 bg-black/30 text-[10px] tracking-[2px] font-semibold text-[#bd843b]">
                SERVICEABLE AIRPORTS
              </div>
              <ul role="menu" className="text-xs divide-y divide-white/10">
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Bozeman Yellowstone International Airport</span>
                  <span className="text-[11px] text-white/70">KBZN</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Jackson Hole Airport</span>
                  <span className="text-[11px] text-white/70">KJAC</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Glacier Park International Airport (Kalispell)</span>
                  <span className="text-[11px] text-white/70">KGPI</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Ennis - Big Sky Airport</span>
                  <span className="text-[11px] text-white/70">KEKS</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Missoula Montana Airport</span>
                  <span className="text-[11px] text-white/70">KMSO</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Billings Logan International Airport</span>
                  <span className="text-[11px] text-white/70">KBIL</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Bert Mooney Airport (Butte)</span>
                  <span className="text-[11px] text-white/70">KBT</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Helena Regional Airport</span>
                  <span className="text-[11px] text-white/70">KHLN</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>West Yellowstone Airport</span>
                  <span className="text-[11px] text-white/70">KWYS</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Great Falls International Airport</span>
                  <span className="text-[11px] text-white/70">KGTF</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Mission Field Airport</span>
                  <span className="text-[11px] text-white/70">KLVM</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Gardiner Airport</span>
                  <span className="text-[11px] text-white/70">29S</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Threeforks Airport</span>
                  <span className="text-[11px] text-white/70">9S5</span>
                </li>
                <li className="px-3 py-2 hover:bg-white/10 transition-colors flex items-center justify-between gap-2" role="menuitem">
                  <span>Idaho Falls Regional Airport</span>
                  <span className="text-[11px] text-white/70">KIDA</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Contact button */}
        <Link href="/contact" aria-label="Go to Contact Page">
          <span className="border-gray-200 text-[#bd843b] border hover:border-[#8c5523] hover:cursor-pointer transition-colors duration-300 px-4 sm:px-5 lg:px-6 py-2 text-[12px] tracking-[1px] sm:tracking-[2px] bg-transparent">
            CONTACT US
          </span>
        </Link>
      </div>
    </header>
  );
}
