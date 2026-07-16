/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(15, 23, 42, 0.08), 0 8px 24px -8px rgba(15, 23, 42, 0.10)',
        card: '0 1px 2px rgba(15,23,42,0.04), 0 12px 32px -12px rgba(15,23,42,0.12)',
        glow: '0 0 0 1px rgba(109,40,217,0.10), 0 20px 60px -20px rgba(109,40,217,0.35)',
        'glow-lg': '0 30px 80px -20px rgba(109,40,217,0.45)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.75rem',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
        'radial-brand':
          'radial-gradient(60% 60% at 50% 0%, rgba(109,40,217,0.18) 0%, rgba(109,40,217,0) 70%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.2)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
      },
    },
  },
  plugins: [],
};
