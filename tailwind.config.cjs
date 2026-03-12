module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#8B5A00', // Accessible gold for text/controls (WCAG AA on white)
          light: '#B8860B',   // Decorative lighter gold (use for large or decorative elements)
          wash: '#E3C28E'     // Very light gold for accents/shimmer backgrounds
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Times New Roman', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
}
