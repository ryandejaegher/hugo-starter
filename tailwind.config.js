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
      'neue': '"neue-haas-unica"',
      'aktiv': '"aktiv-grotesk"',
      'kabel': '"neue-kabel"',
      'franklin': '"franklin-gothic-urw"',
      'minion': '"minion-pro"',
      'sofia': '"sofia-pro"'
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
    borderStyle: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
