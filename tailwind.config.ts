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
       'bg-light' : '#fafafa',
       'bg-dark' : '#0E1729'
      },
      keyframes: {
        dance: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-2px)' },
        },
      },
      animation: {
        dance: 'dance 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
} satisfies Config;
