export default {
  content: [
    './app.vue',
    './components/**/*.{vue,ts,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1f2334',
        'green-primary': '#44c486',
        'green-secondary': '#b2eda1',
        'green-dark': '#004d42',
      
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  safelist: [
    'group-hover:rotate-90',
    'bg-gray-200/70',
    'hover:bg-gray-200/70',
    'transition-transform',
    'transition-colors',
  ],
}
