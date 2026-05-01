import { TechnologyChapter } from "@/components/technology/TechnologyChapter";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { technologyChapters } from "@/content/technology";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Technology",
  "Solar Waves technology turns solar infrastructure into a factory-built, pre-wired deployment appliance."
);

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-sw-text">
      {technologyChapters.map((item, index) => (
        <TechnologyChapter
          key={item.slug}
          item={item}
          isFirst={index === 0}
        />
      ))}

      <FinalCTASection />
    </main>
  );
}