type DeploymentMetricStripProps = {
  items: string[];
};

export function DeploymentMetricStrip({
  items,
}: DeploymentMetricStripProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-4xl border border-white/18 bg-black px-6 py-6 shadow-soft"
        >
          <div className="text-base font-medium uppercase tracking-[0.14em] text-white">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}