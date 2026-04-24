import { DeploymentChapter } from "@/components/deployment/DeploymentChapter";
import { deploymentTypes } from "@/content/deploymentTypes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(
  "Deployment Types",
  "The same Solar Waves appliance configured for multiple deployment environments."
);

export default function DeploymentTypesPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-sw-text">
      {deploymentTypes.map((item, index) => (
        <DeploymentChapter
          key={item.slug}
          item={item}
          isFirst={index === 0}
        />
      ))}
    </main>
  );
}