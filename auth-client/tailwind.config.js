module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {

      colors: {
        'backdrop': 'rgba(0, 0, 0, 0.5)'
      },

      inset: {
        '40': '40%',
      },

      borderRadius: {
        'firstChild': '10px 10px 0 0',
        'lastChild': '0 0 10px 10px',
        'full': '50%',
        'input': '5px'
      }

     },
   },
   variants: {
     extend: {
      borderRadius: ['first', 'last'],
     },
   },
   plugins: [],
 }