module.exports = {
  // purge: {
  //   content: ['./themes/my-theme/layouts/**/*.html'],
  //   options: {
  //     whitelist: ['font-mono', 'font-sans','font-serif','font-neue', 'font-minion', 'max-w-lg'],
  //     //whitelistPatterns: [/^text/,/^bg/,/border/,],
  //   }
  // },
  theme: {
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.main-text'),
          h2: {
            color: theme('colors.main-text'),
          },
          h3: {
            color: theme('colors.main-text'),
          },
          code: {
            color: theme('colors.main-text'),
          },
          strong: {
            color: theme('colors.main-text')
          },
          a: {
            color: theme('colors.main-text')
          },
          blockquote: {
            color: theme('colors.main-text')
          }
        }
      }
    }),
    container: {
      padding: {
        default: "1rem"
      },
    },
    extend: {
      spacing: {
        "16/9": "56.25%",
        "1/1": "100%",
        "3/2": "66.7%"
      },
      colors: {
        'primary': 'var(--primary)',
        'primary-bg': 'var(--primary-bg)',
        'secondary-text': 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
        primary: {
          '100': 'var(--primary-100)',
          '200': 'var(--primary-200)',
          '300': 'var(--primary-300)',
          '400': 'var(--primary-400)',
          '500': 'var(--primary-500)',
          '600': 'var(--primary-600)',
          '700': 'var(--primary-700)',
          '800': 'var(--primary-800)',
          '900': 'var(--primary-900)',
          'themeText': 'red',
        },
        secondary: {
          '100': 'var(--secondary-100)',
          '200': 'var(--secondary-200)',
          '300': 'var(--secondary-300)',
          '400': 'var(--secondary-400)',
          '500': 'var(--secondary-500)',
          '600': 'var(--secondary-600)',
          '700': 'var(--secondary-700)',
          '800': 'var(--secondary-800)',
          '900': 'var(--secondary-900)',
        }
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
  experimental: {
extendedFontSizeScale:true,
extendedSpacingScale:true,
uniformColorPalette:true
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
