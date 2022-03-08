module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/common/components/**/*.{js,ts,jsx,tsx}',
    './src/common/elements/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode:'class',
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      serif: ['Inter var', 'serif'],
      mono: ['Fira Code'],
    },
    extend: {},
  },
  plugins: [],
}
