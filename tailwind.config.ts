import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./schemas/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        xl: "2rem"
      },
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        graphite: "#0B0D10",
        steel: "#1A1D22",
        slate: "#23262E",
        bone: "#E9E8E6",
        amber: "#FF8A00",
        ink: "#23262E",
        muted: "#E9E8E6"
      },
      borderRadius: {
        md: "8px",
        lg: "8px",
        xl: "8px",
        "2xl": "8px"
      },
      boxShadow: {
        premium: "0 28px 80px rgba(11, 13, 16, 0.38)",
        line: "inset 0 1px 0 rgba(233,232,230,0.08)"
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"]
      },
      backgroundImage: {
        "precision-grid":
          "linear-gradient(rgba(233,232,230,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(233,232,230,0.055) 1px, transparent 1px)",
        "amber-line":
          "linear-gradient(90deg, transparent, rgba(255,138,0,0.9), transparent)"
      }
    }
  },
  plugins: []
};

export default config;
