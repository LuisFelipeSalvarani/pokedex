/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pokeball: "url('/src/assets/pokeball.svg')",
      },
    },
  },
  plugins: [],
}
