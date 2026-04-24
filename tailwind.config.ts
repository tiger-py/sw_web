import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sw: {
          bg: "#ffffff",
          panel: "#f6f6f4",
          panelAlt: "#efefec",
          line: "rgba(17,17,17,0.10)",
          text: "#111111",
          muted: "rgba(17,17,17,0.72)",
          eyebrow: "rgba(17,17,17,0.58)",
          gold: "#d4a62a",
          dark: "#0b0b0b",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        shell: "1440px",
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;