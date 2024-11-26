import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandCol: "var(--primary-brand-col)",
      },
      fontFamily: {
        "funnelSans": ["Funnel Sans", "Arial", "sans-serif"],
        "Rubik": ["Rubik", 'sans-serif'],
        "Titil": ["Titillium Web", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
