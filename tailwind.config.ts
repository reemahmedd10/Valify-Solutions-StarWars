import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sw-yellow': '#FFE81F',
        'sw-black': '#000000',
        'sw-gray': '#1a1a1a',
        'sw-dark': '#0d0d0d',
      },
      fontFamily: {
        orbitron: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

