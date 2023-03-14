/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    // !Desktop First :
    screens: {
      'xxl':{ 'max': '1450px' },
      'xl': { 'max': '1280px' },
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
      colors: {
        accent: '#34334A',
        white: '#ffffff',
        black: '#14141B;',
        pink: '#FBF7FF',
        olivel: '#D4D3CD',
        white2: '#F7F7F7;',
        border: '#E1E1E3',
        gray: '#8D8C98',
        blue: '#3015D9',
        blueAlice: '#F1F0FF',
        blue2: '#215ee6',
      },
      fontFamily: {
        'Object': ['Object Sans Regular', 'sans-serif'],
        'Caveat': ['Caveat Regular', 'sans-serif'],
        'Manrope-Sem': ['Manrope SemiBold', 'sans-serif'],
        'Manrope-Reg': ['Manrope Regular', 'sans-serif'],
        'Lato': ['Lato SemiBold', 'sans-serif'],
      },
      backgroundImage: {
        'star': "url('../../images/star.svg')",
        'smile': "url('../../images/smile-decor.svg')",
        'yellowdecor': "url('../../images/yellow-decor.svg')",
      },
    },
  },
  plugins: [],
}
