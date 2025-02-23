/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
        Instrument: ["Instrument Serif", "serif"]
      },
     animation: {
      'spin-slow': 'spin 2s linear infinite',
     }

    },
  },
  plugins: [],
}

