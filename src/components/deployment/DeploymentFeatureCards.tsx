import type { DeploymentFeatureCard } from "@/types/content";

type DeploymentFeatureCardsProps = {
  items: DeploymentFeatureCard[];
};

export function DeploymentFeatureCards({ items }: DeploymentFeatureCardsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="group overflow-hidden rounded-4xl border border-black/10 bg-white shadow-soft"
        >
          <div
            className="aspect-[16/9] bg-cover bg-center transition duration-500 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url('${item.image}')` }}
            aria-hidden="true"
          />

          <div className="p-7 lg:p-8">
            <h3 className="text-3xl font-medium tracking-tight text-sw-text lg:text-4xl">
              {item.title}
            </h3>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-sw-muted lg:text-xl lg:leading-9">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
