import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function buildMetadata(
  title?: string,
  description?: string
): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  return {
    title: fullTitle,
    description: description ?? siteConfig.description,
  };
}