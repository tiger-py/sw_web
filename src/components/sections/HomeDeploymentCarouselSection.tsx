"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { DeploymentType } from "@/types/content";

type HomeDeploymentCarouselSectionProps = {
  items: DeploymentType[];
};

const slideWidth = "clamp(320px, 58vw, 1040px)";
const halfSlideWidth = "clamp(160px, 29vw, 520px)";

export function HomeDeploymentCarouselSection({
  items,
}: HomeDeploymentCarouselSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const extendedItems = useMemo(() => {
    if (items.length === 0) return [];
    const last = items[items.length - 1];
    const first = items[0];
    return [last, ...items, first];
  }, [items]);

  function goPrevious() {
    setActiveIndex((current) =>
      current === 0 ? items.length - 1 : current - 1
    );
  }

  function goNext() {
    setActiveIndex((current) =>
      current === items.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-5xl">
          <Eyebrow>Deployment Types</Eyebrow>

          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-center">
            <img
              src="/icons/logo.png"
              alt="Solar Waves"
              className="h-auto w-[72px] shrink-0 opacity-95 md:w-[88px] lg:w-[104px]"
            />

            <h2 className="text-5xl font-medium tracking-tight text-sw-text lg:text-6xl">
              One solar appliance for many environments.
            </h2>
          </div>

          <p className="mt-6 max-w-4xl text-xl leading-9 text-sw-muted">
            Solar Waves uses the same integrated system across land, water canals, reservoirs, agrivoltaics, car parks, EV charging stations, and temporary sites — unlocking niche deployment environments not suited to traditional solar systems.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div className="relative flex w-screen items-center justify-center px-0">
          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous deployment type"
            className="absolute left-6 top-[29%] z-20 inline-flex -translate-y-1/2 items-center justify-center bg-transparent text-7xl font-light leading-none text-black transition hover:scale-110 sm:text-8xl lg:left-8 lg:text-9xl"
          >
            <span aria-hidden="true">&lt;</span>
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
                    key={`${item.slug}-${index}`}
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
                        style={{ backgroundImage: `url('${item.heroImage}')` }}
                      />
                    </div>

                    {isActive ? (
                      <div className="flex flex-col items-center rounded-b-4xl bg-black px-4 py-3 text-center text-white sm:px-5 sm:py-4 lg:px-6 lg:py-5">
                        <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/66">
                          {item.metrics[0]}
                        </div>

                        <h3 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
                          {item.title}
                        </h3>

                        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-white/80 lg:text-lg lg:leading-8">
                          {item.subtitle}
                        </p>

                        <div className="mt-5">
                          <Link
                            href="/deployment-types"
                            className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
                          >
                            View Deployment Types
                          </Link>
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
            aria-label="Next deployment type"
            className="absolute right-6 top-[29%] z-20 inline-flex -translate-y-1/2 items-center justify-center bg-transparent text-7xl font-light leading-none text-black transition hover:scale-110 sm:text-8xl lg:right-8 lg:text-9xl"
          >
            <span aria-hidden="true">&gt;</span>
          </button>
        </div>
      </div>

      <div className="h-24 lg:h-32" />
    </section>
  );
}
