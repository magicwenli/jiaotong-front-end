module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['active'],
    textColor: ['active'],
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
