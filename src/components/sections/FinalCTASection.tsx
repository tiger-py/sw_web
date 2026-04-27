import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FinalCTASection() {
  return (
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-24">
        <div className="rounded-4xl border border-black/10 bg-sw-panel p-8 shadow-soft lg:p-12">
          <SectionHeading
            eyebrow="Next Step"
            title="Talk to us about Solar Waves."
            description="Discuss pilot projects, site fit, deployment requirements, and support-system fit with the Solar Waves team."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Discuss a Deployment</ButtonLink>
            <ButtonLink href="/deployment-types" variant="secondary">
              View Deployment Types
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
