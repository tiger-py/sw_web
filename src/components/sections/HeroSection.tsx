import type { HeroContent } from "@/types/content";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${content.image}')` }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 bg-black/20"
        aria-hidden="true"
      />

      <div className="pointer-events-none relative z-10 mx-auto flex w-full max-w-shell justify-end px-6 lg:px-10">
        <img
          src="/icons/solar-waves-logo.png"
          alt="Solar Waves"
          className="h-auto w-[min(82vw,1120px)] select-none opacity-95 drop-shadow-[0_14px_38px_rgba(0,0,0,0.45)] 2xl:w-[min(84vw,1320px)]"
        />
      </div>
    </section>
  );
}