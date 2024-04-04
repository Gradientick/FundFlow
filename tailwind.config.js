/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lighte: "#F7F7F7",
        lightblue: "#19A7CE",
        sblue: "#146C94",
        dark: "#f0f4f8",
        graye: "#d1d5db",
        initialBlue: "#2563EB",
        hoverBlue: "#1D4ED8",
        focusRing: "#93C5FD",
        navc: "#1A202C",
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(to right, #2D3748, #4A5568)",
      },
    },
  },
  plugins: [],
};
