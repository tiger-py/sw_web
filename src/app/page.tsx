import { ApplianceRevealSection } from "@/components/sections/ApplianceRevealSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeDeploymentCarouselSection } from "@/components/sections/HomeDeploymentCarouselSection";
import { SupportSystemsCarouselSection } from "@/components/sections/SupportSystemsCarouselSection";
import { TechnicalPreviewSection } from "@/components/sections/TechnicalPreviewSection";
import { TechnologyPreviewSection } from "@/components/sections/TechnologyPreviewSection";
import {
  applianceMetrics,
  featuredDeploymentTypes,
  homeHero,
  supportSystems,
  technicalPreview,
  technicalPreviewMetrics,
  technologyPreview,
} from "@/content/home";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Solar Waves",
  "A cinematic product experience for Solar Waves."
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-sw-text">
      <HeroSection content={homeHero} />
      <ApplianceRevealSection metrics={applianceMetrics} />
      <HomeDeploymentCarouselSection items={featuredDeploymentTypes} />
      <TechnologyPreviewSection
        eyebrow={technologyPreview.eyebrow}
        title={technologyPreview.title}
        description={technologyPreview.description}
        image={technologyPreview.image}
        chapters={technologyPreview.chapters}
      />
      <SupportSystemsCarouselSection items={supportSystems} />
      <TechnicalPreviewSection
        eyebrow={technicalPreview.eyebrow}
        title={technicalPreview.title}
        description={technicalPreview.description}
        image={technicalPreview.image}
        metrics={technicalPreviewMetrics}
      />
      <FinalCTASection />
    </main>
  );
}