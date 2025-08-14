import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-200': '#475467',
        'light-blue-100': '#c1d3f81a',
        'light-blue-200': '#a7bff14d',
      },
      fontFamily: {
        sans: ['Mona Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

export default config
