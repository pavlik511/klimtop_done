/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#ffffff',
        primary: colors.stone,
        red: "#f00c18",
        red2: "#EF4444",
        blue: "#19a5ff",
        blue2: "#2191fb",
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.75rem'],
        lg: ['1.125rem', '2rem'],
        xl: ['1.25rem', '2.125rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.375rem'],
        '4xl': ['2.25rem', '2.75rem'],
        '5xl': ['3rem', '3.5rem'],
        '6xl': ['3.75rem', '4.25rem'],
      },
    },
  },

  daisyui: {
    themes: [
      {
        customTheme: {
          primary: "#19a5ff", // Hlavní barva nastavená na vaši vlastní modrou
          secondary: "#f00c18", // Druhá barva nastavená na vaši červenou
          accent: "#EF4444", // Accent barva na další odstín červené
          neutral: colors.stone[800], // Pro neutralní barvu
          "base-100": "#ffffff", // Základní pozadí na bílou
          info: "#2191fb", // Modrá pro info
          success: colors.green[500], // Zelená pro success
          warning: colors.amber[500], // Oranžová pro warning
          error: "#f00c18", // Červená pro error
        },
      },
    ],
  },
};
