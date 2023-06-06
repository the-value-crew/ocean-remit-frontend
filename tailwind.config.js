/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/scripts/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      b1: '#1D1D22',
      b2: '#5C636A',
      stroke: '#D7DADC',
      w2:'#FAFAFA',
      white: '#FFFFFF',
      primary: '#007AFF',
      success: '#22AC45',
      link: '#0064D0',
      error: '#FF3B30',
      caution: '#FF9500'
    },
    fontWeight: {
      normal: '400',
      '450': '450',
      medium: '500',
      '550': '550',
      semibold: '600',
      bold: '700',
    }
  },
  plugins: [],
}

