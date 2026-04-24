import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { MetricItem } from "@/types/content";
import { MetricCard } from "@/components/ui/MetricCard";

type ApplianceRevealSectionProps = {
  metrics: MetricItem[];
};

export function ApplianceRevealSection({
  metrics,
}: ApplianceRevealSectionProps) {
  return (
    <section
      id="appliance"
      className="relative overflow-hidden border-t border-black/10 bg-sw-panel"
    >
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} item={metric} />
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <SectionHeading
            eyebrow="Solar Appliance"
            title="Solar Waves, a fold-out solar power appliance. "
            description="Factory-built, pre-wired and delivered as an integrated solar appliance rather than a labour-heavy field-built assembly."
          />

          <div className="lg:justify-self-end">
            <ButtonLink href="/technology">Explore Technology</ButtonLink>
          </div>
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