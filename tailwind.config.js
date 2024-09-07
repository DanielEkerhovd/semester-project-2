module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html', './**/*.html'],
  theme: {
    fontFamily: {
      title: ['Raleway', 'sans-serif'],
      text: ['Montserrat', 'sans-serif'],
      extra: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        'bg-color': '#FFFCF4',
        'highlight': '#D4A960',
        'text-color': '#000000',
        'text-color-light': '#FFFFFF',
        'input-field': '#E0E0E0',
        'placeholder-text': '#7E7E7E',
        'faded': '#6E6E6E',
        'logo': '#1E1E1E',
        'error': '#C90000',
        'success': '#107A00',
      },
    },
  },
  plugins: [],
}
