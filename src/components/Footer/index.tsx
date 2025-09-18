export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 h-20">
      <div className="flex items-center justify-center w-full h-full gap-5">
        <span className="text-xs flex items-center gap-2">
          <span
            aria-label="Copyright"
            title="Copyright"
            className="inline-block align-middle"
          >
            &copy;
          </span>
          2025 <span className="text-[#bd843b] font-bold">PRISTINE JETS</span>. All Rights
          Reserved.
        </span>
        <span className="h-5 w-[1px] bg-gray-300" />
        <a
          href="#"
          className="text-xs hover:text-[#bd843b] transition-all duration-200"
        >
          Privacy Policy
        </a>
        <span className="h-5 w-[1px] bg-gray-300" />
        <a
          href="#"
          className="text-xs hover:text-[#bd843b] transition-all duration-200"
        >
          Term and Conditions
        </a>
      </div>
    </footer>
  );
}
