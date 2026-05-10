import { Eyebrow } from "@/components/ui/Eyebrow";
import { howItWorksSteps } from "@/content/howItWorks";

export function DeploymentProcessStrip() {
  return (
    <section className="border-t border-black/10 bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-shell">
        <div className="mb-12 max-w-4xl">
          <Eyebrow>Deployment Process</Eyebrow>

          <h2 className="mt-4 text-5xl font-medium tracking-tight text-sw-text lg:text-6xl">
            Pre-assembled in the factory for rapid field deployment.
          </h2>

          <p className="mt-6 max-w-3xl text-2xl leading-9 text-sw-muted">
            The deployment strategy follows the same logic across site
            types: build more in the factory, reduce field work, adapt the
            support interface, and simplify operation.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <article
              key={step.value}
              className="rounded-[1.5rem] border border-black/10 bg-sw-panel p-7 shadow-soft"
            >
              <div className="mb-8 text-base font-medium text-sw-green">
                {step.value}
              </div>

              <h3 className="text-2xl font-medium leading-tight text-sw-text">
                {step.title}
              </h3>

              <p className="mt-5 text-2xl leading-9 text-sw-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
