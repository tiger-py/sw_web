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
          className="rounded-4xl border border-black/10 bg-sw-panel px-7 py-7 shadow-soft"
        >
          <div className="text-lg font-medium uppercase tracking-[0.12em] text-sw-text">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}
