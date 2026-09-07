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
        navy: "#202124",
        ink: "#202124",
        cloud: "#FFFFFF",
        cream: "#F1F2F3",
        peach: "#F1F2F3",
        orange: "#202124",
        "orange-dark": "#202124",
        "orange-soft": "#F1F2F3",
        blue: "#202124",
        "blue-soft": "#F1F2F3",
        green: "#595D63",
        "green-soft": "#F1F2F3",
        yellow: "#595D63",
        "yellow-soft": "#F1F2F3",
        pink: "#595D63",
        "pink-soft": "#F1F2F3",
        purple: "#595D63",
        "purple-soft": "#F1F2F3",
        mist: "#F1F2F3",
        muted: "#595D63",
        soft: "#595D63",
        line: "#DCDFE2",
        "line-strong": "#BDC2C8"
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      boxShadow: {
        soft: "0 20px 60px rgba(32, 33, 36, 0.05)",
        card: "0 12px 32px rgba(32, 33, 36, 0.05)",
        float: "0 12px 30px rgba(32, 33, 36, 0.05)"
      },
      fontFamily: { sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"] }
    }
  },
  plugins: []
};

export default config;
