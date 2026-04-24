import type { MetricItem, TechnologyChapter, TechnologyTag } from "@/types/content";

export const technologyIntro = {
  eyebrow: "Technology",
  title: "From factory to field",
  description:
    "A factory-built solar appliance designed for transport, rapid deployment, adjustable supports, and low-maintenance operation.",
};

export const technologyHeroMetrics: MetricItem[] = [
  { value: "50kW", label: "Per unit" },
  { value: "2", label: "Units / 6 m container" },
  { value: "CAT 5", label: "Wind Rating" },
];

export const technologyTags: TechnologyTag[] = [
  { label: "Factory-built" },
  { label: "Pre-wired" },
  { label: "Plug-and-play" },
  { label: "Adjustable supports" },
  { label: "Tool-free" },
  { label: "Self-cleaning" },
  { label: "Zero moving parts" },
  { label: "Low-maintenance" },
];

export const technologyChapters: TechnologyChapter[] = [
  {
    slug: "solar-appliance",
    eyebrow: "Chapter 01",
    title: "Solar as appliance",
    subtitle:
      "Each unit is engineered, pre-built, pre-wired and delivered as an integrated deployment object rather than a labour-heavy site-built assembly.",
    keywords: ["Factory-built", "Pre-wired", "Plug-and-play"],
    metrics: ["50kW unit", "2 units / 6 m container", "Ready to deploy", "Less site assembly"],
    heroImage: "/images/technology/technology-appliance-hero.webp",
    slides: [
      {
        image: "/images/technology/technology-appliance-deployed.webp",
        kind: "deployment",
        label: "Integrated appliance design",
      },
      {
        image: "/images/technology/technology-appliance-packed.webp",
        kind: "transport",
        label: "Packed for container transport",
      },
      {
        image: "/images/technology/technology-appliance-wiring-detail.webp",
        kind: "detail",
        label: "Pre-wired electrical preparation",
      },
      {
        image: "/images/technology/technology-plug-and-play-detail.webp",
        kind: "detail",
        label: "Plug-and-play interface",
      },
    ],
  },
  {
    slug: "factory-automation",
    eyebrow: "Chapter 02",
    title: "Designed for factory automation",
    subtitle:
      "Solar Waves is structured for repeatable manufacturing, robotic handling, tighter quality control, and scalable production.",
    keywords: ["Automation", "Scalable Production", "Quality control"],
    metrics: ["Scalable production", "Consistent quality", "Lower manufacturing cost potential", "Factory integration"],
    heroImage: "/images/technology/technology-factory-hero.webp",
    slides: [
      {
        image: "/images/technology/technology-factory-automation.webp",
        kind: "factory",
        label: "Factory automation",
      },
      {
        image: "/images/technology/technology-factory-handling.webp",
        kind: "factory",
        label: "Robotic or assisted handling",
      },
      {
        image: "/images/technology/technology-factory-qc.webp",
        kind: "factory",
        label: "Quality-control process",
      },
      {
        image: "/images/technology/technology-factory-shipping.webp",
        kind: "transport",
        label: "Containerised logistics",
      },
    ],
  },
  {
    slug: "rapid-deployment",
    eyebrow: "Chapter 03",
    title: "Built for rapid deployment",
    subtitle:
      "Solar Waves arrives pre-built and pre-wired, reducing site labour and shortening installation time compared with conventional solar systems.",
    keywords: ["Containerised", "Rapid deployment", "Fast Commissioning"],
    metrics: ["Container delivery", "Unload and position", "Connect interface", "Commission quickly"],
    heroImage: "/images/technology/technology-deployment-hero.webp",
    slides: [
      {
        image: "/images/technology/technology-transport-container.webp",
        kind: "transport",
        label: "Containerised transport",
      },
      {
        image: "/images/technology/technology-deployment-unload.webp",
        kind: "deployment",
        label: "Unload and position",
      },
      {
        image: "/images/technology/technology-deployment-connect.webp",
        kind: "deployment",
        label: "Deployment on water",
      },
      {
        image: "/images/technology/technology-deployment-live.webp",
        kind: "deployment",
        label: "Deployment on land",
      },
    ],
  },
  {
    slug: "adjustable-support-systems",
    eyebrow: "Chapter 04",
    title: "Adjustable support systems",
    subtitle:
      "The same Solar Waves appliance can be configured on different footing and support systems depending on span, structure, terrain, and water conditions.",
    keywords: ["On Ground", "On Rails", "Cable-Suspended"],
    metrics: ["Ground-mounted", "Elevated roof", "Rail systems", "Floating"],
    heroImage: "/images/technology/technology-support-hero.webp",
    slides: [
      {
        image: "/images/how-it-works/footing-ground-mounted.webp",
        kind: "support",
        label: "Ground-mounted foundations",
      },
      {
        image: "/images/how-it-works/footing-elevated-roof.webp",
        kind: "support",
        label: "Elevated roof structures",
      },
      {
        image: "/images/how-it-works/footing-canal-rail.webp",
        kind: "support",
        label: "Rail systems over canals",
      },
      {
        image: "/images/how-it-works/footing-suspended-cable.webp",
        kind: "support",
        label: "Suspended cable systems",
      },
      {
        image: "/images/how-it-works/footing-floating.webp",
        kind: "support",
        label: "Floating configurations",
      },
    ],
  },
  {
    slug: "structural-engineering",
    eyebrow: "Chapter 05",
    title: "Engineered for simpler assembly",
    subtitle:
      "The structural system is designed to simplify assembly while performing in demanding climates and infrastructure settings.",
    keywords: ["Tool-free", "Sliding extrusions", "Aerodynamic"],
    metrics: ["Fewer components", "Faster assembly", "Reduced wind loading", "Simpler service access"],
    heroImage: "/images/technology/technology-structure-hero.webp",
    slides: [
      {
        image: "/images/technology/sliding.gif",
        kind: "detail",
        label: "Tool-free structural system",
      },
      {
        image: "/images/technology/aerodynamic-frame.webp",
        kind: "detail",
        label: "Aerodynamic structural design",
      },
      {
        image: "/images/technology/technology-structure-joint.webp",
        kind: "detail",
        label: "Structural connection detail",
      },
      {
        image: "/images/technology/technology-service-access.webp",
        kind: "operation",
        label: "Simpler service access",
      },
    ],
  },
  {
    slug: "low-maintenance-operation",
    eyebrow: "Chapter 06",
    title: "Designed for low-maintenance operation",
    subtitle:
      "Solar Waves combines durable materials, integrated self-cleaning features, and simpler servicing to reduce maintenance complexity over time.",
    keywords: ["Self-cleaning", "Durable aluminum", "Long service life"],
    metrics: ["Rainwater-based cleaning", "Reduced maintenance demand", "Durable structures", "Low-maintenance operation"],
    heroImage: "/images/technology/technology-operation-hero.webp",
    slides: [
      {
        image: "/images/technology/self-cleaning.webp",
        kind: "operation",
        label: "Automated self-cleaning system",
      },
      {
        image: "/images/technology/sustainable-manufacturing.webp",
        kind: "detail",
        label: "Sustainable manufacturing",
      },
      {
        image: "/images/technology/technology-operation-service.webp",
        kind: "operation",
        label: "Low-maintenance servicing",
      },
      {
        image: "/images/technology/technology-operation-material.webp",
        kind: "detail",
        label: "Durable aluminum structures",
      },
    ],
  },
];

export const technologyNextStep = {
  eyebrow: "Next Step",
  title: "Review technical fit and deployment requirements",
  description:
    "Discuss manufacturing approach, structural conditions, support options, and deployment requirements with Solar Waves.",
  primaryCta: {
    label: "Contact Solar Waves",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Technical Data",
    href: "/technical-data",
  },
};