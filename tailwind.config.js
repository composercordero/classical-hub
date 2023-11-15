/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light', 
    'winter',
      {
        custom: {
        "primary": "#c026d3",
        "secondary": "#0284c7",
        "accent": "#38bdf8",
        "neutral": "#d1d5db",
        "base-100": "#ffffff",
        "info": "#fde047",
        "success": "#4ade80",
        "warning": "#fb923c",
        "error": "#fb7185",
        },},
      ],
  },
}