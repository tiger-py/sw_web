import { ButtonLink } from "@/components/ui/ButtonLink";
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

      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent"
        aria-hidden="true"
      />

      <img
        src="/icons/solar-waves-logo.png"
        alt="Solar Waves"
        className="pointer-events-none absolute left-1/2 top-[36%] z-10 hidden h-auto w-[min(62vw,1120px)] -translate-x-1/2 -translate-y-1/2 select-none opacity-95 md:block lg:w-[min(72vw,1320px)] 2xl:w-[min(76vw,1480px)]"
      />

      <div className="relative z-20 mx-auto flex w-full max-w-shell flex-col px-6 pb-16 pt-[46vh] lg:px-10 lg:pb-24">
        <div className="max-w-5xl">
          <div className="mb-5 text-sm font-medium uppercase tracking-eyebrow text-white">
            {content.eyebrow}
          </div>

          <h1 className="max-w-5xl text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-white">
            {content.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={content.primaryCta.href}>
              {content.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
