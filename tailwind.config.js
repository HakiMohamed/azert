/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-mint": "#B7FDF0",
        "font-family": "'Silka', sans-serif",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      "cus-2": "881px",
      "cus-1": "1267px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      cus: "1564px",
    },
    lineHeight: {
      "tight-0.9": "0.9",
      "tight-0.85": "0.85",
      "tight-0.8": "0.8",
    },
  },
  plugins: [],
};
