type TechnologyMetricStripProps = {
  items: string[];
};

export function TechnologyMetricStrip({
  items,
}: TechnologyMetricStripProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-4xl border border-black/10 bg-sw-panel px-6 py-6 shadow-soft"
        >
          <div className="text-base font-medium uppercase tracking-[0.14em] text-sw-text">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}
