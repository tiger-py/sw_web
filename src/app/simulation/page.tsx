import {
  simulationIntro,
  simulationSteps,
  simulationScience,
} from "@/content/simulation";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata = {
  title: "Simulation | Solar Waves",
  description:
    "Explore indicative Solar Waves power generation, water savings, and rainwater collection across ground and over-water deployment scenarios.",
};

export default function SimulationPage() {
  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{ backgroundImage: `url(${simulationIntro.backgroundImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[72vh] max-w-shell items-end px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-5 text-sm font-medium uppercase tracking-eyebrow text-white">
              {simulationIntro.eyebrow}
            </div>

            <h1 className="text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
              {simulationIntro.title}
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-white">
              {simulationIntro.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-shell">
          <div className="mb-10 max-w-3xl">
            <div className="mb-3 text-sm font-medium uppercase tracking-eyebrow text-sw-green">
              How to use the simulation
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-black md:text-5xl">
              Start with the site, then test the deployment logic.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/70">
              Follow the steps below before using the live simulator. The model
              is best used as an early-stage planning tool for comparing site
              conditions, deployment types, and indicative performance.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {simulationSteps.map((step) => (
              <article
                key={step.value}
                className="rounded-[1.5rem] border border-black/10 bg-sw-panel p-6"
              >
                <div className="mb-8 text-sm font-medium text-sw-green">
                  {step.value}
                </div>

                <h3 className="text-xl font-medium text-black">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sw-panel px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-shell">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-sm font-medium uppercase tracking-eyebrow text-sw-green">
              Interactive Model
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-black md:text-5xl">
              Power output and water-savings simulation
            </h2>

            <p className="mt-4 text-lg leading-8 text-black/70">
              Configure the array, select a location, compare deployment
              conditions, and review indicative performance metrics inside the
              live simulator.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
            <iframe
              src="/simulation/index.html?api=https://sw-api-sn0k.onrender.com"
              title="Solar Waves Simulation"
              className="block h-[920px] w-full border-0 xl:h-[960px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-3 text-sm font-medium uppercase tracking-eyebrow text-sw-green">
              {simulationScience.eyebrow}
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-black md:text-5xl">
              {simulationScience.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/70">
              {simulationScience.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {simulationScience.sections.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-black/10 bg-sw-panel p-6"
              >
                <h3 className="text-xl font-medium text-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-black/65">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </main>
  );
}