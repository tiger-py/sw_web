import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = buildMetadata(
  "Contact",
  "Contact Solar Waves to discuss deployment pathways, pilot projects, technical information, and support-system fit.",
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-sw-text">
      <section className="mx-auto max-w-shell px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm font-medium uppercase tracking-eyebrow text-sw-eyebrow">
              Contact
            </div>

            <h1 className="mt-4 max-w-5xl text-6xl font-medium tracking-tight lg:text-7xl">
              Talk to us.
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-sw-muted">
              Solar Waves is built for infrastructure owners, project
              developers, utilities, landholders, water authorities, industrial
              operators, and partners looking for a faster, more repeatable way
              to deploy solar power.
            </p>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-sw-muted">
              Contact the team to discuss site conditions, pilot projects,
              brochures, technical information, support-system fit, and
              deployment pathways.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:glen@nbsystemsgroup.com"
                className="inline-flex rounded-full bg-black px-7 py-4 text-base font-medium text-white transition hover:bg-black/90"
              >
                glen@nbsystemsgroup.com
              </a>
              <a
                href="tel:+61400799865"
                className="inline-flex rounded-full border border-black/12 bg-black/[0.04] px-7 py-4 text-base font-medium text-black transition hover:bg-black/[0.08]"
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
