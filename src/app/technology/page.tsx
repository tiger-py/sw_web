import { ButtonLink } from "@/components/ui/ButtonLink";
import { MetricCard } from "@/components/ui/MetricCard";
import { TechnologyChapter } from "@/components/technology/TechnologyChapter";
import {
  technologyChapters,
  technologyHeroMetrics,
  technologyIntro,
  technologyNextStep,
} from "@/content/technology";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Technology",
  "From factory to field: the Solar Waves solar appliance system."
);

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-sw-text">
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-shell px-6 py-16 lg:px-10 lg:py-24">
          <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
            {technologyIntro.eyebrow}
          </div>

          <h1 className="mt-4 max-w-5xl text-5xl font-medium tracking-tight lg:text-6xl">
            {technologyIntro.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-sw-muted">
            {technologyIntro.description}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {technologyHeroMetrics.map((metric) => (
              <MetricCard key={metric.label} item={metric} />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/technical-data" variant="secondary">
              View Technical Data
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact the Team
            </ButtonLink>
          </div>
        </div>
      </section>

      {technologyChapters.map((item) => (
        <TechnologyChapter key={item.slug} item={item} />
      ))}

      <section className="border-t border-black/10 bg-sw-panel">
        <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-24">
          <div className="rounded-4xl border border-black/10 bg-white p-8 shadow-soft lg:p-12">
            <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
              {technologyNextStep.eyebrow}
            </div>

            <h2 className="mt-4 text-4xl font-medium tracking-tight text-sw-text lg:text-5xl">
              {technologyNextStep.title}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-sw-muted">
              {technologyNextStep.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href={technologyNextStep.primaryCta.href}
                variant="secondary"
              >
                {technologyNextStep.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={technologyNextStep.secondaryCta.href}
                variant="secondary"
              >
                {technologyNextStep.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}