import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand: saffron / orange + warm whites
        saffron: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        cream: '#FFFBF5',
        ink: '#1F1410',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(234, 88, 12, 0.25)',
        glow: '0 0 0 1px rgba(234,88,12,0.1), 0 20px 50px -20px rgba(234,88,12,0.35)',
      },
      backgroundImage: {
        'saffron-radial': 'radial-gradient(1200px 600px at 50% -10%, #FFEDD5 0%, #FFFBF5 55%, #FFFFFF 100%)',
        'saffron-gradient': 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #C2410C 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
