import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden border-t border-black/10 bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-65"
        style={{
          backgroundImage: "url('/images/backgrounds/cta-background.webp')",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <div className="rounded-4xl border border-white/20 bg-sw-panel/95 p-8 shadow-soft backdrop-blur-md lg:p-12">
          <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
            Next Step
          </div>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-sw-text lg:text-5xl">
            Talk to us about Solar Waves.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-sw-muted">
            Discuss pilot projects, site fit, deployment requirements, and
            support-system fit with the Solar Waves team.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Contact the Team</ButtonLink>
            <ButtonLink href="/deployment-types" variant="secondary">
              View Deployment Types
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}