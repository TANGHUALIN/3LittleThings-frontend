/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'noto-jp': ['Noto Sans JP', 'sans-serif'],
      'noto-cn': ['Noto Sans SC', 'serif'],
      'sans': ['Roboto', 'Arial', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
      'mono': ['Menlo', 'monospace'],
      'inter':['Inter', 'sans-serif','Noto Sans JP','sans-serif'],
      
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  corePlugins: {preflight: false},
}

