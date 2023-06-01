/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/styles/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        b2: '#101010',
        b1: '#000000',
        w2: '#fefefe',
        w1: '#ffffff',
        g09: '#97989d',
        g08: '#2c353d',
        g07: '#1e252b',
        g06: '#262d34',
        g05: '#585858',
        g04: '#828282',
        g03: '#a7a7a7',
        g02: '#c3c3c1',
        g01: '#f1f1ef',
        dP01: '#1d112d',
        dP02: '#301b4a',
        default: '#6c54f6',
        loading: '#503bc9',
        pressed: '#4837ab',
        disabled: '#404040',
        green: '#3fba62',
        red: '#e25757',
        warning: '#e7b431',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
