/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ttblue: {
          50: '#f2f8ff',
          100: '#e6f0ff',
          200: '#bfe0ff',
          300: '#99d1ff',
          400: '#66b8ff',
          500: '#2f98ff',
          600: '#1f7be6',
          700: '#1659b3',
          800: '#0f3b80',
          900: '#081e40'
        },
        ttgray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#0f1724'
        },
        accent: {
          DEFAULT: '#F8F9FA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
