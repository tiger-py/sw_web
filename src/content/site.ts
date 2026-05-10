import type { NavItem } from "@/types/content";

export const siteConfig = {
  name: "Solar Waves",
  title: "Solar Waves — Solar power infrastructure, manufactured as an appliance",
  description:
    "Pre-manufactured solar power infrastructure: factory-built, pre-wired, transportable, and designed for repeatable deployment across canals, land, water, parking, agriculture, and remote sites.",
};

export const mainNav: NavItem[] = [
  { label: "Solar Waves", href: "/" },
  { label: "Deployment Types", href: "/deployment-types" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/technology" },
  { label: "Technical Data", href: "/technical-data" },
  { label: "Calculate Power Output and Water Savings", href: "/simulation" },
  { label: "Videos", href: "/videos" },
//  { label: "Contact", href: "/contact" },
];
