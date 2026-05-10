import type { MetricItem } from "@/types/content";

export const projectsHero = {
  eyebrow: "Projects",
  title: "Solar Waves in real deployment environments.",
  description:
    "Solar Waves currently deployed in pilot projects around the world.",
  backgroundImage: "/images/projects/deployment-cali-hero.webp",
};

export const projectsIntro = {
  eyebrow: "Deployment Contexts",
  title: "Two completely different environments. One solar appliance.",
  description:
    "Using the same MegaWaves, structural identical units, Solar Waves is currently successfully deployed on land and on water. The proof for pre-assembled solar arrays, being deployed on vastly different terrain, needing just adjusted supports to be set up. ",
};

export const projectMetrics: MetricItem[] = [
  { value: "50 KW", label: "Per Solar Waves appliance unit" },
  { value: "2 MegaWaves", label: "Per 6 m container" },
  { value: "CAT 5", label: "Wind-rated structure" },
  { value: "Factory-built", label: "Reduced field assembly" },
];

export const projects = [
  {
    eyebrow: "California, United States",
    title: "Turlock Irrigation District",
    slug: "turlock-irrigation-district",
    image: "/images/projects/deployment-cali-01.webp",
    description:
      "A Solar Waves pilot deployment focused on irrigation canals, canal-adjacent solar generation, and the potential to combine power production with water infrastructure benefits.",
    tags: [
      "Irrigation Canal Network",
      "Canal Deployment",
      "Water Corridor Solar",
      "Utility-Scale Application",
    ],
    sections: [
      {
        title: "Deployment Context",
        body:
          "Solar Waves is currently deployed over narrow water irrigation Canals in Turlock, California. The dual use of space and Solar Waves outstanding capabilities to preserve water by the means of shading and air flow are proven by this deployment.",
      },
      {
        title: "Why Solar Waves Fits",
        body:
          "The pre-assmelbed MegaWaves enable simple logistics. After setting up the rail support system on the sides of the canal, the arrays can be unfolded on the rails.",
      },
      {
        title: "Water Preservation",
        body:
          "Solar Waves exces through its low build and air pockets underneath the pitchd roof in water evaporation reduction.",
      },
    ],
  },
  {
    eyebrow: "Western Australia",
    title: "Billabong",
    slug: "billabong-western-australia",
    image: "/images/projects/deployment-wa.webp",
    description:
      "A Solar Waves deployment pilot in remote Australian conditions, combining robust pre-assembled solar infrastructure with rapid installation logic and reduced field complexity.",
    tags: [
      "Remote Deployment",
      "Western Australia",
      "Pre-Assembled Solar",
      "Rapid Deployment",
    ],
    sections: [
      {
        title: "Deployment Context",
        body:
          "Billabong, Western Australia represents a remote-site deployment context where logistics, reduced field assembly, and robust support systems are central to project viability.",
      },
      {
        title: "Why Solar Waves Fits",
        body:
          "Solar Waves can be transported as a pre-assembled appliance and deployed with fewer site-built operations, supporting faster rollout in difficult or remote environments.",
      },
      {
        title: "Reduced Field Labor",
        body:
          "By pre-assembling and pre-configuring the MegaWaves in the factory, a small crew is enough. Solar Waves is designed for reduced labor in the field.",
      },
    ],
  },
];
