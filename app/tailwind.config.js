/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#35572F',
            secondary: '#FFC635',
            tertiary: '#533F2C',
            black: '#000000',
            gray: '#DEDEDE',
            success: '#398A2C',
            error: '#FF0000',
         },
         fontFamily: {
            epilogue: ['Epilogue', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
         },
         width: {
            logo: '108px',
         },
         maxWidth: {
            sm: '390px',
         },
         fontSize: {},
      },
   },
   plugins: [require('daisyui')],
}
