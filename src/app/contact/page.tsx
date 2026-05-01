import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = buildMetadata(
  "Contact",
  "Contact Solar Waves to discuss deployment pathways, pilot projects, technical information, and support-system fit.",
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-sw-text">
      <section className="mx-auto max-w-shell px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
              Contact
            </div>
            <h1 className="mt-4 max-w-4xl text-5xl font-medium tracking-tight lg:text-6xl">
              Discuss a Solar Waves deployment.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-sw-muted">
              Solar Waves is built for infrastructure owners, project
              developers, utilities, landholders, water authorities, industrial
              operators, and partners looking for a faster, more repeatable way
              to deploy solar power.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-sw-muted">
              Contact the team to discuss site conditions, pilot projects,
              brochures, technical information, support-system fit, and
              deployment pathways.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:glen@nbsystemsgroup.com"
                className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90"
              >
                glen@nbsystemsgroup.com
              </a>
              <a
                href="tel:+61400799865"
                className="inline-flex rounded-full border border-black/12 bg-black/[0.04] px-6 py-3 text-sm font-medium text-black transition hover:bg-black/[0.08]"
              >
                Call the Team
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
