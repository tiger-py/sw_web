import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TechnologyTag } from "@/types/content";

type TechnologySectionProps = {
  tags: TechnologyTag[];
};

export function TechnologySection({ tags }: TechnologySectionProps) {
  return (
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading
            eyebrow="Technology"
            title="From solar construction to solar manufacturing."
            description="Solar Waves moves more of the solar system into factory production: assembly, wiring, structural integration, transport preparation, and quality control before the unit reaches site."
          />

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className="rounded-full border border-black/10 bg-sw-panel px-4 py-2 text-sm text-black/72"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-4xl border border-black/10 bg-sw-panel shadow-soft">
            <div
              className="h-[34rem] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/technology/technology-main.webp')" }}
            />
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-4xl border border-black/10 bg-sw-panel shadow-soft">
              <div
                className="h-[16.25rem] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/technology/detail-01.webp')" }}
              />
            </div>
            <div className="overflow-hidden rounded-4xl border border-black/10 bg-sw-panel shadow-soft">
              <div
                className="h-[16.25rem] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/technology/detail-02.webp')" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
