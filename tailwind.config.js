const colors = require('tailwindcss/colors');
const { borderRadius } = require('tailwindcss/defaultTheme');

module.exports = {
    // purge: {
    //   content: ['./themes/my-theme/layouts/**/*.html'],
    //   options: {
    //     whitelist: ['font-mono', 'font-sans','font-serif','font-neue', 'font-minion', 'max-w-lg'],
    //     //whitelistPatterns: [/^text/,/^bg/,/border/,],
    //   }
    // },
    // purge: {
    //     // enabled: true,
    //     content: ['./themes/my-themes/layouts/**/*.html', './content/**/*.md']
    // },
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem'
            }
        },
        extend: {
            typography: theme => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.main-text'),
                        h2: {
                            color: theme('colors.main-text')
                        },
                        h3: {
                            color: theme('colors.main-text')
                        },
                        code: {
                            color: theme('colors.main-text')
                        },
                        strong: {
                            color: theme('colors.main-text')
                        },
                        a: {
                            color: theme('colors.main-text')
                        },
                        blockquote: {
                            color: theme('colors.main-text')
                        },
                        'code::before': false,
                        'code::after': false,
                        code: {
                            background: theme('colors.gray.200'),
                            padding: theme('spacing.1'),
                            borderRadius: theme('borderRadius.lg')
                        }
                    }
                }
            }),
            spacing: {
                '16/9': '56.25%',
                '1/1': '100%',
                '3/2': '66.7%',
                '4/3': '75%',
                '9/16': '177.78%',
                '2/3': '150%'
            },
            colors: {
                primary: 'var(--primary)',
                'primary-bg': 'var(--primary-bg)',
                'secondary-text': 'var(--secondary)',
                'main-text': 'var(--text-main)',
                'secondary-text': 'var(--text-secondary)',
                test: colors.indigo,
                primary: {
                    100: 'var(--primary-100)',
                    200: 'var(--primary-200)',
                    300: 'var(--primary-300)',
                    400: 'var(--primary-400)',
                    500: 'var(--primary-500)',
                    600: 'var(--primary-600)',
                    700: 'var(--primary-700)',
                    800: 'var(--primary-800)',
                    900: 'var(--primary-900)',
                    themeText: 'red'
                },
                secondary: {
                    100: 'var(--secondary-100)',
                    200: 'var(--secondary-200)',
                    300: 'var(--secondary-300)',
                    400: 'var(--secondary-400)',
                    500: 'var(--secondary-500)',
                    600: 'var(--secondary-600)',
                    700: 'var(--secondary-700)',
                    800: 'var(--secondary-800)',
                    900: 'var(--secondary-900)'
                }
            },
            fontFamily: {
                neue: '"neue-haas-unica"',
                aktiv: '"aktiv-grotesk"',
                kabel: '"neue-kabel"',
                franklin: '"franklin-gothic-urw"',
                minion: '"minion-pro"',
                sofia: '"sofia-pro"'
            }
        }
    },
    variants: {
        borderWidth: ['responsive', 'hover', 'focus'],
        borderStyle: ['responsive', 'hover', 'focus'],
        borderColor: ['responsive', 'hover', 'focus']
    },
    plugins: [require('@tailwindcss/typography')]
};
