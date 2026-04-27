import type { DeploymentType } from "@/types/content";

export const deploymentTypes: DeploymentType[] = [
  {
      slug: "ground-mount",
      eyebrow: "Deployment Type 01",
      title: "Ground-Mount",
      subtitle:
        "On open land, the appliance model changes the deployment equation. Solar Waves reduces field assembly and shifts more of the system into factory production, creating a faster and more repeatable pathway for utility-scale rollout.",
      keywords: ["Utility Scale", "Fast Rollout", "Reduced Field Assembly", "Appliance Logic"],
      metrics: ["Utility scale", "Reduced concrete dependency", "Fold-out deployment", "Appliance logic"],
      heroImage: "/images/deployments/deployment-ground-mount-hero.webp",
      slides: [
        {
          image: "/images/deployments/deployment-ground-mount-deployed.webp",
          kind: "deployed",
          label: "Deployed field view",
        },
        {
          image: "/images/deployments/deployment-ground-mount-maintenance.webp",
          kind: "maintenance",
          label: "Field access",
        },
        {
          image: "/images/support-systems/support-grounded-main.webp",
          kind: "support",
          label: "Ground support interface",
        },
        {
          image: "/images/technology/technology-ground-detail.webp",
          kind: "detail",
          label: "Drone view",
        },
      ],
    },
  {
      slug: "over-canals",
      eyebrow: "Deployment Type 02",
      title: "Over Canals",
      subtitle:
        "Solar Waves can turn irrigation canals and water corridors into productive solar infrastructure. Deployed above the canal using rail or cable-suspended systems, the appliance generates power while helping shade exposed water surfaces to reduce evaporation. Long, repetitive infrastructure corridors are ideal for repeatable appliance deployment.",
      keywords: ["Rail Deployment", "Cable-Suspended Deployment", "Fold-Back Access", "Water Corridor Infrastructure"],
      metrics: ["Narrow canals", "Wide canals", "Access maintained", "On rails or cable-suspended"],
      heroImage: "/images/deployments/deployment-over-canals-hero.webp",
      slides: [
        {
          image: "/images/deployments/deployment-over-canals-rails.webp",
          kind: "deployed",
          label: "Deployed canal array on rail and carriage system",
        },
        {
          image: "/images/deployments/deployment-over-canals-deployed.webp",
          kind: "deployed",
          label: "Deployed canal array, cable-suspended",
        },
        {
          image: "/images/deployments/deployment-over-canals-maintenance.webp",
          kind: "maintenance",
          label: "Maintenance and access",
        },
        {
          image: "/images/support-systems/support-rail-main.webp",
          kind: "support",
          label: "Rail support interface",
        },
        {
          image: "/images/support-systems/support-suspended-main.webp",
          kind: "detail",
          label: "Cable-suspended deployment",
        },
      ],
    },
  {
      slug: "agrivoltaics",
      eyebrow: "Deployment Type 03",
      title: "Agrivoltaics",
      subtitle:
        "Solar Waves can be elevated above productive land to combine power generation with agriculture, shade management, water savings, and continued site access. Crops, vineyards and greenhouse systems become a part of the deployment logic.",
      keywords: ["Greenhouses", "Crop Access", "Shade Strategy", "Elevated Supports"],
      metrics: ["Agrivoltaics", "Vineyards", "Greenhouse systems", "Elevated supports"],
      heroImage: "/images/deployments/deployment-agrivoltaics-hero.webp",
      slides: [
        {
          image: "/images/deployments/deployment-agrivoltaics-deployed.webp",
          kind: "deployed",
          label: "Deployed greenhouse kit",
        },
        {
          image: "/images/deployments/deployment-agrivoltaics-maintenance.webp",
          kind: "maintenance",
          label: "Shading and sunlight management",
        },
        {
          image: "/images/support-systems/support-elevated-main.webp",
          kind: "support",
          label: "Elevated agricultural support",
        },
        {
          image: "/images/technology/technology-agrivoltaics-detail.webp",
          kind: "detail",
          label: "Integrated water storage design",
        },
      ],
    },
  {
      slug: "floating-solar",
      eyebrow: "Deployment Type 04",
      title: "Floating Solar",
      subtitle:
        "Solar Waves extends the appliance model onto reservoirs and other industrial water surfaces. The core power appliance can be adapted to buoyant support systems without abandoning the repeatable deployment logic.",
      keywords: ["Reservoirs", "Buoyant Supports", "Over-Water Deployment", "Utility-Scale Potential"],
      metrics: ["On water", "Modular buoyancy", "Rapid deployment", "Utility scale"],
      heroImage: "/images/deployments/deployment-floating-solar-hero.webp",
      slides: [
        {
          image: "/images/deployments/deployment-floating-solar-deployed.webp",
          kind: "deployed",
          label: "Deployed floating field",
        },
        {
          image: "/images/deployments/deployment-floating-solar-maintenance.webp",
          kind: "maintenance",
          label: "Deployment on water",
        },
        {
          image: "/images/support-systems/support-floating-main.webp",
          kind: "support",
          label: "Floating support interface",
        },
        {
          image: "/images/technology/technology-floating-detail.webp",
          kind: "detail",
          label: "Buoyancy and mooring detail",
        },
      ],
    },
  {
      slug: "mobile-power",
      eyebrow: "Deployment Type 05",
      title: "Mobile Power",
      subtitle:
        "Remote, temporary, and industrial sites often need power faster than conventional solar projects can be developed. Solar Waves can support redeployable or semi-permanent solar infrastructure for moving energy demand.",
      keywords: ["Containerized", "Redeployable", "Temporary Power", "Remote Sites"],
      metrics: ["Remote sites", "Temporary power", "Containerized", "Redeployable"],
      heroImage: "/images/deployments/deployment-mobile-power-hero.webp",
      slides: [
        {
          image: "/images/deployments/deployment-mobile-power-deployed.webp",
          kind: "deployed",
          label: "Deployed temporary array",
        },
        {
          image: "/images/deployments/deployment-mobile-power-maintenance.webp",
          kind: "maintenance",
          label: "Integrated electrical equipment",
        },
        {
          image: "/images/support-systems/support-grounded-main.webp",
          kind: "support",
          label: "Reusable supports",
        },
        {
          image: "/images/technology/technology-mobile-detail.webp",
          kind: "detail",
          label: "Integrated electrical equipment",
        },
      ],
    },
  {
      slug: "car-parks",
      eyebrow: "Deployment Type 06",
      title: "Car Parks",
      subtitle:
        "Solar Waves can transform parking areas into power-generating infrastructure. Deployed on canopy support systems, the appliance provides solar generation, shade, weather protection, and a platform for EV charging.",
      keywords: ["Shade", "Weather Cover", "Canopy Supports", "Built Environment"],
      metrics: ["Carports", "Solar over car parks", "Canopy supports", "Built environment"],
      heroImage: "/images/deployments/deployment-car-parks-hero.webp",
      slides: [
        {
          image: "/images/deployments/deployment-car-parks-deployed.webp",
          kind: "deployed",
          label: "Deployed parking array",
        },
        {
          image: "/images/deployments/deployment-car-parks-maintenance.webp",
          kind: "maintenance",
          label: "Underside service access",
        },
        {
          image: "/images/support-systems/support-carport-main.webp",
          kind: "support",
          label: "Canopy support interface",
        },
        {
          image: "/images/technology/technology-car-park-detail.webp",
          kind: "detail",
          label: "Structural view",
        },
      ],
    },
  {
      slug: "ev-charging-stations",
      eyebrow: "Deployment Type 07",
      title: "EV Charging Stations",
      subtitle:
        "EV charging networks need repeatable deployment. Solar Waves can combine solar generation, structural cover, and charging infrastructure into one deployable appliance model.",
      keywords: ["Charging", "Solar Canopy", "Integrated Support", "Rapid Deployment"],
      metrics: ["EV charging", "Node-based support system", "Modular", "Rapid deployment"],
      heroImage: "/images/deployments/deployment-ev-charging-hero.webp",
      slides: [
        {
          image: "/images/deployments/deployment-ev-charging-deployed.webp",
          kind: "deployed",
          label: "Deployed charging canopy",
        },
        {
          image: "/images/deployments/deployment-ev-charging-maintenance.webp",
          kind: "maintenance",
          label: "Service access",
        },
        {
          image: "/images/support-systems/support-canopy-main.webp",
          kind: "support",
          label: "Charging canopy support",
        },
        {
          image: "/images/technology/technology-ev-detail.webp",
          kind: "detail",
          label: "Node-based structural support system",
        },
      ],
    },
];
