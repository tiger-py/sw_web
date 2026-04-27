import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { MetricItem } from "@/types/content";

type CategoryShiftSectionProps = {
  metrics: MetricItem[];
};

export function CategoryShiftSection({
  metrics,
}: CategoryShiftSectionProps) {
  return (
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-shell gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Category Shift"
          title="Conventional solar standardizes components. Solar Waves standardizes deployment."
          description="Solar panels, inverters, rails, and clamps are already standardized. The remaining constraint is the field-built deployment model. Solar Waves changes the unit of deployment itself: an integrated power appliance manufactured before it reaches the site."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((item) => (
            <MetricCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
