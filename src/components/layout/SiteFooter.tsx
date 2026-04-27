import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-shell flex-col gap-6 px-6 py-10 text-sm text-black/56 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>© {new Date().getFullYear()} Solar Waves · Pre-manufactured solar power infrastructure</div>
        <div className="flex gap-6">
          <Link href="/technical-data" className="hover:text-black">
            Technical Data
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}