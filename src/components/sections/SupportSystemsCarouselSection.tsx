"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SupportSystem } from "@/types/content";

type SupportSystemsCarouselSectionProps = {
  items: SupportSystem[];
};

const slideWidth = "clamp(320px, 58vw, 1040px)";
const halfSlideWidth = "clamp(160px, 29vw, 520px)";

export function SupportSystemsCarouselSection({
  items,
}: SupportSystemsCarouselSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const extendedItems = useMemo(() => {
    if (items.length === 0) return [];
    const last = items[items.length - 1];
    const first = items[0];
    return [last, ...items, first];
  }, [items]);

  function goPrevious() {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  }

  function goNext() {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  }

  return (
    <section className="border-t border-black/10 bg-sw-panel">
      <div className="mx-auto max-w-shell px-6 py-12 lg:px-10 lg:py-16">
        <SectionHeading
          eyebrow="Adjustable Support Systems"
          title="The appliance stays consistent. The support adapts."
          description="Different sites require different interfaces. Solar Waves separates the repeatable power appliance from the site-specific support condition, allowing rail, suspended, elevated, canopy, ground, or floating systems to serve the same underlying deployment logic."
        />
      </div>

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div className="relative flex w-screen items-center justify-center px-0">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous support system"
            className="absolute left-6 top-[29%] z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-xl text-white transition hover:bg-black/90 lg:left-8 lg:h-14 lg:w-14 lg:text-2xl"
          >
            ←
          </button>

          <div className="w-screen overflow-hidden">
            <div
              className="flex items-start gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(calc(50vw - ${activeIndex + 1} * (${slideWidth} + 1.5rem) - ${halfSlideWidth}))`,
              }}
            >
              {extendedItems.map((item, index) => {
                const realIndex =
                  index === 0
                    ? items.length - 1
                    : index === extendedItems.length - 1
                    ? 0
                    : index - 1;

                const isActive = realIndex === activeIndex;

                return (
                  <div
                    key={`${item.name}-${index}`}
                    className="shrink-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: slideWidth,
                    }}
                  >
                    <div
                      className={`overflow-hidden rounded-t-4xl border border-black bg-white shadow-soft transition-opacity duration-700 ${
                        isActive ? "opacity-100" : "opacity-45"
                      }`}
                      style={{
                        aspectRatio: "16 / 9",
                      }}
                    >
                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>

                    {isActive ? (
                      <div className="rounded-b-4xl bg-black px-4 py-3 text-white sm:px-5 sm:py-4 lg:px-6 lg:py-5">
                        <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/66">
                          Support Interface
                        </div>

                        <h3 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
                          {item.name}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80 lg:text-base lg:leading-7">
                          {item.detail}
                        </p>

                        <div className="mt-5">
                          <a
                            href="/technology"
                            className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
                          >
                            Explore Technology
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next support system"
            className="absolute right-6 top-[29%] z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-xl text-white transition hover:bg-black/90 lg:right-8 lg:h-14 lg:w-14 lg:text-2xl"
          >
            →
          </button>
        </div>
      </div>

      <div className="h-8 lg:h-10" />
    </section>
  );
}
