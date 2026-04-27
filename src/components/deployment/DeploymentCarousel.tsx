"use client";

import { useState } from "react";
import type { DeploymentSlide } from "@/types/content";

type DeploymentCarouselProps = {
  slides: DeploymentSlide[];
};

function getKindLabel(kind: DeploymentSlide["kind"]) {
  switch (kind) {
    case "hero":
      return "Deployment model";
    case "deployed":
      return "In the field";
    case "maintenance":
      return "Access + maintenance";
    case "support":
      return "Support interface";
    case "detail":
      return "System detail";
    default:
      return "";
  }
}

export function DeploymentCarousel({ slides }: DeploymentCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasSlides = slides.length > 0;
  const activeSlide = hasSlides ? slides[activeIndex] : null;

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

  if (!hasSlides || !activeSlide) {
    return null;
  }

  return (
    <div className="rounded-4xl border border-black/10 bg-white shadow-soft">
      <div className="relative overflow-hidden rounded-t-4xl">
        <div
          className="h-[23rem] bg-cover bg-center sm:h-[28rem] lg:h-[34rem]"
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