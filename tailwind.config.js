/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#3B82F6', // Example accent color (blue-500)
        navPalette: {
          pink: '#EC4899',
          blue: '#3B82F6',
          green: '#10B981',
          yellow: '#F59E42',
          purple: '#8B5CF6',
          red: '#EF4444',
        },
      },
    },
  },
  plugins: [],
};
