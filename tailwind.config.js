/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        background: "#f7fafc",
        surface: "#f7fafc",
        primary: "#003d9b",
        "primary-container": "#0052cc",
        "primary-fixed": "#dae2ff",
        secondary: "#00687a",
        "secondary-container": "#6ae1ff",
        tertiary: "#4100cf",
        "tertiary-container": "#5928f7",
        outline: "#737685",
        "outline-variant": "#c3c6d6",
        "on-primary": "#ffffff",
        "on-secondary-container": "#006374",
        "on-surface": "#181c1e",
        "on-surface-variant": "#434654",
        "surface-container": "#ebeef0",
        "surface-container-low": "#f1f4f6",
        "surface-container-high": "#e5e9eb",
        "surface-container-highest": "#e0e3e5",
        "surface-container-lowest": "#ffffff",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(10, 38, 71, 0.10)",
        card: "0 18px 40px rgba(15, 23, 42, 0.08)",
        glow: "0 24px 60px rgba(0, 82, 204, 0.18)",
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        headline: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(0, 61, 155, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 61, 155, 0.05) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

