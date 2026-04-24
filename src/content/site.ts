import type { NavItem } from "@/types/content";

export const siteConfig = {
  name: "Solar Waves",
  title: "Solar Waves — Utility-scale solar, re-engineered",
  description:
    "A factory-built solar appliance for rapid deployment in new environments.",
};

export const mainNav: NavItem[] = [
  { label: "Solar Waves", href: "/" },
  { label: "Deployment Types", href: "/deployment-types" },
  { label: "Technology", href: "/technology" },
  { label: "Technical Data", href: "/technical-data" },
  { label: "Contact", href: "/contact" },
];