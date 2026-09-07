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
        navy: "#292B25",
        ink: "#35372F",
        cloud: "#F2F0E9",
        cream: "#F2F0E9",
        peach: "#EEEAE1",
        orange: "#B83C23",
        "orange-dark": "#A6331C",
        "orange-soft": "#F4E6DC",
        blue: "#B83C23",
        "blue-soft": "#F4E6DC",
        green: "#2B8A78",
        "green-soft": "#E7F5F1",
        yellow: "#B17C22",
        "yellow-soft": "#FFF6DF",
        pink: "#B55279",
        "pink-soft": "#FBEAF1",
        purple: "#726BDF",
        "purple-soft": "#EFEEFF",
        mist: "#EEEAE1",
        muted: "#62645B",
        soft: "#72746B",
        line: "#D5D5CA",
        "line-strong": "#B9BBB0"
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
