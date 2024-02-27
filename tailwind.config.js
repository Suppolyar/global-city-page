/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'logo-screen': {'raw': '(max-height: 860px)'}
      },
      backgroundImage: {
        "global-city": "url('@/assets/bg.jpeg')",
      },
      colors: {
        blue: "#2E74F8",
        footer: '#131114'
      }
    },
  },
  plugins: [],
};
