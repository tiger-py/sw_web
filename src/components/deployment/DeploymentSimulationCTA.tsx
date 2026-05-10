import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function DeploymentSimulationCTA() {
  return (
    <section className="border-t border-black/10 bg-sw-panel px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-shell gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Eyebrow>Simulation</Eyebrow>

          <h2 className="mt-4 text-5xl font-medium tracking-tight text-sw-text lg:text-6xl">
            Calculate annual solar power output and water savings.
          </h2>

          <p className="mt-6 max-w-3xl text-2xl leading-9 text-sw-muted">
            Use the Solar Waves simulation to explore power output,
            water-saving potential, rainwater collection, and deployment
            configuration for a selected location.
          </p>

          <div className="mt-8">
            <ButtonLink href="/simulation">Open Simulation</ButtonLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-soft">
          <div
            className="aspect-[16/9] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/backgrounds/simulation-header.webp')",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
