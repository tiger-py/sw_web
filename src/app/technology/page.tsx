import { TechnologyChapter } from "@/components/technology/TechnologyChapter";
import { technologyChapters, technologyNextStep } from "@/content/technology";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Technology",
  "Breakthroughs behind the Solar Waves infrastructure appliance model."
);

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-sw-text">
      {technologyChapters.map((item, index) => (
        <TechnologyChapter
          key={item.slug}
          item={item}
          isFirst={index === 0}
        />
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
