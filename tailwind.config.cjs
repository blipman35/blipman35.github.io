/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'blue-purple-light': 'from-blue-500/20 to-purple-500/20',
        'blue-purple-dark': 'from-blue-500/10 to-purple-500/10',
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'slideIn': 'slideIn 1s ease-in',
        'modalIn': 'modalIn 0.3s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'cursor': 'cursor 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideIn: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        modalIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        cursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded']
    }
  },
  plugins: [],
}

