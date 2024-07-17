/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["lofi"], // Set DaisyUI to use only the light theme
  },
  plugins: [
    require('daisyui')
  ],
};
