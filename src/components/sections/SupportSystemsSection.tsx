import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SupportSystem } from "@/types/content";

type SupportSystemsSectionProps = {
  items: SupportSystem[];
};

export function SupportSystemsSection({
  items,
}: SupportSystemsSectionProps) {
  return (
    <section className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-shell px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="Adjustable support systems"
          title="The same solar appliance, configured for different environments."
          description="Technical renderings should do the explanation. The PV body stays constant. The support logic changes."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-4xl border border-black/10 bg-sw-panel shadow-soft"
            >
              <div className="h-72 bg-gradient-to-br from-black/[0.03] to-transparent">
                <div
                  className="h-full w-full bg-cover bg-center opacity-95 transition duration-500 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>
              <div className="px-6 py-5">
                <div className="text-2xl font-medium tracking-tight text-sw-text">
                  {item.name}
                </div>
                <div className="mt-2 text-base text-black/56">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}