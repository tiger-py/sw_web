import type { DownloadItem, MetricItem } from "@/types/content";

export const technicalIntro = {
  eyebrow: "Technical Data",
  title: "Core specifications and deployment logic",
  description:
    "A compact technical overview of the Solar Waves appliance, its deployment logic, and its support-system fit.",
};

export const technicalMetrics: MetricItem[] = [
  { value: "50kW", label: "Unit output" },
  { value: "1000V DC", label: "Voltage" },
  { value: "21.5%", label: "Efficiency" },
  { value: "~2,500kg", label: "Weight" },
  { value: "6m × 2.4m", label: "Unit dimensions" },
  { value: "CAT 5", label: "Wind rating" },
];

export const technicalFeatureGroups = [
  {
    title: "Appliance architecture",
    items: [
      "Factory-built",
      "Pre-assembled",
      "Pre-wired",
      "Plug-and-play",
    ],
  },
  {
    title: "Deployment logic",
    items: [
      "Rapid deployment",
      "Containerised transport",
      "Reduced field labour",
      "Fast commissioning",
    ],
  },
  {
    title: "Operation",
    items: [
      "Zero moving parts",
      "Self-cleaning",
      "Optional battery integration",
      "Low-maintenance operation",
    ],
  },
];

export const technicalTransportMetrics: MetricItem[] = [
  { value: "2", label: "Units / 6 m container" },
  { value: "4", label: "Units / 12 m container" },
  { value: "Minutes", label: "Deploy" },
];

export const supportSystemFit = [
  "Ground-mounted foundations",
  "Elevated roof structures",
  "Rail systems over canals",
  "Suspended cable systems",
  "Floating configurations",
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