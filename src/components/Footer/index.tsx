export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-700">
      <div className="mx-auto max-w-screen-xl px-6 py-4">
        <div className="w-full flex items-center justify-center text-xs tracking-wide">
          <div className="flex items-center gap-4">
            <span><span aria-label="Copyright" title="Copyright" className="inline-block align-middle">&copy;</span> 2025 PRISTINE JETS. All Rights Reserved.</span>
            <span aria-hidden className="block h-4 w-px bg-gray-300" />
            <a href="#" className="hover:text-[#bd843b] transition-all duration-200">
              Privacy Policy
            </a>
            <span aria-hidden className="block h-4 w-px bg-gray-300" />
            <a href="#" className="hover:text-[#bd843b] transition-all duration-200">
              Term and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
