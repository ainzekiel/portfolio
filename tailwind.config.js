/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#121212',
        emeraldAccent: '#2D6A4F',
        forestAccent: '#1B4332',
        textPrimary: '#E0E0E0',
        textMuted: '#A0AAB2',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(45, 106, 79, 0.35), 0 20px 60px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(160,170,178,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(160,170,178,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'hero-grid': '44px 44px',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};