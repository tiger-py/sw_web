import { ButtonLink } from "@/components/ui/ButtonLink";
import type { HeroContent } from "@/types/content";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${content.image}')` }}
      />

      <div className="relative mx-auto flex w-full max-w-shell flex-col px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        <div className="max-w-3xl">
          <div className="mb-5 text-sm font-medium uppercase tracking-eyebrow text-white">
            {content.eyebrow}
          </div>

          <h1 className="max-w-4xl text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-white">
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