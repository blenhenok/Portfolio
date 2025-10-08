"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="flex items-center p-4">
      {/* Home link - Left side only on other pages */}
      {!isHomePage && (
        <Link href="/" className="flex flex-col items-center mr-auto">
          <span className="text-5xl font-bold">Blen Henok</span>
        </Link>
      )}

      {/* Navigation links container - Always right-aligned */}
      <div className="flex text-3xl items-center space-x-6 ml-auto px-10 italic">
        <Link href="/work" className="flex flex-col items-center">
          <span>Work</span>
          <Image src="/icons/sweater.png" alt="Work" width={90} height={90} />
        </Link>

        <Link href="/about" className="flex flex-col items-center">
          <span>About</span>
          <Image src="/icons/skull.png" alt="About" width={90} height={90} />
        </Link>

        <Link href="/contact" className="flex flex-col items-center">
          <span>Contact</span>
          <Image src="/icons/space.png" alt="Contact" width={90} height={90} />
        </Link>

        <Link href="/cv" className="flex flex-col items-center">
          <span>CV</span>
          <Image src="/icons/clip.png" alt="CV" width={90} height={90} />
        </Link>
      </div>
    </nav>
  );
}
