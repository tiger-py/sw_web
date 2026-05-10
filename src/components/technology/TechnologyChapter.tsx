import { Eyebrow } from "@/components/ui/Eyebrow";
import type { TechnologyChapter as TechnologyChapterType } from "@/types/content";
import { TechnologyFeatureCards } from "./TechnologyFeatureCards";

type TechnologyChapterProps = {
  item: TechnologyChapterType;
  isFirst?: boolean;
};

export function TechnologyChapter({ item }: TechnologyChapterProps) {
  return (
    <section id={item.slug} className="bg-white scroll-mt-24">
      <div className="relative flex min-h-[86vh] items-end overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${item.heroImage}')` }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-shell px-6 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
          <div className="max-w-5xl">
            {item.eyebrow ? (
              <Eyebrow tone="light" className="mb-5">
                {item.eyebrow}
              </Eyebrow>
            ) : null}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <img
                src="/icons/logo.png"
                alt="Solar Waves"
                className="h-auto w-[72px] shrink-0 opacity-95 md:w-[88px] lg:w-[104px]"
              />

              <h1 className="max-w-5xl text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
                {item.title}
              </h1>
            </div>

            <p className="mt-6 max-w-4xl text-2xl leading-9 text-white/90">
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 max-w-4xl">
          <Eyebrow>Technology</Eyebrow>

          <h3 className="mt-4 text-5xl font-medium tracking-tight text-sw-text lg:text-6xl">
            Four principles behind this breakthrough.
          </h3>
        </div>

        <TechnologyFeatureCards items={item.featureCards} />
      </div>
    </section>
  );
}
