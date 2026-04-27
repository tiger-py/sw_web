import { KeywordPill } from "@/components/ui/KeywordPill";
import type { TechnologyChapter as TechnologyChapterType } from "@/types/content";
import { TechnologyCarousel } from "./TechnologyCarousel";
import { TechnologyMetricStrip } from "./TechnologyMetricStrip";

type TechnologyChapterProps = {
  item: TechnologyChapterType;
  isFirst?: boolean;
};

export function TechnologyChapter({ item, isFirst = false }: TechnologyChapterProps) {
  return (
    <section
      id={item.slug}
      className={`${isFirst ? "" : "border-t border-black/10"} bg-white scroll-mt-24`}
    >
      <div
        className={`mx-auto max-w-shell px-6 lg:px-10 ${
          isFirst ? "pt-8 pb-16 lg:pt-10 lg:pb-24" : "py-16 lg:py-24"
        }`}
      >
        <div className="mb-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            {item.eyebrow ? (
              <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
                {item.eyebrow}
              </div>
            ) : null}

            <h2 className="mt-4 text-4xl font-medium tracking-tight text-sw-text lg:text-5xl">
              {item.title}
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-sw-muted">
              {item.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {item.keywords.map((keyword) => (
              <KeywordPill key={keyword}>{keyword}</KeywordPill>
            ))}
          </div>
        </div>

        <div className="relative left-1/2 right-1/2 mb-8 w-screen -translate-x-1/2">
          <div
            className="h-[42rem] bg-cover bg-center sm:h-[48rem] lg:h-[56rem]"
            style={{ backgroundImage: `url('${item.heroImage}')` }}
          />
        </div>

        <TechnologyCarousel slides={item.slides} />

        <div className="mt-8">
          <TechnologyMetricStrip items={item.metrics} />
        </div>
      </div>
    </section>
  );
}
