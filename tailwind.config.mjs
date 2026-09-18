/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-cream': '#FDF4D2',
        'sky-blue': '#B0CDE6',
        'muted-purple': '#A290B7',
        'dusty-rose': '#946D6D',
      },
    },
  },
  plugins: [],
};
