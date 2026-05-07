import Image from "next/image";
import Link from "next/link";
import { deploymentTypes } from "@/content/deploymentTypes";
import { mainNav } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-black/65 backdrop-blur-md">
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

        <nav className="hidden items-center gap-8 text-sm text-white md:flex">
          {mainNav.map((item) => {
            if (item.href === "/deployment-types") {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-white transition hover:text-white/80"
                  >
                    {item.label}
                    <span className="text-white/60">▾</span>
                  </Link>

                  <div className="pointer-events-none absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="overflow-hidden rounded-3xl border border-white/14 bg-black/80 p-2 shadow-2xl backdrop-blur-xl">
                      {deploymentTypes.map((deployment) => (
                        <Link
                          key={deployment.slug}
                          href={`/deployment-types/${deployment.slug}`}
                          className="block rounded-2xl px-4 py-3 text-white/86 transition hover:bg-white/12 hover:text-white"
                        >
                          {deployment.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-white transition hover:text-white/80"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
