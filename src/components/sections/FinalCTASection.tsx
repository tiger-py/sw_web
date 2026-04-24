import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FinalCTASection() {
  return (
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-24">
        <div className="rounded-4xl border border-black/10 bg-sw-panel p-8 shadow-soft lg:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Discuss a deployment."
            description="For brochures, technical information, and deployment discussions, contact the Solar Waves team."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Contact the Team</ButtonLink>
            <ButtonLink href="/deployment-types" variant="secondary">
              View Deployment Types
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}