import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricCard } from "@/components/ui/MetricCard";
import type { HeroContent, MetricItem } from "@/types/content";

type ApplianceRevealSectionProps = {
  content: HeroContent;
  metrics: MetricItem[];
};

export function ApplianceRevealSection({
  content,
  metrics,
}: ApplianceRevealSectionProps) {
  return (
    <section
      id="appliance"
      className="relative overflow-hidden border-t border-black/10 bg-sw-panel"
    >
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-5xl">
          <Eyebrow className="mb-5 text-sw-muted">
            {content.eyebrow}
          </Eyebrow>

          <h1 className="max-w-5xl text-5xl font-medium tracking-tight text-sw-text sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>

          <p className="mt-6 max-w-4xl whitespace-pre-line text-2xl leading-9 text-sw-muted">
            {content.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={content.primaryCta.href}>
              {content.primaryCta.label}
            </ButtonLink>

            <a
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-4 text-base font-medium text-sw-text shadow-sm transition hover:border-black/30 hover:bg-black/[0.03]"
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} item={metric} />
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-4xl border border-black/10 bg-black shadow-soft">
          <div
            className="h-[34rem] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero/appliance-reveal.webp')" }}
          />
        </div>
      </div>
    </section>
  );
}
