// tailwind.config.ts
export default {
  content: [
    './app.vue',
    './components/**/*.{vue,ts,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'group-hover:rotate-90',
    'bg-gray-200/70',
    'hover:bg-gray-200/70',
    'transition-transform',
    'transition-colors',
  ],
}
