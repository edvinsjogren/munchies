import type { Config } from 'tailwindcss';

const sharedTypographySettings = {
  lineHeight: '125%',
  letterSpacing: '-0.03125rem',
  weight: 'normal',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375PX',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#FFFFFF',
      stroke: 'rgba(0, 0, 0, 0.1)',
      'off-white': '#FAFAFA',
      black: '#000000',
      green: '#00703A',
      'hover-green': '#006434',
    },
    extend: {
      fontFamily: {
        sanfrancisco: ['var(--font-sanfrancisco)'],
      },
      fontSize: {
        display: '2.5rem',
        h1: '1.5rem',
        title: '0.875rem',
        subtitle: '0.75rem',
        body: '0.75rem',
      },
      fontWeight: {
        display: sharedTypographySettings.weight,
        h1: sharedTypographySettings.weight,
        title: sharedTypographySettings.weight,
        subtitle: '590',
        body: sharedTypographySettings.weight,
      },
      lineHeight: {
        display: sharedTypographySettings.lineHeight,
        h1: sharedTypographySettings.lineHeight,
        title: sharedTypographySettings.lineHeight,
        subtitle: sharedTypographySettings.lineHeight,
        body: sharedTypographySettings.lineHeight,
      },
      letterSpacing: {
        display: sharedTypographySettings.letterSpacing,
        h1: sharedTypographySettings.letterSpacing,
        title: sharedTypographySettings.letterSpacing,
        subtitle: sharedTypographySettings.letterSpacing,
        body: sharedTypographySettings.letterSpacing,
      },
      borderWidth: {
        DEFAULT: '1px',
        small: '0.6px',
      },
      boxShadow: {
        'box-shadows':
          '-4px 2px 10px rgba(0, 0, 0, 0.01), -16px 9px 18px rgba(0, 0, 0, 0.01)',
      },
    },
  },
  plugins: [],
};
export default config;
