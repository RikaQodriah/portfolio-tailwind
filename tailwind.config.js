/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    // menimpa
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      // menambahkan dari  fitur yg sudah di miliki tailwind
      colors: {
        primary: '#10b981',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};

