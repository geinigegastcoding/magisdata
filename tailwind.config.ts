import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./Keywoard-pages/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1680px" }
    },
    extend: {
      colors: {
        navy: "#171C2B",
        ink: "#20263A",
        cloud: "#FBFCFF",
        cream: "#FBFCFF",
        peach: "#F2F5FF",
        orange: "#4F58FF",
        "orange-dark": "#3D45D7",
        "orange-soft": "#E9EDFF",
        blue: "#4F58FF",
        "blue-soft": "#E9EDFF",
        green: "#2B8A78",
        "green-soft": "#E7F5F1",
        yellow: "#B17C22",
        "yellow-soft": "#FFF6DF",
        pink: "#B55279",
        "pink-soft": "#FBEAF1",
        purple: "#726BDF",
        "purple-soft": "#EFEEFF",
        mist: "#F2F5FF",
        muted: "#5F6880",
        soft: "#8B93A7",
        line: "#DFE4F0",
        "line-strong": "#CBD3E4"
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      boxShadow: {
        soft: "0 20px 60px rgba(65, 75, 125, 0.1)",
        card: "0 12px 32px rgba(65, 75, 125, 0.08)",
        float: "0 12px 30px rgba(65, 75, 125, 0.1)"
      },
      fontFamily: { sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
};

export default config;
