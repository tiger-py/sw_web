import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
  "Self-Cleaning System (SCS)",
  "Rainwater collection",
  "Zero moving parts",
  "On-board Battery (OBO)",
  "Low-maintenance operation",
];

export default function TechnicalDataPage() {
  return (
    <main className="min-h-screen bg-white text-sw-text">
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{
            backgroundImage:
              "url('/images/backgrounds/technical-data-header.webp')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-shell px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <Eyebrow tone="light" className="mb-5">
              {technicalIntro.eyebrow}
            </Eyebrow>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <img
                src="/icons/logo.png"
                alt="Solar Waves"
                className="h-auto w-[72px] shrink-0 opacity-95 md:w-[88px] lg:w-[104px]"
              />

              <h1 className="max-w-5xl text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
                {technicalIntro.title}
              </h1>
            </div>

            <p className="mt-6 max-w-3xl text-2xl leading-9 text-white">
              {technicalIntro.description}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <Eyebrow>Core Specifications</Eyebrow>

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
                <div className="mt-3 text-xl leading-8 text-black/58">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-sw-panel">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <Eyebrow>Transport & Deployment</Eyebrow>

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
                <div className="mt-3 text-xl leading-8 text-black/58">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Eyebrow>Support Systems</Eyebrow>

              <h2 className="mt-4 text-5xl font-medium tracking-tight text-sw-text lg:text-6xl">
                One appliance. Multiple support conditions.
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {supportSystemFit.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-black/10 bg-sw-panel p-6 text-2xl leading-9 text-sw-muted shadow-soft"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-black/10 bg-sw-panel shadow-soft">
              <div
                className="aspect-[16/10] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/technical-data/technical-support-systems-main.webp')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-sw-panel">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-soft lg:order-first">
              <div
                className="aspect-[16/10] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/technical-data/technical-self-cleaning-main.webp')",
                }}
              />
            </div>

            <div>
              <Eyebrow>Operation</Eyebrow>

              <h2 className="mt-4 text-5xl font-medium tracking-tight text-sw-text lg:text-6xl">
                Reduced maintenance, simplified operation
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {operationFeatures.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-black/10 bg-white p-6 text-2xl leading-9 text-sw-muted shadow-soft"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <Eyebrow>Downloads</Eyebrow>

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
                <div className="text-base uppercase tracking-[0.18em] text-black/48">
                  {item.type}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </main>
  );
}
