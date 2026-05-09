import type {
  DeploymentType,
  HeroContent,
  MetricItem,
  SupportSystem,
} from "@/types/content";

export const homeHero: HeroContent = {
  eyebrow: "A pre-manufactured solar appliance.",
  title: "A Solar Power Revolution.",
  subtitle: `Solar Waves is redefining utility-scale solar deployment.
Not built piece by piece in the field — but manufactured as a complete solar power appliance: factory-built, pre-wired, transportable, and rapidly deployed.

The revolution is not the solar panel.
The revolution is the system behind it.

Green Energy Systems moves complexity out of the field and into advanced factory automation — delivering solar that is faster, stronger, smarter, and cheaper to deploy.`,
  primaryCta: {
    label: "Explore Solar Waves",
    href: "#appliance",
  },
  secondaryCta: {
    label: "Contact",
    href: "/contact",
  },
  image: "/images/hero/hero-canal.webp",
};

export const applianceMetrics: MetricItem[] = [
  { value: "50 KW", label: "Per appliance unit" },
  { value: "2 Units", label: "per 6 m container" },
  { value: "CAT 5", label: "Wind rating" },
];

export const featuredDeploymentTypes: DeploymentType[] = [
  {
    slug: "ground-mount",
    title: "On Ground",
    subtitle:
      "Reduced field assembly on ground with a faster, more repeatable pathway for utility-scale solar rollout.",
    keywords: [
      "Ground Support System",
      "Utility-Scale Rollout",
      "Reduced Field Assembly",
    ],
    metrics: ["Ground Deployment"],
    heroImage: "/images/deployments/deployment-ground-mount-hero.webp",
    slides: [],
    featureCards: [],
  },
  {
    slug: "over-canals",
    title: "Over Water Canals",
    subtitle:
      "Use water areas created by irrigation canals for power generation. ",
    keywords: [
      "Rail Support System",
      "Cable-Suspended Deployment",
      "Fold-Back Access",
      "Water Evaporation Reduction",
    ],
    metrics: ["Canal Deployment"],
    heroImage: "/images/deployments/deployment-over-canals-hero.webp",
    slides: [],
    featureCards: [],
  },
  {
    slug: "floating-solar",
    title: "On Water",
    subtitle:
      "Use large water surfaces for solar power generation.s",
    keywords: [
      "Floating Support System",
      "Buoyant Deployment",
      "Water Surface Infrastructure",
    ],
    metrics: ["Floating Deployment"],
    heroImage: "/images/deployments/deployment-floating-solar-hero.webp",
    slides: [],
    featureCards: [],
  },
  {
    slug: "agrivoltaics",
    title: "Over Crops",
    subtitle:
      "Introduce solar above farming area while maintaining crop access, shade strategy, and help woth irrigation.",
    keywords: [
      "Elevated Agricultural Support System",
      "Rain Water Collection",
      "Shade and Clearance Control",
    ],
    metrics: ["Agricultural Deployment"],
    heroImage: "/images/deployments/deployment-agrivoltaics-hero.webp",
    slides: [],
    featureCards: [],
  },
  {
    slug: "car-parks",
    title: "Over Car Parks",
    subtitle:
      "Add solar power generation to existing car parks. Solar Waves forms a water tight roof and offers weather protection.",
    keywords: [
      "Canopy Support System",
      "Weather Protection",
      "Parking Infrastructure",
    ],
    metrics: ["Parking Deployment"],
    heroImage: "/images/deployments/deployment-car-parks-hero.webp",
    slides: [],
    featureCards: [],
  },
  {
    slug: "ev-charging-stations",
    title: "EV Charging Stations",
    subtitle:
      "Delivered as a kit, Solar Waves can be deployed remotely for eV charging. The support structure to form the canopies is a patented node based framework, delivered with the rest of the kit.",
    keywords: [
      "EV Charging Integration",
      "Canopy Support System",
      "Distributed Charging Infrastructure",
    ],
    metrics: ["Charging Deployment"],
    heroImage: "/images/deployments/deployment-ev-charging-hero.webp",
    slides: [],
    featureCards: [],
  },
  {
    slug: "mobile-power",
    title: "Mobile Power",
    subtitle:
      "Redeployable solar power for temporary, remote, industrial, and containerized power applications.",
    keywords: [
      "Mobile Support System",
      "Containerized Transport",
      "Redeployable Power",
    ],
    metrics: ["Mobile Deployment"],
    heroImage: "/images/deployments/deployment-mobile-power-hero.webp",
    slides: [],
    featureCards: [],
  },
];

export const supportSystems: SupportSystem[] = [
  {
    name: "Ground Support System",
    detail:
      "For fast utility-scale deployment. No concrete. The footing can be reused for redeployment.",
    image: "/images/support-systems/support-grounded-main.webp",
  },
  {
    name: "Rail Support System",
    detail:
      "For deployments over water irrigation canals. Maintenance is possible by folding back the arrays.",
    image: "/images/support-systems/support-rail-main.webp",
  },
  {
    name: "Suspended Cable Support System",
    detail:
      "For deployments in the air, over wide water canal spans.",
    image: "/images/support-systems/support-suspended-main.webp",
  },
  {
    name: "Floating Support System",
    detail:
      "For deployment on water, using buoyant infrastructure interfaces.",
    image: "/images/support-systems/support-floating-main.webp",
  },
  {
    name: "Elevated Agricultural Support System",
    detail:
      "For agricultural deployments, where access and shade strategy matter.",
    image: "/images/support-systems/support-elevated-main.webp",
  },

  {
    name: "Canopy Support System",
    detail:
      "A patented framework to enable deployment kits for remote EV charging stations.",
    image: "/images/support-systems/support-canopy-main.webp",
  },
];

export const technologyPreview = {
  eyebrow: "Technology",
  title: "In-Factory Pre-Assembled Solar Deployment System",
  description:
    "Solar Waves transforms utility-scale solar from a labour-intensive site-built process into a fully pre-manufactured deployment system. Each Solar Wave is assembled, pre-wired, tested, and quality-controlled in the factory before transport to the site. The result is a repeatable solar power appliance designed for rapid deployment, reduced site labour, faster installation, and consistent performance.",
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
  { value: "50 KW", label: "Unit output" },
  { value: "2 Units", label: "per shipping container" },
  { value: "Category 5", label: "Wind rating" },
];

export const technicalPreview = {
  eyebrow: "Technical Data",
  title: "Solar Waves Technical Data.",
  description:
    "Review the unit output, transport format, operating logic, and deployment characteristics.",
  image: "/images/technical-data/technical-spec-render-main.webp",
};
