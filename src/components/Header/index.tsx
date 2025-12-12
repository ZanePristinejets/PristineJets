import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute w-full flex justify-between items-center p-4 sm:p-5 lg:p-6 z-10">
      {/* Logo */}
      <Link href="/" aria-label="Return to Home Page" className="ml-0 lg:ml-64 hover:cursor-pointer">
        <Image src="/imgs/logo.svg" alt="Pristine Jets Logo" width={65} height={65} />
      </Link>

      {/* Contact button */}
      <Link href="/contact" aria-label="Go to Contact Page" className="mr-0 lg:mr-64">
        <span className="border-gray-200 text-[#bd843b] border hover:border-[#8c5523] hover:cursor-pointer transition-colors duration-300 px-4 sm:px-5 lg:px-6 py-2 text-[10px] tracking-[1px] sm:tracking-[2px] bg-transparent">
          CONTACT US
        </span>
      </Link>
    </header>
  );
}
