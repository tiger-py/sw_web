import { notFound } from "next/navigation";
import { DeploymentChapter } from "@/components/deployment/DeploymentChapter";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { deploymentTypes } from "@/content/deploymentTypes";
import { buildMetadata } from "@/lib/seo";

type DeploymentTypePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return deploymentTypes.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: DeploymentTypePageProps) {
  const { slug } = await params;
  const item = deploymentTypes.find((deployment) => deployment.slug === slug);

  if (!item) {
    return buildMetadata(
      "Deployment Type",
      "Solar Waves deployment type."
    );
  }

  return buildMetadata(
    item.title,
    item.subtitle
  );
}

export default async function DeploymentTypePage({
  params,
}: DeploymentTypePageProps) {
  const { slug } = await params;
  const item = deploymentTypes.find((deployment) => deployment.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-sw-text">
      <DeploymentChapter item={item} />
      <FinalCTASection />
    </main>
  );
}
