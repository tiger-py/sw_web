export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  image: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type SupportSystem = {
  name: string;
  detail: string;
  image: string;
};

export type DeploymentType = {
  slug: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
  keywords: string[];
  metrics: string[];
  heroImage: string;
  slides: DeploymentSlide[];
};

export type DeploymentSlide = {
  image: string;
  kind: "hero" | "deployed" | "maintenance" | "support" | "detail";
  label?: string;
};

export type TechnologyTag = {
  label: string;
};

export type DownloadItem = {
  title: string;
  href: string;
  type: string;
};

export type TechnologyChapter = {
  slug: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  keywords: string[];
  metrics: string[];
  heroImage: string;
  slides: TechnologySlide[];
};

export type TechnologySlide = {
  image: string;
  kind: "factory" | "transport" | "deployment" | "support" | "detail" | "operation";
  label?: string;
};