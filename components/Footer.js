
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex space-x-6 p-10 px-15">
      <Link href="https://github.com/blenhenok" target="_blank" rel="noopener noreferrer">
        <Image src="/icons/github.png" alt="GitHub" width={50} height={50} />
      </Link>
      <a href="mailto:your-email@example.com">
        <Image src="/icons/mail.png" alt="Email" width={50} height={50} />
      </a>
      <Link
        href="https://linkedin.com/in/blenhenok"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Image src="/icons/linkedin.png" alt="Linkedin" width={50} height={50} />
      </Link>
      <Link
        href="https://www.fiverr.com/sellers/blenhenok/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Image src="/icons/fiverr.png" alt="Fiverr" width={50} height={50} />
      </Link>
    </div>
  );
}
