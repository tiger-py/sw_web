import type { DeploymentType } from "@/types/content";

export const deploymentTypes: DeploymentType[] = [
  {
    slug: "ground-mount",
    eyebrow: "Deployment Type 01",
    title: "On Ground",
    subtitle:
      "Solar Waves reduces field assembly and shifts more of the work into factory production, creating a faster and more repeatable pathway for utility-scale rollout.",
    keywords: ["Utility Scale", "Fast Rollout", "Reduced Field Assembly", "Appliance Logic"],
    metrics: ["Utility scale", "Reduced concrete dependency", "Fold-out deployment", "Appliance logic"],
    heroImage: "/images/deployments/deployment-ground-mount-hero.webp",
    slides: [
      {
        image: "/images/deployments/deployment-ground-mount-deployed.webp",
        kind: "deployed",
        label: "Deployed field view",
      },
      {
        image: "/images/deployments/deployment-ground-mount-maintenance.webp",
        kind: "maintenance",
        label: "Field access",
      },
      {
        image: "/images/support-systems/support-grounded-main.webp",
        kind: "support",
        label: "Ground support interface",
      },
      {
        image: "/images/technology/technology-ground-detail.webp",
        kind: "detail",
        label: "Drone view",
      },
    ],
    featureCards: [
      {
        title: "Utility Scale",
        description:
          "Designed for open land and large repeatable fields, Solar Waves supports utility-scale rollout without turning each site into a construction site.",
        image: "/images/deployments/deployment-ground-mount-deployed.webp",
      },
      {
        title: "Rapid Deployment",
        description:
          "Factory-prepared assemblies reduce the number of decisions and operations that need to happen in the field, shortening the path from delivery to generation.",
        image: "/images/technology/technology-ground-detail.webp",
      },
      {
        title: "Reduced Field Labor",
        description:
          "Solar Wavs arrives pre-manufactured and pre-configured on site and needs only a small crew for deployment. No major earth works like concrete are needed, protecting the land Solar Waves is deployed on.",
        image: "/images/deployments/deployment-ground-mount-maintenance.webp",
      },
      {
        title: "Solar as Appliance",
        description:
          "The deployment is treated as a repeatable strategy: pre-manufactured, transported, placed, connected, and scaled across the site. Making solar deploymnts more predictable and safer to manage and maintain.",
        image: "/images/support-systems/support-grounded-main.webp",
      },
    ],
  },
  {
    slug: "over-canals",
    eyebrow: "Deployment Type 02",
    title: "Over Canals",
    subtitle:
      "Solar Waves can turn irrigation canals and water corridors into productive solar power infrastructure. Deployed above the canal using rail or cable-suspended systems, Solar Waves generates power while helping shade exposed water surfaces to reduce evaporation.",
    keywords: ["Rail Deployment", "Cable-Suspended Deployment", "Fold-Back Access", "Water Corridor Infrastructure"],
    metrics: ["Narrow canals", "Wide canals", "Access maintained", "On rails or cable-suspended"],
    heroImage: "/images/deployments/deployment-over-canals-hero.webp",
    slides: [
      {
        image: "/images/deployments/deployment-over-canals-rails.webp",
        kind: "deployed",
        label: "Deployed canal array on rail and carriage system",
      },
      {
        image: "/images/deployments/deployment-over-canals-deployed.webp",
        kind: "deployed",
        label: "Deployed canal array, cable-suspended",
      },
      {
        image: "/images/deployments/deployment-over-canals-maintenance.webp",
        kind: "maintenance",
        label: "Maintenance and access",
      },
      {
        image: "/images/support-systems/support-rail-main.webp",
        kind: "support",
        label: "Rail support interface",
      },
      {
        image: "/images/support-systems/support-suspended-main.webp",
        kind: "detail",
        label: "Cable-suspended deployment",
      },
    ],
    featureCards: [
      {
        title: "Rail Deployment",
        description:
          "Rail-mounted systems suit smaller irrigation canals where the appliance can be positioned above water while preserving maintenance movement. The array can be simply folded back to access the canal.",
        image: "/images/deployments/deployment-over-canals-rails.webp",
      },
      {
        title: "Cable-Suspended Deployment",
        description:
          "Cable-suspended configurations allow wider canal spans. While suspended in the air, bridges between the solar panels allow for maintenance access.",
        image: "/images/deployments/deployment-over-canals-deployed.webp",
      },
      {
        title: "Canal and PV Access",
        description:
          "Access logic is designed into the deployment model so inspection, and service requirements can remain part of normal canal operations.",
        image: "/images/deployments/deployment-over-canals-maintenance.webp",
      },
      {
        title: "Adjustable Support System",
        description:
          "The deployment strategy stays the same, folding out the waves of PVs on the support system. Just the supports change.",
        image: "/images/support-systems/support-rail-main.webp",
      },
    ],
  },
  {
    slug: "agrivoltaics",
    eyebrow: "Deployment Type 03",
    title: "Agrivoltaics",
    subtitle:
      "Solar Waves can be elevated above land for agricultural use to combine power generation with agriculture, shade management, water savings, and continued site access.",
    keywords: ["Greenhouses", "Crop Access", "Shade Strategy", "Elevated Supports"],
    metrics: ["Agrivoltaics", "Vineyards", "Greenhouse systems", "Elevated supports"],
    heroImage: "/images/deployments/deployment-agrivoltaics-hero.webp",
    slides: [
      {
        image: "/images/deployments/deployment-agrivoltaics-deployed.webp",
        kind: "deployed",
        label: "Deployed greenhouse kit",
      },
      {
        image: "/images/deployments/deployment-agrivoltaics-maintenance.webp",
        kind: "maintenance",
        label: "Shading and sunlight management",
      },
      {
        image: "/images/support-systems/support-elevated-main.webp",
        kind: "support",
        label: "Elevated agricultural support",
      },
      {
        image: "/images/technology/technology-agrivoltaics-detail.webp",
        kind: "detail",
        label: "Integrated water storage design",
      },
    ],
    featureCards: [
      {
        title: "Greenhouses",
        description:
          "Solar Waves can be delivered as a greenhouse kit. Pre-manufactured framing, supported by watertanks to harvest rainwater, form a canopy structure ideal for hydroponic farming",
        image: "/images/deployments/deployment-agrivoltaics-deployed.webp",
      },
      {
        title: "Shade Strategy",
        description:
          "Solar Waves can be pre-configured to offer PVs, translucent panels and empty spots. Sunlight, shade, power generation and air flow can be regulated together.",
        image: "/images/deployments/deployment-agrivoltaics-maintenance.webp",
      },
      {
        title: "Water Collection",
        description:
          "Forming a water-tight roof, Solar Waves offers in-build ways for rainwater collection. Solar Waves can be compined with pre-manufactured containers of variuos sizes",
        image: "/images/technology/technology-agrivoltaics-detail.webp",
      },
      {
        title: "Elevated Supports",
        description:
          "Pre-manufactured and delivered support structure lifts the appliance above productive land, adapting the same core system to farming conditions instead of replacing them.",
        image: "/images/support-systems/support-elevated-main.webp",
      },
    ],
  },
  {
    slug: "floating-solar",
    eyebrow: "Deployment Type 04",
    title: "Floating Solar",
    subtitle:
      "Solar Waves extends the appliance model onto reservoirs and other industrial water surfaces. The core Solar Wavescan be adapted to buoyant support systems without abandoning its deployment strategy.",
    keywords: ["Reservoirs", "Buoyant Supports", "Over-Water Deployment", "Utility-Scale Potential"],
    metrics: ["On water", "Modular buoyancy", "Rapid deployment", "Utility scale"],
    heroImage: "/images/deployments/deployment-floating-solar-hero.webp",
    slides: [
      {
        image: "/images/deployments/deployment-floating-solar-deployed.webp",
        kind: "deployed",
        label: "Deployed floating field",
      },
      {
        image: "/images/deployments/deployment-floating-solar-maintenance.webp",
        kind: "maintenance",
        label: "Deployment on water",
      },
      {
        image: "/images/support-systems/support-floating-main.webp",
        kind: "support",
        label: "Floating support interface",
      },
      {
        image: "/images/technology/technology-floating-detail.webp",
        kind: "detail",
        label: "Buoyancy and mooring detail",
      },
    ],
    featureCards: [
      {
        title: "Ready for Reservoirs",
        description:
          "Industrial reservoirs become solar deployment surfaces without consuming other productive land.",
        image: "/images/deployments/deployment-floating-solar-deployed.webp",
      },
      {
        title: "Floating Supports",
        description:
          "Floating supports adapt Solar Waves to water while preserving a repeatable deployment strategy. The floating devices form access ways for maintenance work on the arrays.",
        image: "/images/support-systems/support-floating-main.webp",
      },
      {
        title: "Over-Water Deployment",
        description:
          "The same fold-out deployment strategy is used on water. Only a small crew and a boat to pull out the arrays, after fixing them to the floating support system.",
        image: "/images/deployments/deployment-floating-solar-maintenance.webp",
      },
      {
        title: "Utility-Scale",
        description:
          "Large water surfaces can support repeatable solar fields where project scale is defined by multiplication rather than custom construction. Solar Waves has its own unique strategy for that.",
        image: "/images/technology/technology-floating-detail.webp",
      },
    ],
  },
  {
    slug: "mobile-power",
    eyebrow: "Deployment Type 05",
    title: "Mobile Power",
    subtitle:
      "Remote, temporary, and industrial sites often need power faster than conventional solar projects can be developed. Solar Waves can support redeployable or semi-permanent solar infrastructure for moving energy demand.",
    keywords: ["Containerized", "Redeployable", "Temporary Power", "Remote Sites"],
    metrics: ["Remote sites", "Temporary power", "Containerized", "Redeployable"],
    heroImage: "/images/deployments/deployment-mobile-power-hero.webp",
    slides: [
      {
        image: "/images/deployments/deployment-mobile-power-deployed.webp",
        kind: "deployed",
        label: "Deployed temporary array",
      },
      {
        image: "/images/deployments/deployment-mobile-power-maintenance.webp",
        kind: "maintenance",
        label: "Integrated electrical equipment",
      },
      {
        image: "/images/support-systems/support-grounded-main.webp",
        kind: "support",
        label: "Reusable supports",
      },
      {
        image: "/images/technology/technology-mobile-detail.webp",
        kind: "detail",
        label: "Integrated electrical equipment",
      },
    ],
    featureCards: [
      {
        title: "Temporary Power",
        description:
          "For temporary industrial loads, Solar Waves can provide fast solar generation without the timeline of conventional permanent solar construction. It just needs deployment out of the container it is deliverd in.",
        image: "/images/deployments/deployment-mobile-power-deployed.webp",
      },
      {
        title: "On-Board Electrical Equipement",
        description:
          "The container Solar Waves is deployed out of is utilized to deliver electrical equipment, like inverters and batteries. Designed to be taken from site to site with the redeployable Solar Waves.",
        image: "/images/technology/technology-mobile-detail.webp",
      },
      {
        title: "Redeployable",
        description:
          "The ground support system for Solar Waves is no conrete based. This allows the footings to be taken apart and be taken to the next site. Fully re-usable.",
        image: "/images/support-systems/support-grounded-main.webp",
      },
      {
        title: "Remote Sites",
        description:
          "Remote operations can reduce dependency on diesel and grid extension by deploying solar generation where the energy demand actually moves. Still, Solar Waves can be delivered ith a diesel generator as emergency power fallback on remote site.",
        image: "/images/deployments/deployment-mobile-power-maintenance.webp",
      },
    ],
  },
  {
    slug: "car-parks",
    eyebrow: "Deployment Type 06",
    title: "Car Parks",
    subtitle:
      "Solar Waves can transform parking areas into power-generating infrastructure. Deployed on an elevated support framework, the appliance provides solar generation, shade, weather protection, and a platform for EV charging.",
    keywords: ["Shade", "Weather Cover", "Canopy Supports", "Built Environment"],
    metrics: ["Carports", "Solar over car parks", "Canopy supports", "Built environment"],
    heroImage: "/images/deployments/deployment-car-parks-hero.webp",
    slides: [
      {
        image: "/images/deployments/deployment-car-parks-deployed.webp",
        kind: "deployed",
        label: "Deployed parking array",
      },
      {
        image: "/images/deployments/deployment-car-parks-maintenance.webp",
        kind: "maintenance",
        label: "Underside service access",
      },
      {
        image: "/images/support-systems/support-carport-main.webp",
        kind: "support",
        label: "Canopy support interface",
      },
      {
        image: "/images/technology/technology-car-park-detail.webp",
        kind: "detail",
        label: "Structural view",
      },
    ],
    featureCards: [
      {
        title: "Shade Strategy",
        description:
          "Parking areas gain solar generation while also producing usable shade for vehicles, pedestrians, and charging zones.",
        image: "/images/deployments/deployment-car-parks-deployed.webp",
      },
      {
        title: "Weather Cover",
        description:
          "The array functions as weather protection while converting existing car parks into productive solar infrastructure. Each solar roof is water tight.",
        image: "/images/deployments/deployment-car-parks-maintenance.webp",
      },
      {
        title: "Elevated Support",
        description:
          "A patented framework serves as an under construction to support the Solar Waves deployment over car parks.",
        image: "/images/support-systems/support-carport-main.webp",
      },
      {
        title: "Solar Power Infrastructure",
        description:
          "Solar deployment moves closer to demand by using already-developed land, parking assets, and service infrastructure.",
        image: "/images/technology/technology-car-park-detail.webp",
      },
    ],
  },
  {
    slug: "ev-charging-stations",
    eyebrow: "Deployment Type 07",
    title: "EV Charging Stations",
    subtitle:
      "Remote EV charging stations are needed more and more. Solar Waves can combine solar generation, structural cover, and charging infrastructure into one deployable kit.",
    keywords: ["Charging", "Solar Canopy", "Integrated Support", "Rapid Deployment"],
    metrics: ["EV charging", "Node-based support system", "Modular", "Rapid deployment"],
    heroImage: "/images/deployments/deployment-ev-charging-hero.webp",
    slides: [
      {
        image: "/images/deployments/deployment-ev-charging-deployed.webp",
        kind: "deployed",
        label: "Deployed charging canopy",
      },
      {
        image: "/images/deployments/deployment-ev-charging-maintenance.webp",
        kind: "maintenance",
        label: "Service access",
      },
      {
        image: "/images/support-systems/support-canopy-main.webp",
        kind: "support",
        label: "Charging canopy support",
      },
      {
        image: "/images/technology/technology-ev-detail.webp",
        kind: "detail",
        label: "Node-based structural support system",
      },
    ],
    featureCards: [
      {
        title: "EV Charging",
        description:
          "Solar power generation becomes an EV Charging in one delivarable kit, combining PVs, electrical equipment and supporting framework into one product.",
        image: "/images/deployments/deployment-ev-charging-deployed.webp",
      },
      {
        title: "Rapid Deployment",
        description:
          "A pre-manufactured charging station kit, that can be rapidly assembled on site.",
        image: "/images/deployments/deployment-ev-charging-maintenance.webp",
      },
      {
        title: "Integrated Support",
        description:
          "The solar power generation integrates seamlessly into its support structure.",
        image: "/images/support-systems/support-canopy-main.webp",
      },
      {
        title: "Service Area",
        description:
          "Underneath the solar canopy is enough space for rest and service areas.",
        image: "/images/technology/technology-ev-detail.webp",
      },
    ],
  },
];
