import type {
  DeploymentType,
  HeroContent,
  MetricItem,
  SupportSystem,
} from "@/types/content";

export const homeHero: HeroContent = {
  eyebrow: "Utility-scale solar for new site types",
  title: "Solar power delivered as an appliance.",
  subtitle:
    "Solar Waves is a factory-built solar appliance designed for canals, agricultural land, parking, and remote sites where speed, access, and site fit matter.",
  primaryCta: {
    label: "Explore Solar Waves",
    href: "#appliance",
  },
  secondaryCta: {
    label: "Contact the Team",
    href: "/contact",
  },
  image: "/images/hero/hero-canal.webp",
};

export const applianceMetrics: MetricItem[] = [
  { value: "50kW", label: "Per unit" },
  { value: "2", label: "Units per 6 m container" },
  { value: "CAT 5", label: "Wind Rating" },
];

export const featuredDeploymentTypes: DeploymentType[] = [
  {
    slug: "over-canals",
    title: "Over Canals",
    subtitle: "Solar for irrigation canals and water corridors.",
    keywords: [
      "Rail Support System",
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
    subtitle: "Solar deployment on reservoirs and other water surfaces.",
    keywords: [
      "Floating Support System",
      "Pontoon Deployment",
      "Water Surface Installation",
    ],
    metrics: ["Floating Deployment"],
    heroImage: "/images/deployments/deployment-floating-solar-hero.webp",
    slides: [],
  },
  {
    slug: "agrivoltaics",
    title: "Agrivoltaics",
    subtitle: "Solar that works with productive agricultural land.",
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
    subtitle: "Solar structures for parking, shade, and site value.",
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
    subtitle: "Solar structures built for charging-oriented sites.",
    keywords: [
      "EV Charging Integration",
      "Canopy Support System",
      "Customer-Facing Infrastructure",
    ],
    metrics: ["Charging Deployment"],
    heroImage: "/images/deployments/deployment-ev-charging-hero.webp",
    slides: [],
  },
  {
    slug: "ground-mount",
    title: "Ground-Mount",
    subtitle: "Fast field deployment where open land is available.",
    keywords: [
      "Ground Support System",
      "Utility-Scale Rollout",
      "Reduced Site Work",
    ],
    metrics: ["Ground Deployment"],
    heroImage: "/images/deployments/deployment-ground-mount-hero.webp",
    slides: [],
  },
  {
    slug: "mobile-power",
    title: "Mobile Power",
    subtitle: "Foldable, transportable solar for remote and temporary sites.",
    keywords: [
      "Mobile Support System",
      "Containerised Transport",
      "Redeployable Power",
    ],
    metrics: ["Mobile Deployment"],
    heroImage: "/images/deployments/deployment-mobile-power-hero.webp",
    slides: [],
  },
];

export const supportSystems: SupportSystem[] = [
  {
    name: "Rail Support System",
    detail: "For canal-top rollout and guided access.",
    image: "/images/support-systems/support-rail-main.webp",
  },
  {
    name: "Suspended Cable Support System",
    detail: "For elevated span conditions across constrained corridors.",
    image: "/images/support-systems/support-suspended-main.webp",
  },
  {
    name: "Floating Support System",
    detail: "For reservoirs and other water-surface deployments.",
    image: "/images/support-systems/support-floating-main.webp",
  },
  {
    name: "Elevated Agricultural Support System",
    detail: "For agrivoltaics, vineyards, and productive land.",
    image: "/images/support-systems/support-elevated-main.webp",
  },
  {
    name: "Ground Support System",
    detail: "For fast utility-scale field deployment.",
    image: "/images/support-systems/support-grounded-main.webp",
  },
  {
    name: "Canopy Support System",
    detail: "For parking and EV charging structures.",
    image: "/images/support-systems/support-canopy-main.webp",
  },
];

export const technologyPreview = {
  eyebrow: "Technology",
  title: "From factory to field.",
  description:
    "Solar Waves is designed as a factory-built system that is easier to transport, faster to deploy, and simpler to repeat across different project types.",
  image: "/images/technology/technology-preview.gif",
  chapters: [
    "Factory-Built Production",
    "Containerised Transport",
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
  title: "Core specifications and deployment logic.",
  description:
    "Review the main technical points, transport format, support-system fit, and deployment characteristics of the Solar Waves platform.",
  image: "/images/technical-data/technical-spec-render-main.webp",
};