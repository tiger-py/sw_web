import type { MetricItem, TechnologyChapter, TechnologyTag } from "@/types/content";

export const technologyIntro = {
  eyebrow: "Technology",
  title: "The breakthroughs behind the Solar Waves appliance model.",
  description:
    "Solar Waves is built around a practical but revolutionary shift: manufacture more of the solar system before it reaches the site. The appliance integrates structure, power surface, wiring logic, transport format, and deployment sequence into one repeatable industrial product.",
};

export const technologyHeroMetrics: MetricItem[] = [
  { value: "50kW", label: "Per appliance unit" },
  { value: "2", label: "Units / 6 m container" },
  { value: "CAT 5", label: "Wind rating" },
];

export const technologyTags: TechnologyTag[] = [
  { label: "Factory-built" },
  { label: "Pre-wired" },
  { label: "Infrastructure appliance" },
  { label: "Adjustable supports" },
  { label: "Reduced field assembly" },
  { label: "Containerized transport" },
  { label: "Repeatable deployment" },
  { label: "Low-maintenance" },
];

export const technologyChapters: TechnologyChapter[] = [
  {
    slug: "solar-appliance",
    eyebrow: "Breakthrough 01",
    title: "Solar power as an appliance",
    subtitle:
      "Solar Waves turns the solar array into a deployable industrial product. Instead of treating panels, rails, clamps, wiring, and supports as separate field-installed components, Solar Waves integrates the core power system into a factory-built appliance. Conventional solar standardizes parts; Solar Waves standardizes the deployable power unit.",
    keywords: ["Factory-built", "Pre-wired", "Integrated power unit"],
    metrics: ["50kW unit", "2 units / 6 m container", "Ready to deploy", "Reduced site assembly"],
    heroImage: "/images/technology/technology-appliance-hero.webp",
    featureCards: [
      {
        title: "Factory-built",
        description:
          "The core solar system is assembled as a repeatable product before it reaches the site, reducing the amount of work required in the field.",
        image: "/images/technology/technology-appliance-deployed.webp",
      },
      {
        title: "Pre-wired",
        description:
          "Electrical preparation is moved into the factory, so deployment can focus on positioning, connection, and commissioning rather than rebuilding the system on site.",
        image: "/images/technology/technology-appliance-wiring-detail.webp",
      },
      {
        title: "Integrated power unit",
        description:
          "Structure, solar surface, cable paths, and deployment are treated as one industrial unit.",
        image: "/images/technology/technology-appliance-packed.webp",
      },
      {
        title: "Container logistics",
        description:
          "The appliance is designed around transportable dimensions in standard shipping containers, supporting larger rollouts with less site improvisation.",
        image: "/images/technology/technology-plug-and-play-detail.webp",
      },
    ],
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
        label: "Deployment interface",
      },
    ],
  },
  {
    slug: "factory-automation",
    eyebrow: "Breakthrough 02",
    title: "Designed for factory automation",
    subtitle:
      "Solar Waves is designed not only to deploy faster, but to be manufactured differently. Its structural logic, integrated cable paths, and simplified assembly sequence support scalable factory production and future robotic handling. Quality control, wiring, assembly, and structural integration move into a controlled production environment instead of being repeated under changing site conditions.",
    keywords: ["Automation", "Scalable Production", "Quality Control"],
    metrics: ["Scalable production", "Consistent quality", "Lower manufacturing-cost potential", "Factory integration"],
    heroImage: "/images/technology/technology-factory-hero.webp",
    featureCards: [
      {
        title: "Automation",
        description:
          "Aluminium extrusions and simplified assembly logic create a better basis for assisted handling, production-line methods, and future robotic manufacturing.",
        image: "/images/technology/technology-factory-automation.webp",
      },
      {
        title: "Scalable production",
        description:
          "The system is designed as a manufacturable unit, allowing production process, handling, and inspection to scale around a consistent assembly line.",
        image: "/images/technology/technology-factory-handling.webp",
      },
      {
        title: "Quality control",
        description:
          "More work happens in a controlled factory environment, where assembly, wiring, and structural checks can be repeated and verified before delivery.",
        image: "/images/technology/technology-factory-qc.webp",
      },
      {
        title: "Factory-to-site logistics",
        description:
          "Completed units can move through a simpler logistics chain, reducing the amount of material sorting, unpacking, and assembly required on site.",
        image: "/images/technology/technology-factory-shipping.webp",
      },
    ],
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
        label: "Containerized logistics",
      },
    ],
  },
  {
    slug: "rapid-deployment",
    eyebrow: "Breakthrough 03",
    title: "Rapid deployment is the result of pre-assembled",
    subtitle:
      "Solar Waves arrives on site as a completed deployment object, not as a loose collection of parts. Field work can focus on positioning, support connection, electrical interface, and commissioning. The goal is not to remove infrastructure work entirely; it is to remove unnecessary field assembly from the solar system itself.",
    keywords: ["Containerized", "Rapid Deployment", "Fast Commissioning"],
    metrics: ["Container delivery", "Unload and position", "Connect interface", "Commission quickly"],
    heroImage: "/images/technology/technology-deployment-hero.webp",
    featureCards: [
      {
        title: "Containerized Delivery",
        description:
          "Transport logic is built into the product, allowing completed units to arrive as appliances rather than a dispersed set of components.",
        image: "/images/technology/technology-transport-container.webp",
      },
      {
        title: "Reduced Labor",
        description:
          "Field activity shifts toward unloading, positioning, support connection, and commissioning instead of assembling the solar architecture from scratch.",
        image: "/images/technology/technology-deployment-unload.webp",
      },
      {
        title: "Fast commissioning",
        description:
          "A pre-assembled system reduces the number of variables that need to be resolved before energizing and operating the installation.",
        image: "/images/technology/technology-deployment-live.webp",
      },
      {
        title: "Adjustable Support System",
        description:
          "The appliance is designed to connect into the prepared support and electrical interface, keeping the deployment sequence the same across sites.",
        image: "/images/technology/technology-deployment-connect.webp",
      },
    ],
    slides: [
      {
        image: "/images/technology/technology-transport-container.webp",
        kind: "transport",
        label: "Containerized transport",
      },
      {
        image: "/images/technology/technology-deployment-unload.webp",
        kind: "deployment",
        label: "Unload and position",
      },
      {
        image: "/images/technology/technology-deployment-connect.webp",
        kind: "deployment",
        label: "Support and electrical interface",
      },
      {
        image: "/images/technology/technology-deployment-live.webp",
        kind: "deployment",
        label: "Commissioned deployment",
      },
    ],
  },
  {
    slug: "adjustable-support-systems",
    eyebrow: "Breakthrough 04",
    title: "The appliance stays consistent. The support adapts.",
    subtitle:
      "Different sites require different interfaces. A canal span is not a vineyard, a car park is not a reservoir, and a remote industrial site is not a flat solar farm. Solar Waves separates the core appliance from the support condition: the power unit remains repeatable, while the footing, rail, suspended, elevated, canopy, or floating support system adapts to the site.",
    keywords: ["On Ground", "On Rails", "Cable-Suspended", "Floating"],
    metrics: ["Ground-mounted", "Elevated roof", "Rail systems", "Suspended cables", "Floating"],
    heroImage: "/images/technology/technology-support-hero.webp",
    featureCards: [
      {
        title: "On ground",
        description:
          "Ground-mounted supports can be re-used and level the array to reduce earth works.",
        image: "/images/how-it-works/footing-ground-mounted.webp",
      },
      {
        title: "On rails",
        description:
          "Rail systems allow the appliance to span or follow water canals while keeping the core solar unit repeatable.",
        image: "/images/how-it-works/footing-canal-rail.webp",
      },
      {
        title: "Cable-suspended",
        description:
          "Suspended supports can separate the power appliance from difficult ground conditions, water canals, or constrained access zones.",
        image: "/images/how-it-works/footing-suspended-cable.webp",
      },
      {
        title: "Floating",
        description:
          "Floating interfaces adapt the appliance model to reservoirs while preserving a consistent power-unit architecture.",
        image: "/images/how-it-works/footing-floating.webp",
      },
    ],
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
    eyebrow: "Breakthrough 05",
    title: "Engineered to remove unnecessary field complexity",
    subtitle:
      "Solar Waves reduces the number of discrete site operations required to create solar power infrastructure. Integrated structural logic, sliding extrusions, fewer fixings, aerodynamic design, and simplified service access support faster rollout and more predictable deployment. Less assembly in the field; more repeatable production in the factory.",
    keywords: ["Sliding Extrusions", "Fewer Components", "Aerodynamic Design"],
    metrics: ["Fewer components", "Faster assembly", "Reduced wind loading", "Simpler service access"],
    heroImage: "/images/technology/technology-structure-hero.webp",
    featureCards: [
      {
        title: "Sliding extrusions",
        description:
          "Sliding structural elements simplify deployment and maintenance and reduce the number of separate field operations required to deploy Solar Waves.",
        image: "/images/technology/sliding.gif",
      },
      {
        title: "Fewer components",
        description:
          "Integrated structure and a simplified set of aluminium extrusions reduce the number of parts that need to be handled, aligned, and fixed on site.",
        image: "/images/technology/technology-structure-joint.webp",
      },
      {
        title: "Aerodynamic design",
        description:
          "The framework is engineered around structural and wind-loading requirements instead of relying on many separate support elements.",
        image: "/images/technology/aerodynamic-frame.webp",
      },
      {
        title: "Service access",
        description:
          "Operational access is considered as part of the product architecture, supporting inspection and maintenance.",
        image: "/images/technology/technology-service-access.webp",
      },
    ],
    slides: [
      {
        image: "/images/technology/sliding.gif",
        kind: "detail",
        label: "Sliding extrusion system",
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
    eyebrow: "Breakthrough 06",
    title: "Built for long-term solar power infrastructure operation",
    subtitle:
      "Solar Waves is designed for long-term use in real environments, not only for fast installation. Durable aluminum frame, simplified mechanical interfaces, integrated cable logic, and accessible service pathways support lower-maintenance operation over time. The system has to be repeatable to install and practical to operate.",
    keywords: ["Durable Aluminum", "Rainwater Cleaning", "Low-Maintenance Operation"],
    metrics: ["Rainwater-based cleaning", "Reduced maintenance demand", "Durable structures", "Simplified service access"],
    heroImage: "/images/technology/technology-operation-hero.webp",
    featureCards: [
      {
        title: "Rainwater cleaning",
        description:
          "The appliance can use rainwater-based on-board self-ceaning to reduce manual cleaning demand and support operation in remote or exposed environments.",
        image: "/images/technology/self-cleaning.webp",
      },
      {
        title: "Low-maintenance operation",
        description:
          "Simplified PV sliding mechanisms and accessible service pathways are intended to reduce the operational burden over the system lifetime.",
        image: "/images/technology/technology-operation-service.webp",
      },
      {
        title: "Durable aluminum",
        description:
          "Aluminum structure supports corrosion resistance, repeatable manufacturing, and long-term use across infrastructure environments.",
        image: "/images/technology/technology-operation-material.webp",
      },
      {
        title: "Sustainable manufacturing",
        description:
          "More controlled factory production can improve material handling, quality control, and repeatability compared with fully site-built solar assembly.",
        image: "/images/technology/sustainable-manufacturing.webp",
      },
    ],
    slides: [
      {
        image: "/images/technology/self-cleaning.webp",
        kind: "operation",
        label: "Rainwater-based cleaning system",
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
  title: "Assess the fit for your site or infrastructure network.",
  description:
    "Discuss manufacturing logic, structural conditions, support options, environmental requirements, deployment pathways, and technical fit with the Solar Waves team.",
  primaryCta: {
    label: "Contact Solar Waves",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Technical Data",
    href: "/technical-data",
  },
};
