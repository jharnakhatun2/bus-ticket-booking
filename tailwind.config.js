/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["emerald"],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

