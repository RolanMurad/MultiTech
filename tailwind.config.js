/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    // !Desktop First :
    screens: {
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' },
    },
    //!Container Settings
    container: {
      padding: '20px',
      center: true,
    },
    // !Custom Fonts :
    extend: {
      fontFamily: {
        'Object-Reg': ['Object Sans Regular', 'sans-serif'],
        'Cav-Reg': ['Caveat Regular', 'sans-serif'],
        'Manrope-Sem': ['Manrope SemiBold', 'sans-serif'],
        'Manrope-Reg': ['Manrope Regular', 'sans-serif'],
        'Lato-Sem': ['Lato SemiBold', 'sans-serif'],
      },

      colors: {
        'accent': '#34334A',
        'white': '#ffffff',
        'black': '#14141B;',
        'pink': '#FBF7FF',
      }
    },
  },
  plugins: [],
}
