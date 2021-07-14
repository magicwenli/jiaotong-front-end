module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    //  fontFamily:{
    //     'sans':['BlinkMacSystemFont',"Segoe UI",'Roboto','Oxygen','Ubuntu','Cantarell',"Open Sans"]
    //  }
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
