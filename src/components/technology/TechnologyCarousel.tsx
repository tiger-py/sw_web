"use client";

import { useState } from "react";
import type { TechnologySlide } from "@/types/content";

type TechnologyCarouselProps = {
  slides: TechnologySlide[];
};

function getKindLabel(kind: TechnologySlide["kind"]) {
  switch (kind) {
    case "factory":
      return "Factory";
    case "transport":
      return "Transport";
    case "deployment":
      return "Deployment";
    case "support":
      return "Support";
    case "detail":
      return "Detail";
    case "operation":
      return "Operation";
    default:
      return "";
  }
}

export function TechnologyCarousel({ slides }: TechnologyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!slides.length) return null;

  const activeSlide = slides[activeIndex];
  const isGif = activeSlide.image.toLowerCase().endsWith(".gif");

  function goPrevious() {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  }

  function goNext() {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="rounded-4xl border border-black/10 bg-white shadow-soft">
      <div className="relative overflow-hidden rounded-t-4xl">
        <div
          className={[
            "h-[23rem] sm:h-[28rem] lg:h-[34rem]",
            isGif
              ? "bg-contain bg-no-repeat bg-center bg-white"
              : "bg-cover bg-center",
          ].join(" ")}
          style={{ backgroundImage: `url('${activeSlide.image}')` }}
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-6 pb-6 pt-12">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
            {getKindLabel(activeSlide.kind)}
          </div>
          {activeSlide.label ? (
            <div className="mt-2 text-2xl font-medium tracking-tight text-white">
              {activeSlide.label}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={goPrevious}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-xl text-black transition hover:bg-black/[0.04]"
        >
          ←
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-xl text-black transition hover:bg-black/[0.04]"
        >
          →
        </button>
      </div>

      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <div className="text-sm text-black/55">
          {activeIndex + 1} / {slides.length}
        </div>

        <div className="flex flex-1 items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={`${slide.kind}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex
                  ? "w-10 bg-black"
                  : "w-2.5 bg-black/20 hover:bg-black/35"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}