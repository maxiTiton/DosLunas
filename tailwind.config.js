/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores inspirados en ladrillo visto
        brick: {
          50: '#faf7f5',
          100: '#f2e8e1',
          200: '#e7d1c3',
          300: '#d9b59a',
          400: '#c99572',
          500: '#b87c5a',
          600: '#a56a4f',
          700: '#8a5543',
          800: '#6f463a',
          900: '#5a3a30',
        },
        // Verde oliva gastado para detalles
        sage: {
          50: '#f6f7f2',
          100: '#e9ebe1',
          200: '#d5d9c5',
          300: '#b8c09f',
          400: '#9ba77a',
          500: '#7d8f5c',
          600: '#647447',
          700: '#4f5c39',
          800: '#414b30',
          900: '#373f2a',
        },
        // Tonos de madera
        wood: {
          50: '#faf9f7',
          100: '#f0eae2',
          200: '#e1d4c4',
          300: '#d0b89f',
          400: '#be9c7a',
          500: '#a6825e',
          600: '#8b6d4f',
          700: '#735843',
          800: '#5e483a',
          900: '#4d3c30',
        },
        // Tonos de teja/terracota
        terra: {
          50: '#faf6f4',
          100: '#f2e8e2',
          200: '#e6d0c4',
          300: '#d4b09d',
          400: '#c08c73',
          500: '#a8714f',
          600: '#8f5d42',
          700: '#764c37',
          800: '#614030',
          900: '#4f352a',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
