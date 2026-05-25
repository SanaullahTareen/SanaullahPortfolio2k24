/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#525252",
        tertiary: "#f4f4f5",
        "black-100": "#111111",
        "black-200": "#27272a",
        "white-100": "#111111",
        accent: {
          blue: "#111111",
          cyan: "#525252",
          teal: "#737373",
          purple: "#a3a3a3",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.9)",
          dark: "rgba(255, 255, 255, 0.95)",
          border: "rgba(17, 24, 39, 0.1)",
        },
      },
      boxShadow: {
        card: "0px 25px 50px -12px rgba(17, 24, 39, 0.12)",
        glass: "0 8px 32px 0 rgba(17, 24, 39, 0.08)",
        glow: "0 0 40px rgba(17, 24, 39, 0.12)",
        "glow-teal": "0 0 40px rgba(17, 24, 39, 0.08)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(135deg, #ffffff 0%, #f4f4f5 50%, #e5e7eb 100%)",
      },
      backdropBlur: {
        xs: "2px",
        glass: "16px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%": { boxShadow: "0 0 20px rgba(17, 24, 39, 0.12)" },
          "100%": { boxShadow: "0 0 40px rgba(17, 24, 39, 0.22)" },
        },
      },
    },
  },
  plugins: [],
};
