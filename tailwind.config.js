/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5F61',
          50: '#E8F4F4',
          100: '#C5E2E3',
          200: '#8CC2C3',
          300: '#4E9FA1',
          400: '#2F7F82',
          500: '#1B5F61',
          600: '#164E50',
          700: '#103D3E',
          800: '#0B2C2D',
          900: '#051B1C',
        },
        secondary: '#2F7F82',
        tertiary: '#4E9FA1',
        accent: '#8CC2C3',
        highlight: {
          DEFAULT: '#A51383',
          50:  '#FCE4F8',
          100: '#F5B8EC',
          200: '#EB7BD9',
          300: '#DC3EC5',
          400: '#C41CA8',
          500: '#A51383',
          600: '#861068',
          700: '#640C4E',
          800: '#430835',
          900: '#22041B',
        },
        'warm-gray': {
          100: '#E8E4E1',
          200: '#DEDAD7',
          300: '#D4D0CD',
          400: '#C6C2BF',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
