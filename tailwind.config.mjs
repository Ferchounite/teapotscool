import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rice: '#FAF8F5',
        stone: '#F2EFE9',
        'border-subtle': '#E2DDD3',
        'border-strong': '#C9C1B3',
        charcoal: '#1F2421',
        muted: '#4E5650',
        matcha: {
          DEFAULT: '#2D5A27',
          dark: '#21441C',
          soft: '#EAF0E8',
        },
        terracotta: {
          DEFAULT: '#C86D51',
          text: '#9E472D',
          soft: '#F8ECE8',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      typography: ({ theme }) => ({
        tea: {
          css: {
            '--tw-prose-body': theme('colors.charcoal'),
            '--tw-prose-headings': theme('colors.charcoal'),
            '--tw-prose-lead': theme('colors.muted'),
            '--tw-prose-links': theme('colors.matcha.DEFAULT'),
            '--tw-prose-bold': theme('colors.charcoal'),
            '--tw-prose-counters': theme('colors.muted'),
            '--tw-prose-bullets': theme('colors.terracotta.DEFAULT'),
            '--tw-prose-hr': theme('colors.border-subtle'),
            '--tw-prose-quotes': theme('colors.charcoal'),
            '--tw-prose-quote-borders': theme('colors.terracotta.DEFAULT'),
            '--tw-prose-captions': theme('colors.muted'),
            '--tw-prose-code': theme('colors.charcoal'),
            '--tw-prose-pre-code': theme('colors.rice'),
            '--tw-prose-pre-bg': theme('colors.charcoal'),
            '--tw-prose-th-borders': theme('colors.border-subtle'),
            '--tw-prose-td-borders': theme('colors.border-subtle'),
            maxWidth: '72ch',
            lineHeight: '1.75',
            a: {
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: '600',
              '&:hover': {
                color: theme('colors.terracotta.text'),
              },
            },
            'h2, h3, h4': {
              fontFamily: theme('fontFamily.serif').join(', '),
              letterSpacing: '-0.02em',
              scrollMarginTop: '6rem',
            },
            h2: {
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            table: {
              fontSize: '0.925rem',
            },
            th: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              backgroundColor: theme('colors.stone'),
              padding: '0.75rem 1rem',
            },
            td: {
              padding: '0.75rem 1rem',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
