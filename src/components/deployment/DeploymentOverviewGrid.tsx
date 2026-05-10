import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { DeploymentType } from "@/types/content";

type DeploymentOverviewGridProps = {
  items: DeploymentType[];
};

export function DeploymentOverviewGrid({ items }: DeploymentOverviewGridProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/deployment-types/${item.slug}`}
              className="group overflow-hidden rounded-4xl border border-black/10 bg-sw-panel shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="aspect-[16/9] bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.heroImage}')` }}
              />

              <div className="p-6 lg:p-7">
                {item.eyebrow ? <Eyebrow>{item.eyebrow}</Eyebrow> : null}

                <h2 className="mt-3 text-3xl font-medium tracking-tight text-sw-text">
                  {item.title}
                </h2>

                <p className="mt-4 text-2xl leading-9 text-sw-muted">
                  {item.subtitle}
                </p>

                <div className="mt-6 text-base font-medium uppercase tracking-[0.16em] text-sw-green">
                  Learn more
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}