/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Figtree', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        cyber: {
          cyan: '#00D47E',
          blue: '#00A35C',
          dark: '#000000',
          card: '#0A0B0D',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-mid': 'float 9s ease-in-out infinite',
        'float-fast': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-28px) scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
}
