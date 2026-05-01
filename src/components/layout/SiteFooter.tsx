import Image from "next/image";
import Link from "next/link";

const platformLinks = [
  { label: "Technology", href: "/technology" },
  { label: "Technical Data", href: "/technical-data" },
  { label: "Simulation", href: "/simulation" },
];

const deploymentLinks = [
  { label: "Ground-Mount", href: "/deployment-types#ground-mount" },
  { label: "Over Canals", href: "/deployment-types#over-canals" },
  { label: "Agrivoltaics", href: "/deployment-types#agrivoltaics" },
  { label: "Floating Solar", href: "/deployment-types#floating-solar" },
  { label: "Mobile Power", href: "/deployment-types#mobile-power" },
  { label: "Car Parks", href: "/deployment-types#car-parks" },
  { label: "EV Charging Stations", href: "/deployment-types#ev-charging-stations" },
];

const contactLinks = [
  { label: "Discuss a Deployment", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-sw-panel">
      <div className="mx-auto max-w-shell px-6 py-14 lg:px-10 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.75fr_1fr_0.75fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/icons/solar-waves-logo.svg"
                alt="Solar Waves"
                width={180}
                height={48}
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-6 max-w-md text-base leading-7 text-sw-muted">
              Pre-manufactured solar power infrastructure, delivered as an
              industrial appliance for faster, more repeatable deployment.
            </p>
          </div>

          <FooterColumn title="Platform" links={platformLinks} />
          <FooterColumn title="Deployment Types" links={deploymentLinks} />
          <FooterColumn title="Contact" links={contactLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-black/50 lg:flex-row lg:items-center lg:justify-between">
          <div>
            © {new Date().getFullYear()} Solar Waves. All rights reserved.
          </div>

          <div className="text-black/45">
            A new industrial model for solar deployment.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
        {title}
      </h2>

      <nav className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={`${link.label}-${link.href}`}
            href={link.href}
            className="text-sm leading-6 text-sw-muted transition hover:text-sw-text"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}