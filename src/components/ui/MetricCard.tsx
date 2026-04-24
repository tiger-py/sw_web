import type { MetricItem } from "@/types/content";

type MetricCardProps = {
  item: MetricItem;
};

export function MetricCard({ item }: MetricCardProps) {
  return (
    <div className="rounded-4xl border border-white/18 bg-black p-7 shadow-soft">
      <div className="text-3xl font-medium tracking-tight text-white">
        {item.value}
      </div>
      <div className="mt-3 text-base text-white/80">{item.label}</div>
    </div>
  );
}