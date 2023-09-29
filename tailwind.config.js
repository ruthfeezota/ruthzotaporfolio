/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow: 'color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)'
    }
    },
  },
  plugins: [ require('@codaworks/react-glow/tailwind')
],
}