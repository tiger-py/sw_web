import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TechnologyPreviewSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  chapters: string[];
};

export function TechnologyPreviewSection({
  eyebrow,
  title,
  description,
  image,
  chapters,
}: TechnologyPreviewSectionProps) {
  return (
    <section className="border-t border-black/10 bg-sw-panel">
      <div className="mx-auto grid max-w-shell gap-12 px-6 py-40 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:px-10 lg:py-48">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {chapters.map((chapter) => (
              <div
                key={chapter}
                className="border-b border-black/10 pb-4 text-2xl leading-9 text-sw-muted"
              >
                {chapter}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ButtonLink href="/technology">View Technology</ButtonLink>
          </div>
        </div>

        <div className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-soft">
          <div
            className="aspect-[4/3] min-h-[560px] w-full bg-cover bg-center lg:min-h-[680px]"
            style={{ backgroundImage: `url('${image}')` }}
          />
        </div>
      </div>
    </section>
  );
}