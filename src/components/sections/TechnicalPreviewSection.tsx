import { ButtonLink } from "@/components/ui/ButtonLink";
import type { MetricItem } from "@/types/content";

type TechnicalPreviewSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  metrics: MetricItem[];
};

export function TechnicalPreviewSection({
  eyebrow,
  title,
  description,
  image,
  metrics,
}: TechnicalPreviewSectionProps) {
  return (
    <section className="border-t border-black/10 bg-sw-panel">
      <div className="mx-auto grid max-w-shell gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24 lg:items-start">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
            {eyebrow}
          </div>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-sw-text lg:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-sw-muted">
            {description}
          </p>

          <div className="mt-7 space-y-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-end justify-between gap-6 border-b border-black/10 pb-3"
              >
                <div className="text-2xl font-medium tracking-tight text-sw-text lg:text-3xl">
                  {metric.value}
                </div>
                <div className="text-sm leading-6 text-black/58 lg:text-base">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <ButtonLink href="/technical-data">Review Technical Data</ButtonLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-soft">
          <div
            className="aspect-[16/9] w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
        </div>
      </div>
    </section>
  );
}