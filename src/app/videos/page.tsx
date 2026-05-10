import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { videoIntro, videos, videosHero } from "@/content/videos";

export const metadata = {
  title: "Videos | Solar Waves",
  description:
    "Watch Solar Waves videos introducing the appliance model, deployment logic, and productized solar infrastructure system.",
};

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-white text-sw-text">
      <section className="relative min-h-[72vh] overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('${videosHero.backgroundImage}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[72vh] max-w-shell items-end px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-5xl">
            <Eyebrow tone="light" className="mb-5">
              {videosHero.eyebrow}
            </Eyebrow>

            <h1 className="max-w-5xl text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
              {videosHero.title}
            </h1>

            <p className="mt-6 max-w-4xl text-2xl leading-9 text-white/86">
              {videosHero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="#videos">Watch Videos</ButtonLink>
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-base font-medium text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Contact the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-shell">
          <SectionHeading
            eyebrow={videoIntro.eyebrow}
            title={videoIntro.title}
            description={videoIntro.description}
          />
        </div>
      </section>

      <section id="videos" className="bg-sw-panel px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-shell gap-10 lg:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.youtubeId}
              className="overflow-hidden rounded-4xl border border-black/10 bg-black shadow-soft"
            >
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="flex flex-col items-center px-6 py-8 text-center text-white lg:px-8 lg:py-10">
                <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                  {video.title}
                </h2>

                <p className="mt-5 max-w-2xl text-xl leading-8 text-white/75">
                  {video.description}
                </p>

                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-black transition hover:bg-white/88"
                >
                  Watch on YouTube
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCTASection />
    </main>
  );
}
