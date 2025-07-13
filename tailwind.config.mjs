/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },
        gray: {
          700: '#1F2937', // Darker grey, equivalent to Tailwind's default gray-800
          800: '#111827', // Optional: align with gray-900
          900: '#0F172A'  // Optional: even darker shade
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(var(--tw-prose-body))',
            a: {
              color: 'rgb(var(--tw-prose-links))',
              textDecoration: 'underline',
              fontWeight: '500'
            },
            'a:hover': {
              color: 'rgb(var(--tw-prose-links-hover))'
            },
            strong: {
              color: 'rgb(var(--tw-prose-bold))',
              fontWeight: '600'
            },
            'ol > li::marker': {
              color: 'rgb(var(--tw-prose-counters))'
            },
            'ul > li::marker': {
              color: 'rgb(var(--tw-prose-bullets))'
            },
            hr: {
              borderColor: 'rgb(var(--tw-prose-hr))',
              borderTopWidth: 1
            },
            blockquote: {
              fontWeight: '400',
              fontStyle: 'italic',
              color: 'rgb(var(--tw-prose-quotes))',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'rgb(var(--tw-prose-quote-borders))'
            },
            h1: {
              color: 'rgb(var(--tw-prose-headings))',
              fontWeight: '700',
              fontSize: '2.25rem'
            },
            h2: {
              color: 'rgb(var(--tw-prose-headings))',
              fontWeight: '600',
              fontSize: '1.875rem'
            },
            h3: {
              color: 'rgb(var(--tw-prose-headings))',
              fontWeight: '600',
              fontSize: '1.5rem'
            },
            h4: {
              color: 'rgb(var(--tw-prose-headings))',
              fontWeight: '600',
              fontSize: '1.25rem'
            },
            code: {
              color: 'rgb(var(--tw-prose-code))',
              fontWeight: '600',
              fontSize: '0.875rem'
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            pre: {
              color: 'rgb(var(--tw-prose-pre-code))',
              backgroundColor: 'rgb(var(--tw-prose-pre-bg))',
              fontSize: '0.875rem',
              fontWeight: '400',
              lineHeight: '1.7142857',
              borderRadius: '0.5rem'
            }
          }
        },
        invert: {
          css: {
            '--tw-prose-body': '203 213 225',
            '--tw-prose-headings': '248 250 252',
            '--tw-prose-lead': '156 163 175',
            '--tw-prose-links': '96 165 250',
            '--tw-prose-bold': '248 250 252',
            '--tw-prose-counters': '156 163 175',
            '--tw-prose-bullets': '75 85 99',
            '--tw-prose-hr': '55 65 81',
            '--tw-prose-quotes': '156 163 175',
            '--tw-prose-quote-borders': '55 65 81',
            '--tw-prose-captions': '156 163 175',
            '--tw-prose-code': '248 250 252',
            '--tw-prose-pre-code': '203 213 225',
            '--tw-prose-pre-bg': '15 23 42',
            '--tw-prose-th-borders': '55 65 81',
            '--tw-prose-td-borders': '31 41 55'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}