import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  projectMetrics,
  projects,
  projectsHero,
  projectsIntro,
} from "@/content/projects";

export const metadata = {
  title: "Projects | Solar Waves",
  description:
    "Solar Waves project contexts including Turlock Irrigation District and Billabong, Western Australia.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-sw-text">
      <section className="relative min-h-[72vh] overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('${projectsHero.backgroundImage}')` }}
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
              {projectsHero.eyebrow}
            </Eyebrow>

            <h1 className="max-w-5xl text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl">
              {projectsHero.title}
            </h1>

            <p className="mt-6 max-w-4xl text-2xl leading-9 text-white/86">
              {projectsHero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="#project-contexts">View Projects</ButtonLink>
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-base font-medium text-white transition hover:border-white/60 hover:bg-white/10"
              >
                Discuss a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-shell">
          <SectionHeading
            eyebrow={projectsIntro.eyebrow}
            title={projectsIntro.title}
            description={projectsIntro.description}
          />
        </div>
      </section>

      <section id="project-contexts" className="bg-sw-panel px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-shell gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="overflow-hidden rounded-4xl border border-black/10 bg-white shadow-soft"
            >
              <div
                className="h-[24rem] bg-cover bg-center lg:h-[32rem]"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              <div className="p-7 lg:p-9">
                <Eyebrow className="text-sw-green">{project.eyebrow}</Eyebrow>

                <h2 className="mt-4 text-4xl font-medium tracking-tight text-black lg:text-5xl">
                  {project.title}
                </h2>

                <p className="mt-6 text-2xl leading-9 text-black/68">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/15 px-4 py-2 text-base font-medium uppercase tracking-[0.16em] text-black/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto flex max-w-shell flex-col gap-24">
          {projects.map((project, index) => (
            <article
              key={`${project.slug}-detail`}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div
                className={`overflow-hidden rounded-4xl border border-black/10 bg-sw-panel shadow-soft ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div
                  className="h-[28rem] bg-cover bg-center lg:h-[40rem]"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Eyebrow className="text-sw-green">{project.eyebrow}</Eyebrow>

                <h2 className="mt-4 text-5xl font-medium tracking-tight text-black lg:text-6xl">
                  {project.title}
                </h2>

                <p className="mt-6 text-2xl leading-9 text-black/70">
                  {project.description}
                </p>

                <div className="mt-8 grid gap-4">
                  {project.sections.map((section) => (
                    <div
                      key={section.title}
                      className="rounded-[1.5rem] border border-black/10 bg-sw-panel p-6"
                    >
                      <h3 className="text-2xl font-medium tracking-tight text-black">
                        {section.title}
                      </h3>

                      <p className="mt-4 text-xl leading-8 text-black/66">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink href="/simulation">Power & Water Calculation</ButtonLink>
                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-black/15 px-6 py-3 text-base font-medium text-black transition hover:border-black/30 hover:bg-black/[0.03]"
                  >
                    Contact the Team
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-black px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-shell">
          <div className="mb-12 max-w-4xl">
            <Eyebrow tone="light">Project Logic</Eyebrow>

            <h2 className="mt-4 text-5xl font-medium tracking-tight text-white lg:text-6xl">
              Built as a repeatable solar deployment system.
            </h2>

            <p className="mt-6 max-w-3xl text-2xl leading-9 text-white/72">
              Each project context uses the same core principle: move complexity out of the field and into the factory, then adapt the support system to the deployment environment.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectMetrics.map((metric) => (
              <MetricCard key={metric.label} item={metric} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </main>
  );
}
