import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '360': '360px',
        '60': '60px',
        fullLine: 'calc(100% - 32px)',
      },
      padding: {
        '25': '25px',
        '15': '15px',
        '12': '12px',
        '10': '10px',
      },
      height: {
        '330': '330px',
        '1px': '1px',
        fullVH: 'calc(100vh - 121px)',
      },

      colors: {
        dark: '#111928',
        blueDark: '#1F2A37',
        white: '#FFFFFF',
        gray: '#6B7280',
        lightGray: '#E5E7EB',
        gold: '#FBBF24',
        blue: '#1B44C8',
      },
    },
  },
  plugins: [],
};
export default config;
