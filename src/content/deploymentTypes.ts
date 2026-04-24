import type { DeploymentType } from "@/types/content";

export const deploymentTypes: DeploymentType[] = [
  {
    slug: "over-canals",
    eyebrow: "Deployment Type 01",
    title: "Over Canals",
    subtitle:
      "Utility-scale solar for irrigation canal networks using adjustable support systems.",
    keywords: ["Rail deployment", "Cable-Suspended Deployment", "Fold-back access"],
    metrics: ["Narrow canals", "Wide canals", "Access maintained", "On rails or cable-suspended"],
    heroImage: "/images/deployments/deployment-over-canals-hero.webp",
    slides: [
      {
        image: "/images/deployments/deployment-over-canals-deployed.webp",
        kind: "deployed",
        label: "Deployed array view",
      },
      {
        image: "/images/deployments/deployment-over-canals-maintenance.webp",
        kind: "maintenance",
        label: "Maintenance and access",
      },
      {
        image: "/images/support-systems/support-rail-main.webp",
        kind: "support",
        label: "Rail support system",
      },
      {
        image: "/images/support-systems/support-suspended-main.webp",
        kind: "detail",
        label: "Cable-Suspended Deployment",
      },
    ],
  },
  {
    slug: "floating-solar",
    eyebrow: "Deployment Type 02",
    title: "Floating Solar",
    subtitle:
      "A fold-out solar appliance adapted for over-water deployment and buoyant support systems.",
    keywords: ["Reservoirs", "Pontoons", "Over-water"],
    metrics: ["On water", "Modular buoyancy", "Rapid Deployment", "Utility scale"],
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
        label: "Floating support system",
      },
      {
        image: "/images/technology/technology-floating-detail.webp",
        kind: "detail",
        label: "Buoyancy and mooring detail",
      },
    ],
  },
  {
    slug: "agrivoltaics",
    eyebrow: "Deployment Type 03",
    title: "Agrivoltaics",
    subtitle:
      "Solar deployment integrated with productive land use through elevated support systems and greenhouse kits.",
    keywords: ["Greenhouses", "Crop access", "Shade strategy"],
    metrics: ["Agrivoltaics", "Vineyard", "Greenhouse", "Elevated supports"],
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
        label: "Elevated support system",
      },
      {
        image: "/images/technology/technology-agrivoltaics-detail.webp",
        kind: "detail",
        label: "Integrated water storage design",
      },
    ],
  },
  {
    slug: "car-parks",
    eyebrow: "Deployment Type 04",
    title: "Car Parks",
    subtitle:
      "Solar appliance deployment over parking infrastructure using canopy support systems.",
    keywords: ["Shade", "Weather cover", "Infrastructure fit"],
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
        label: "Underside access",
      },
      {
        image: "/images/support-systems/support-carport-main.webp",
        kind: "support",
        label: "Canopy support system",
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
    eyebrow: "Deployment Type 05",
    title: "EV Charging Stations",
    subtitle:
      "Power generation and charging infrastructure combined in one deployment surface.",
    keywords: ["Charging", "Integrated structural support system", "Rapid deployment"],
    metrics: ["EV charging", "Node-based structural support system", "Modular", "Rapid deployment"],
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
        label: "Node-based sructural support system",
      },
    ],
  },
  {
    slug: "ground-mount",
    eyebrow: "Deployment Type 06",
    title: "Ground-Mount",
    subtitle:
      "Fast utility-scale deployment where open land is available and speed matters.",
    keywords: ["Utility scale", "Fast rollout", "Low complexity"],
    metrics: ["Utility scale", "No concrete", "Fold-out deployment", "Appliance logic"],
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
        label: "Ground support system",
      },
      {
        image: "/images/technology/technology-ground-detail.webp",
        kind: "detail",
        label: "Drone view",
      },
    ],
  },
  {
    slug: "mobile-power",
    eyebrow: "Deployment Type 07",
    title: "Mobile Power",
    subtitle:
      "Rapid, redeployable solar for temporary, remote and containerized power applications.",
    keywords: ["Containerized", "Redeployable", "Temporary power"],
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
];