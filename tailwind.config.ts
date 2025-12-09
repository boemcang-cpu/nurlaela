import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#111827',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        primary: {
          DEFAULT: '#001f3f',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f3f4f6',
          foreground: '#1f2937',
        },
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        },
        accent: {
          DEFAULT: '#f59e0b',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#e5e7eb',
        input: '#ffffff',
        ring: '#3b82f6',
        chart: {
          '1': '#0088fe',
          '2': '#00c49a',
          '3': '#f97316',
          '4': '#eab308',
          '5': '#f59e0b',
        },
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
    },
    plugins: [tailwindcssAnimate],
  },
};

export default config;