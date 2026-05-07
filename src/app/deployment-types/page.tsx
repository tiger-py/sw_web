import { DeploymentOverviewGrid } from "@/components/deployment/DeploymentOverviewGrid";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { deploymentTypes } from "@/content/deploymentTypes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Deployment Types",
  "The same Solar Waves appliance configured for multiple deployment environments."
);

export default function DeploymentTypesPage() {
  return (
    <main className="min-h-screen bg-white text-sw-text">
      <section className="relative flex min-h-[76vh] items-end overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/deployments/deployment-over-canals-hero.webp')",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-shell px-6 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
          <div className="max-w-6xl">
            <div className="mb-5 text-sm font-medium uppercase tracking-eyebrow text-white/85">
              Deployment Types
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <img
                src="/icons/logo.png"
                alt="Solar Waves"
                className="h-auto w-[72px] shrink-0 opacity-95 md:w-[88px] lg:w-[104px]"
              />

              <h1 className="max-w-5xl text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
                Solar Waves can be deployed on many different sites.
              </h1>
            </div>

            <p className="mt-6 max-w-4xl text-2xl leading-9 text-white/90">
              The same pre-manufactured solar appliance can be configured for
              open land, canals, agriculture, reservoirs, mobility, parking, and
              charging infrastructure.
            </p>
          </div>
        </div>
      </section>

      <DeploymentOverviewGrid items={deploymentTypes} />

      <FinalCTASection />
    </main>
  );
}