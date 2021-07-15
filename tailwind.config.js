module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: ['active'],
      colors: {
        'color-1': '#0f0b26',
        'color-2': '#522421',
        'color-3': '#8c5a2e',
        'color-4': '#bf8641',
        'color-5': '#b3b372',
      },
    },
    maxWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    fontFamily: {
      'sans': ['webfont', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', "Open Sans"]
    }
    //  -apple-system,,"Helvetica Neue","Helvetica",PingFang SC,PingFang TC,Hiragino Sans GB,STHeiti,Microsoft YaHei,Microsoft JhengHei,"WenQuanYi Micro Hei",sans-serif
  },
  variants: {
    backgroundColor: ['active'],
    textColor: ['active'],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
