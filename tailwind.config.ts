import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          lighter: "hsl(var(--primary-lighter))",
          darker: "hsl(var(--primary-darker))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          lighter: "hsl(var(--secondary-lighter))",
          darker: "hsl(var(--secondary-darker))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          lighter: "hsl(var(--accent-lighter))",
          darker: "hsl(var(--accent-darker))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": {
            DEFAULT: "hsl(var(--chart-1))",
            lighter: "hsl(var(--chart-1-lighter))",
            darker: "hsl(var(--chart-1-darker))",
          },
          "2": {
            DEFAULT: "hsl(var(--chart-2))",
            lighter: "hsl(var(--chart-2-lighter))",
            darker: "hsl(var(--chart-2-darker))",
          },
          "3": {
            DEFAULT: "hsl(var(--chart-3))",
            lighter: "hsl(var(--chart-3-lighter))",
            darker: "hsl(var(--chart-3-darker))",
          },
          "4": {
            DEFAULT: "hsl(var(--chart-4))",
            lighter: "hsl(var(--chart-4-lighter))",
            darker: "hsl(var(--chart-4-darker))",
          },
          "5": {
            DEFAULT: "hsl(var(--chart-5))",
            lighter: "hsl(var(--chart-5-lighter))",
            darker: "hsl(var(--chart-5-darker))",
          },
        },
        "custom-blue": {
          DEFAULT: "hsl(var(--custom-blue))",
          lighter: "hsl(var(--custom-blue-lighter))",
          darker: "hsl(var(--custom-blue-darker))",
        },
        "custom-yellow": {
          DEFAULT: "hsl(var(--custom-yellow))",
          lighter: "hsl(var(--custom-yellow-lighter))",
          darker: "hsl(var(--custom-yellow-darker))",
        },
        "custom-purple": {
          DEFAULT: "hsl(var(--custom-purple))",
          lighter: "hsl(var(--custom-purple-lighter))",
          darker: "hsl(var(--custom-purple-darker))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
