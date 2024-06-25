import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        titleBlack: '#212121',
        ryzeoBlue: '#3575D5',
        ryzeoGreen: '#42ADA7',
        blue100: '#D1E6FF',
        titleGrey: '#757575',
        textGrey: '#616161',
        borderGrey: '#E0E0E0',
        grey50: 'F6F7F9',
        grey100: '#FAFAFA',
        grey200: '#E0E0E0',
        grey300: '#616161',
        dividerColor: '#E1E3E5',

      },
      fontSize: {
        '13': '13px',
      },
      boxShadow: {
        shadowPrimary: '0px -1px 0px 0px #EEEEEE inset',
        stripeShadow100: '0px 2px 2px 0px #00000014',
        stripeShadow200: '0px 0px 0px 1px #4044521A',
        stripeShadow300: '0px 2px 8px 0px #40445208',
      },
      rotate: {
        '270': '270deg',
      },
      padding: {
        '30': '30px',
      },
      margin: {
        '30': '30px',
      }
    },
  },
  plugins: [],
};
export default config;
