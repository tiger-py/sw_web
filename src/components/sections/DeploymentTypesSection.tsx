import Link from "next/link";
import { KeywordPill } from "@/components/ui/KeywordPill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { DeploymentType } from "@/types/content";

type DeploymentTypesSectionProps = {
  items: DeploymentType[];
};

export function DeploymentTypesSection({
  items,
}: DeploymentTypesSectionProps) {
  return (
    <section className="border-t border-black/10 bg-sw-panel">
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Deployment Types"
          title="Built for places conventional solar struggles to reach."
          description="Solar Waves is designed for infrastructure settings where speed, access, land use, and site constraints matter. The core appliance remains repeatable while the support system adapts to canals, water bodies, agricultural land, car parks, remote industrial sites, and open ground."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.slug}
              href="/deployment-types"
              className="group relative min-h-[26rem] overflow-hidden rounded-4xl border border-black/10 shadow-soft"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url('${item.heroImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />

              <div className="relative flex h-full flex-col justify-end p-7 lg:p-9">
                <div className="text-sm uppercase tracking-[0.2em] text-white/62">
                  {item.metrics[0]}
                </div>
                <div className="mt-2 text-3xl font-medium tracking-tight text-white lg:text-4xl">
                  {item.title}
                </div>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
                  {item.subtitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.keywords.map((keyword) => (
                    <KeywordPill key={keyword}>{keyword}</KeywordPill>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
