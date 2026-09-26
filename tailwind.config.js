/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        concrete: token('concrete'),
        paper: token('paper'),
        ink: token('ink'),
        slate: token('slate'),
        cobalt: {
          DEFAULT: token('cobalt'),
          dark: token('cobalt-dark'),
        },
      },
    },
  },
  plugins: [],
};
