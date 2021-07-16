module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: ['active'],
      colors: {
        'color-1': '#0f0b26',   // 正文字体
        'color-2': '#522421',   // 弱一点的正文
        'color-3': '#8c5a2e',   // 预留
        'color-4': '#0f0b26',   // a 标签
        'color-5': '#7C83FD',   // # 符号
        'color-6': '#7C83FD',   // 前景
        'color-7': '#7DEDFF',   // 背景
        'color-8': '#96BAFF',   // 按键背景
        'color-9': '#522421',   // 按键字体

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
