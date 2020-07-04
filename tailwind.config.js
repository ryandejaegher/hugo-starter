module.exports = {
  purge: {
    enabled: false,
    content: ['./themes/my-theme/layouts/**/*.html'],
  },
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
      fontFamily: {
      // 'body': ['Georgia'],
      },
    },
  },
  variants: {},
  plugins: [],
}
