import type { HeroContent } from "@/types/content";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${content.image}')` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 to-transparent"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-x-0 top-[34%] z-10 hidden -translate-y-1/2 md:block">
        <div className="mx-auto flex w-full max-w-shell justify-end px-6 lg:px-10">
          <img
            src="/icons/solar-waves-logo.png"
            alt="Solar Waves"
            className="h-auto w-[min(74vw,980px)] select-none opacity-95 drop-shadow-[0_14px_38px_rgba(0,0,0,0.45)] lg:w-[min(78vw,1120px)] 2xl:w-[min(80vw,1240px)]"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-shell flex-col px-6 pb-16 pt-[46vh] lg:px-10 lg:pb-24">
        <div className="max-w-5xl">
          <div className="mb-5 text-sm font-medium uppercase tracking-eyebrow text-white">
            {content.eyebrow}
          </div>

          <h1 className="max-w-5xl text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>

          <p className="mt-6 max-w-4xl text-2xl leading-9 text-white">
            {content.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={content.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-medium text-black shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition hover:bg-white/88"
            >
              {content.primaryCta.label}
            </a>

            <a
              href={content.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 px-7 py-4 text-base font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md transition hover:border-white/70 hover:bg-white/18"
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
