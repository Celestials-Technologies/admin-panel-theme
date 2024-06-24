

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        titleBlack: '#212121',
        ryzeoBlue: '#3575D5',
        blue100: '#D1E6FF',
        titleGrey: '#757575',
        textGrey: '#616161',
        borderGrey: '#E0E0E0',
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
      },
    },
  },
  plugins: [],
};
export default config;
