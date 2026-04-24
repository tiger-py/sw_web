import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { MetricItem } from "@/types/content";

type ProofSectionProps = {
  metrics: MetricItem[];
};

export function ProofSection({ metrics }: ProofSectionProps) {
  return (
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading
          eyebrow="Proof"
          title="Proven in deployment."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} item={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}