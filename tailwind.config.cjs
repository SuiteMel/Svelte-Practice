module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '32px'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
