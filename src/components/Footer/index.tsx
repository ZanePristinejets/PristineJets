export default function Footer() {
  return (
    <footer data-nosnippet className="w-full bg-gray-50 text-gray-700" role="contentinfo">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-auto flex-col items-center justify-center gap-3 py-4 md:h-[43px] md:flex-row md:gap-5 md:py-0">
          <span className="flex items-center gap-2 text-center text-xs md:text-left">
            <span
              aria-label="Copyright"
              title="Copyright"
              className="inline-block align-middle"
            >
              &copy;
            </span>
            {new Date().getFullYear()}{" "}
            <span className="font-bold text-[#bd843b]">PRISTINE JETS</span>. All
            Rights Reserved.
          </span>

          <span className="hidden h-5 w-px bg-gray-300 md:block" />

          <nav
            aria-label="Footer navigation"
            className="flex items-center gap-3 md:gap-5"
          >
            <a
              href="#"
              aria-label="Privacy Policy"
              className="rounded-sm text-xs transition-colors duration-200 hover:text-[#bd843b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bd843b]/40"
            >
              Privacy Policy
            </a>
            <span className="hidden h-5 w-px bg-gray-300 md:block" />
            <a
              href="#"
              aria-label="Terms and Conditions"
              className="rounded-sm text-xs transition-colors duration-200 hover:text-[#bd843b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bd843b]/40"
            >
              Terms and Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
