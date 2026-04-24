import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { MetricItem } from "@/types/content";

type AutomationSectionProps = {
  metrics: MetricItem[];
};

export function AutomationSection({
  metrics,
}: AutomationSectionProps) {
  return (
    <section className="border-t border-black/10 bg-sw-panel">
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Factory automation"
          title="Designed for factory automation."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="overflow-hidden rounded-4xl border border-black/10 bg-black shadow-soft">
            <div
              className="h-[36rem] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/factory/factory-main.webp')" }}
            />
          </div>

          <div className="grid gap-5 content-start">
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <MetricCard key={metric.label} item={metric} />
              ))}
            </div>

            <div className="rounded-4xl border border-black/10 bg-white p-6 shadow-soft">
              <div className="text-sm uppercase tracking-[0.22em] text-black/48">
                Automation keywords
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Robotic assembly",
                  "AI quality control",
                  "Continuous flow",
                  "Automated logistics",
                  "Replicable production",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-sw-panel px-4 py-2 text-sm text-black/72"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}