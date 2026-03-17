import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E45826',
        dark: '#1B1A17',
        'gray-light': '#F0F0F1',
        'dark-text': '#3C434A',
      },
      fontFamily: {
        sans: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
