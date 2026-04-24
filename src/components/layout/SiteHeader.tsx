import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-black/65">
      <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/solar-waves-logo.png"
            alt="Solar Waves"
            width={160}
            height={26}
            className="h-auto w-[160px]"
            priority
          />
        </Link>

        <nav className="hidden gap-8 text-sm text-white md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white transition hover:text-white/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}