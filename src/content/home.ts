import type {
  DeploymentType,
  HeroContent,
  MetricItem,
  SupportSystem,
} from "@/types/content";

export const homeHero: HeroContent = {
  eyebrow: "A new industrial model for solar deployment",
  title: "Solar power infrastructure, manufactured as an appliance.",
  subtitle:
    "Solar Waves changes how solar is built. Instead of assembling infrastructure piece by piece in the field, each unit is manufactured as an integrated solar power appliance: factory-built, pre-wired, transportable, and designed for rapid deployment. The revolutionary shift is not the panel. It is the deployment model — moving complexity from the construction site into the factory.",
  primaryCta: {
    label: "Explore the Solar Appliance",
    href: "#appliance",
  },
  secondaryCta: {
    label: "Discuss a Deployment",
    href: "/contact",
  },
  image: "/images/hero/hero-canal.webp",
};

export const applianceMetrics: MetricItem[] = [
  { value: "50kW", label: "Per appliance unit" },
  { value: "2", label: "Units per 6 m container" },
  { value: "CAT 5", label: "Wind rating" },
];

export const featuredDeploymentTypes: DeploymentType[] = [
  {
    slug: "over-canals",
    title: "Over Canals",
    subtitle:
      "Turn irrigation canals and water corridors into productive solar infrastructure while maintaining access and waterway function.",
    keywords: [
      "Rail Support System",
      "Cable-Suspended Deployment",
      "Fold-Back Access",
      "Water Corridor Deployment",
    ],
    metrics: ["Canal Deployment"],
    heroImage: "/images/deployments/deployment-over-canals-hero.webp",
    slides: [],
  },
  {
    slug: "floating-solar",
    title: "Floating Solar",
    subtitle:
      "Extend the Solar Waves appliance model onto reservoirs, ponds, and controlled water bodies using buoyant support logic.",
    keywords: [
      "Floating Support System",
      "Buoyant Deployment",
      "Water Surface Infrastructure",
    ],
    metrics: ["Floating Deployment"],
    heroImage: "/images/deployments/deployment-floating-solar-hero.webp",
    slides: [],
  },
  {
    slug: "agrivoltaics",
    title: "Agrivoltaics",
    subtitle:
      "Introduce solar above productive land while maintaining crop access, shade strategy, and agricultural function.",
    keywords: [
      "Elevated Agricultural Support System",
      "Productive Land Use",
      "Shade and Clearance Control",
    ],
    metrics: ["Agricultural Deployment"],
    heroImage: "/images/deployments/deployment-agrivoltaics-hero.webp",
    slides: [],
  },
  {
    slug: "car-parks",
    title: "Car Parks",
    subtitle:
      "Convert parking areas into power-generating infrastructure with shade, weather protection, and future charging potential.",
    keywords: [
      "Canopy Support System",
      "Weather Protection",
      "Parking Infrastructure",
    ],
    metrics: ["Parking Deployment"],
    heroImage: "/images/deployments/deployment-car-parks-hero.webp",
    slides: [],
  },
  {
    slug: "ev-charging-stations",
    title: "EV Charging Stations",
    subtitle:
      "Combine solar generation, structural cover, and charging infrastructure in one repeatable deployment surface.",
    keywords: [
      "EV Charging Integration",
      "Canopy Support System",
      "Distributed Charging Infrastructure",
    ],
    metrics: ["Charging Deployment"],
    heroImage: "/images/deployments/deployment-ev-charging-hero.webp",
    slides: [],
  },
  {
    slug: "ground-mount",
    title: "Ground-Mount",
    subtitle:
      "Reduce field assembly on open land with a faster, more repeatable pathway for utility-scale solar rollout.",
    keywords: [
      "Ground Support System",
      "Utility-Scale Rollout",
      "Reduced Field Assembly",
    ],
    metrics: ["Ground Deployment"],
    heroImage: "/images/deployments/deployment-ground-mount-hero.webp",
    slides: [],
  },
  {
    slug: "mobile-power",
    title: "Mobile Power",
    subtitle:
      "Redeployable solar power infrastructure for temporary, remote, industrial, and containerized power applications.",
    keywords: [
      "Mobile Support System",
      "Containerized Transport",
      "Redeployable Power",
    ],
    metrics: ["Mobile Deployment"],
    heroImage: "/images/deployments/deployment-mobile-power-hero.webp",
    slides: [],
  },
];

export const supportSystems: SupportSystem[] = [
  {
    name: "Ground Support System",
    detail:
      "For fast utility-scale deployment where the appliance model reduces field assembly and improves repeatability.",
    image: "/images/support-systems/support-grounded-main.webp",
  },
  {
    name: "Rail Support System",
    detail:
      "For canal-top rollout, guided positioning, maintenance access, and repeatable deployment across linear infrastructure.",
    image: "/images/support-systems/support-rail-main.webp",
  },
  {
    name: "Suspended Cable Support System",
    detail:
      "For spanning constrained corridors where the appliance needs to remain repeatable while the support interface adapts.",
    image: "/images/support-systems/support-suspended-main.webp",
  },
  {
    name: "Floating Support System",
    detail:
      "For reservoirs, ponds, and controlled water surfaces using buoyant infrastructure interfaces.",
    image: "/images/support-systems/support-floating-main.webp",
  },
  {
    name: "Elevated Agricultural Support System",
    detail:
      "For agrivoltaics, vineyards, greenhouses, and productive land where access and shade strategy matter.",
    image: "/images/support-systems/support-elevated-main.webp",
  },

  {
    name: "Canopy Support System",
    detail:
      "For car parks, EV charging nodes, service areas, and built-environment power surfaces.",
    image: "/images/support-systems/support-canopy-main.webp",
  },
];

export const technologyPreview = {
  eyebrow: "Technology",
  title: "From solar construction to solar manufacturing.",
  description:
    "Solar Waves moves more of the solar system into controlled factory production. Assembly, wiring, structural integration, transport preparation, and quality control happen before the unit reaches site. The result is solar infrastructure that can be manufactured, transported, deployed, and repeated.",
  image: "/images/technology/technology-preview.gif",
  chapters: [
    "Factory-Built Production",
    "Containerized Transport",
    "Rapid Site Deployment",
    "Adjustable Support Systems",
    "Low-Maintenance Operation",
  ],
};

export const technicalPreviewMetrics: MetricItem[] = [
  { value: "50kW", label: "Unit output" },
  { value: "2", label: "Units per 6 m container" },
  { value: "CAT 5", label: "Wind rating" },
];

export const technicalPreview = {
  eyebrow: "Technical Data",
  title: "The technical foundation of the Solar Waves appliance.",
  description:
    "Review the unit output, transport format, support-system compatibility, operating logic, and deployment characteristics behind pre-manufactured solar power infrastructure.",
  image: "/images/technical-data/technical-spec-render-main.webp",
};
