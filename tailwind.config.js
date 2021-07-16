module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'color-1': '#0f0b26',   // 正文字体
      'color-2': '#522421',   // 弱一点的正文
      'color-3': '#8c5a2e',   // JiaoTong
      'color-4': '#FEFFDE',   // a 标签
      'color-5': '#D62AD0',   // # 符号
      'color-6': '#7C83FD',   // 前景
      'color-7': '#7DEDFF',   // 背景
      'color-8': '#DDFFBC',   // 按键背景
      'color-9': '#04009A',   // 按键字体
      'color-10': '#FF94CC',   // label背景
      'color-11': '#EFF6FF',   // label字体
      'color-12': '#96BAFF',   // Banner Footer background
    },
    extend: {
      boxShadow: ['active'],
      
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
