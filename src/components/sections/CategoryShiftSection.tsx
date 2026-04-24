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
          eyebrow="Category shift"
          title="Solar still arrives as construction. Solar Waves arrives as appliance."
          description="Factory-built, pre-wired, fold-out utility-scale solar designed to deploy faster and adapt to more site conditions."
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