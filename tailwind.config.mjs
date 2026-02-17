/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#006FBA',
        secondary: '#001F4E',
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#DFF3FD',
        highlight: '#00A4E4',
      },
      borderRadius: {
        design: '20px',
      },
    },
  },
  plugins: [],
}
