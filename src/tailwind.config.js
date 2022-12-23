/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#2C4251',
        white: '#fff',
        primary: '#5a2aa2',
        secondary: '#e6b3d1',
        tertiary: '#000080',
        brandBlue: '#8ebeff',
        brandBlueLight: '#f8fcff'
      }
    }
  },
  plugins: [
  ]
}
