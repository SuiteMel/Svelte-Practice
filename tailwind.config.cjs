module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '32px'
    },
    fontFamily: {
      'sans': [
        'Palanquin',
        'sans-serif'
      ],
      'headings': [
        'Nunito',
        'sans-serif'
      ]
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
