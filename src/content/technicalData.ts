import type { DownloadItem, MetricItem } from "@/types/content";

export const technicalIntro = {
  eyebrow: "Technical Data",
  title: "Technical foundation of the Solar Waves appliance",
  description:
    "Solar Waves is designed as pre-manufactured solar power infrastructure: an integrated appliance combining structure, power surface, wiring logic, transport format, and support-system compatibility. The purpose is practical: reduce field complexity, improve deployment repeatability, and make solar easier to roll out across diverse infrastructure conditions.",
};

export const technicalMetrics: MetricItem[] = [
  { value: "50kW", label: "Unit output" },
  { value: "1000V DC", label: "Voltage" },
  { value: "21.5%", label: "Module efficiency" },
  { value: "~2,500kg", label: "Approximate unit weight" },
  { value: "6m × 2.4m", label: "Transport dimensions" },
  { value: "CAT 5", label: "Wind rating" },
];

export const technicalFeatureGroups = [
  {
    title: "Appliance architecture",
    items: [
      "Factory-built power unit",
      "Integrated structure and power surface",
      "Pre-wired before delivery",
      "Designed as a deployable infrastructure appliance",
    ],
  },
  {
    title: "Deployment logic",
    items: [
      "Containerized transport",
      "Reduced field assembly",
      "Rapid site positioning",
      "Repeatable support-system interfaces",
    ],
  },
  {
    title: "Operation",
    items: [
      "Reduced mechanical complexity",
      "Integrated cable pathways",
      "Optional battery integration",
      "Low-maintenance infrastructure operation",
    ],
  },
];

export const technicalTransportMetrics: MetricItem[] = [
  { value: "2", label: "Units / 6 m container" },
  { value: "4", label: "Units / 12 m container" },
  { value: "Minutes", label: "Deployment sequence" },
];

export const supportSystemFit = [
  "Ground-mounted foundations",
  "Elevated roof structures",
  "Rail systems over canals",
  "Suspended cable systems",
  "Floating configurations",
  "Canopy support structures",
];

export const downloads: DownloadItem[] = [
  {
    title: "Solar Waves Brochure",
    href: "/brochures/solar-waves-brochure.pdf",
    type: "PDF",
  },
  {
    title: "Technical Data Sheet",
    href: "/brochures/technical-data-sheet.pdf",
    type: "PDF",
  },
  {
    title: "Mobile Power Brochure",
    href: "/brochures/solar-waves-mobile-power.pdf",
    type: "PDF",
  },
];
