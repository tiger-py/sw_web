import Image from "next/image";
import Link from "next/link";
import { deploymentTypes } from "@/content/deploymentTypes";
import { mainNav } from "@/content/site";

const navButtonClass =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/18 bg-white/10 px-4 py-2.5 text-sm font-medium leading-none text-white shadow-sm backdrop-blur transition hover:border-white/35 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/55";

const dropdownLinkClass =
  "block rounded-2xl px-4 py-3 text-white transition hover:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/35";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/12 bg-black/65 backdrop-blur-md">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Solar Waves home"
        >
          <Image
            src="/icons/solar-waves-logo.png"
            alt="Solar Waves"
            width={160}
            height={26}
            className="h-auto w-[160px]"
            priority
          />
        </Link>

        <nav className="hidden flex-wrap items-center justify-end gap-2 md:flex">
          {mainNav.map((item) => {
            if (item.href === "/deployment-types") {
              return (
                <div key={item.href} className="group relative">
                  <Link href={item.href} className={navButtonClass}>
                    {item.label}
                    <span className="ml-2 text-current/65 transition group-hover:text-current">
                      ▾
                    </span>
                  </Link>

                  <div className="pointer-events-none absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="overflow-hidden rounded-3xl border border-white/14 bg-black/90 p-2 shadow-2xl backdrop-blur-xl">
                      {deploymentTypes.map((deployment) => (
                        <Link
                          key={deployment.slug}
                          href={`/deployment-types/${deployment.slug}`}
                          className={dropdownLinkClass}
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
              <Link key={item.href} href={item.href} className={navButtonClass}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
