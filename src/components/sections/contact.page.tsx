import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Contact",
  "Discuss a Solar Waves deployment, pilot project, or technical fit."
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-sw-text">
      <section className="mx-auto max-w-shell px-6 py-20 lg:px-10">
        <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
          Contact
        </div>
        <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight lg:text-6xl">
          Discuss a Solar Waves deployment.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-sw-muted">
          Solar Waves is built for infrastructure owners, project developers, utilities, landholders, water authorities, industrial operators, and partners looking for a faster, more repeatable way to deploy solar power.
        </p>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-sw-muted">
          Contact the team to discuss site conditions, pilot projects, brochures, technical information, support-system fit, and deployment pathways.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:glen@nbsystemsgroup.com"
            className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90"
          >
            Email the Team
          </a>
          <a
            href="tel:+61400799865"
            className="inline-flex rounded-full border border-black/12 bg-black/[0.04] px-6 py-3 text-sm font-medium text-black transition hover:bg-black/[0.08]"
          >
            Call the Team
          </a>
        </div>
      </section>

      <section className="border-t border-black/10 bg-sw-panel">
        <div className="mx-auto max-w-shell px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
              Start with the site
            </div>
            <h2 className="mt-4 text-4xl font-medium tracking-tight lg:text-5xl">
              We’ll assess the deployment logic.
            </h2>
            <p className="mt-5 text-lg leading-8 text-sw-muted">
              Every Solar Waves project begins with the infrastructure condition: canal, land, water, car park, agricultural site, remote operation, or temporary power requirement. From there, the key question is which support interface best fits the site.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Site type and location",
              "Available area or corridor length",
              "Support condition",
              "Grid or off-grid requirement",
              "Access constraints",
              "Pilot or full-scale project intent",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/10 bg-white p-5 text-base font-medium text-sw-text shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
