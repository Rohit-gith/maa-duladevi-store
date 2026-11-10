/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Premium heritage theme
        // brand = mehendi green, accent = haldi yellow, terra = terracotta/sindoor, gold = gold-foil hairlines
        brand: {
          50: '#f4f6ec', 100: '#e6ecd3', 200: '#cfdaa9', 300: '#b0c277', 400: '#8fa64e',
          500: '#728a35', 600: '#596e29', 700: '#465623', 800: '#3a4620', 900: '#2f391c', 950: '#1a2210',
        },
        accent: { 400: '#f6c445', 500: '#eda91b', 600: '#cc8a0c' },
        gold: { 200: '#f1e2b8', 300: '#e6cd8a', 400: '#d8b462', 500: '#c49a3c', 600: '#a17c2a' },
        terra: {
          50: '#fdf2ec', 100: '#fae0d2', 200: '#f3bfa4', 300: '#e99772', 400: '#dd7550',
          500: '#c85a34', 600: '#a8462a', 700: '#873823', 800: '#6d2f20', 900: '#5a291e',
        },
        ink: '#2b1d14',
        cream: '#fbf4e8',
        paper: '#f6ecd9',
        whatsapp: { 500: '#25d366', 600: '#1ebe5a', 700: '#128c7e', 900: '#075e54' },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      borderRadius: {
        // Temple-arch shape used for photo frames
        arch: '999px 999px 1.75rem 1.75rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(90, 41, 30, 0.25)',
        luxe: '0 30px 60px -20px rgba(26, 34, 16, 0.55)',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        slideIn: { from: { transform: 'translateX(100%)' }, to: { transform: 'translateX(0)' } },
        slideUp: { from: { opacity: 0, transform: 'translateY(16px) scale(0.98)' }, to: { opacity: 1, transform: 'translateY(0) scale(1)' } },
        fadeUp: { from: { opacity: 0, transform: 'translateY(12px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        kenburns: { from: { transform: 'scale(1)' }, to: { transform: 'scale(1.15)' } },
        progress: { from: { width: '0%' }, to: { width: '100%' } },
        pulseRing: { '0%': { transform: 'scale(1)', opacity: 0.6 }, '100%': { transform: 'scale(1.7)', opacity: 0 } },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        kenburns: 'kenburns 18s ease-in-out infinite alternate',
        progress: 'progress linear forwards',
        float: 'float 4s ease-in-out infinite',
        slideIn: 'slideIn 0.3s ease-out',
        slideUp: 'slideUp 0.25s ease-out both',
        fadeUp: 'fadeUp 0.4s ease-out both',
        pulseRing: 'pulseRing 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
}
