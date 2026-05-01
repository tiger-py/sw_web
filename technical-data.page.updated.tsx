import { ButtonLink } from "@/components/ui/ButtonLink";
import {
  downloads,
  supportSystemFit,
  technicalIntro,
  technicalMetrics,
  technicalTransportMetrics,
} from "@/content/technicalData";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Technical Data",
  "Core specifications and deployment logic for Solar Waves."
);

const operationFeatures = [
  "Self-cleaning",
  "Rainwater-based cleaning",
  "Zero moving parts",
  "Optional battery integration",
  "Low-maintenance operation",
];

export default function TechnicalDataPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-sw-text">
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
            {technicalIntro.eyebrow}
          </div>

          <h1 className="mt-4 max-w-5xl text-5xl font-medium tracking-tight lg:text-6xl">
            {technicalIntro.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-sw-muted">
            {technicalIntro.description}
          </p>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
            Core Specifications
          </div>

          <div className="mt-8 overflow-hidden rounded-4xl border border-black/10 bg-sw-panel shadow-soft">
            <div
              className="aspect-[16/9] w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/technical-data/technical-spec-render-main.webp')",
              }}
            />
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {technicalMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-black/10 bg-sw-panel p-6 shadow-soft"
              >
                <div className="text-3xl font-medium tracking-tight text-sw-text">
                  {metric.value}
                </div>
                <div className="mt-3 text-base leading-6 text-black/58">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-sw-panel">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
            Transport & Deployment
          </div>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-sw-text lg:text-5xl">
            Built for transport and rapid site deployment
          </h2>

          <div className="mt-8 overflow-hidden rounded-4xl border border-black/10 bg-white shadow-soft">
            <div
              className="aspect-[16/9] w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/technical-data/technical-packed-transport-main.webp')",
              }}
            />
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {technicalTransportMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-soft"
              >
                <div className="text-3xl font-medium tracking-tight text-sw-text">
                  {metric.value}
                </div>
                <div className="mt-3 text-base leading-6 text-black/58">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
            Support Systems
          </div>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-sw-text lg:text-5xl">
            One appliance. Multiple support conditions.
          </h2>

          <div className="mt-8 overflow-hidden rounded-4xl border border-black/10 bg-sw-panel shadow-soft">
            <div
              className="aspect-[16/9] w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/technical-data/technical-support-systems-main.webp')",
              }}
            />
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {supportSystemFit.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/10 bg-sw-panel p-6 text-lg leading-7 text-sw-muted shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-sw-panel">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
            Operation
          </div>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-sw-text lg:text-5xl">
            Reduced maintenance, simplified operation
          </h2>

          <div className="mt-8 overflow-hidden rounded-4xl border border-black/10 bg-white shadow-soft">
            <div
              className="aspect-[16/9] w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/technical-data/technical-self-cleaning-main.webp')",
              }}
            />
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {operationFeatures.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/10 bg-white p-6 text-lg leading-7 text-sw-muted shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
            Downloads
          </div>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-sw-text lg:text-5xl">
            Brochures and technical references
          </h2>

          <div className="mt-8 space-y-4">
            {downloads.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-6 border-b border-black/10 py-4 transition hover:text-black/70"
              >
                <div className="text-2xl font-medium tracking-tight text-sw-text">
                  {item.title}
                </div>
                <div className="text-sm uppercase tracking-[0.18em] text-black/48">
                  {item.type}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-24">
          <div className="rounded-4xl border border-black/10 bg-sw-panel p-8 shadow-soft lg:p-12">
            <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
              Next Step
            </div>
            <h2 className="mt-4 text-4xl font-medium tracking-tight text-sw-text lg:text-5xl">
              Review technical fit
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-sw-muted">
              Discuss support conditions, deployment requirements, brochures, and
              technical fit with Solar Waves.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Contact the Team</ButtonLink>
              <ButtonLink href="/deployment-types">View Deployment Types</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
