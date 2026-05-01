export const simulationIntro = {
  eyebrow: "Simulation",
  title: "Explore Solar Waves performance by site, array, and deployment condition.",
  description:
    "Use the interactive Solar Waves simulation to explore indicative annual power generation, water savings from shading, and rainwater collection across ground and over-water deployment scenarios.",
  backgroundImage: "/images/backgrounds/simulation-header.webp",
};

export const simulationSteps = [
  {
    value: "01",
    title: "Select a location",
    description:
      "Choose a site on the map so the model can use location-specific weather, irradiance, and geocoding context.",
  },
  {
    value: "02",
    title: "Set the array configuration",
    description:
      "Choose Solar Waves or Solar Canopy, select the panel type, and adjust orientation, elevation, surface type, and array copies.",
  },
  {
    value: "03",
    title: "Compare ground and water deployment",
    description:
      "Switch between on-ground and over-water modes to explore how deployment context changes geometry, water surface, and output metrics.",
  },
  {
    value: "04",
    title: "Review annual performance",
    description:
      "Compare indicative annual power generation, plane-of-array irradiance, water saved by shading, and rainwater collection.",
  },
  {
    value: "05",
    title: "Use results for project discussion",
    description:
      "Use the simulation to frame site fit, deployment logic, and early technical questions before detailed engineering review.",
  },
];

export const simulationScience = {
  eyebrow: "Model Logic",
  title: "How the simulation is structured",
  description:
    "The simulation combines site location, solar geometry, panel configuration, irradiance data, shading behaviour, and water-side assumptions to support early project discussion.",
  sections: [
    {
      title: "Weather and irradiance inputs",
      body:
        "The model uses location-specific weather and irradiance context to estimate solar behaviour across the selected site and configuration.",
    },
    {
      title: "Geometry and deployment representation",
      body:
        "The scene represents Solar Waves and Solar Canopy configurations, including orientation, elevation, surface type, and repeated array layouts.",
    },
    {
      title: "Shading and water-side behaviour",
      body:
        "For over-water deployment, the simulation helps interpret how panel shading, sky exposure, and wind-side assumptions affect evaporation savings.",
    },
    {
      title: "Interpretation and engineering boundary",
      body:
        "Results are intended for early-stage planning and comparison. Final design still requires site-specific engineering, hydrology, structural review, and electrical design.",
    },
  ],
};

export const simulationNextStep = {
  eyebrow: "Next Step",
  title: "Discuss a project-specific deployment configuration",
  description:
    "Use the simulation as a starting point for project discussion, deployment fit review, and technical follow-up.",
  cta: {
    label: "Contact Solar Waves",
    href: "/contact",
  },
};