
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-purple': '#1a0033',
        'night-blue': '#0d001a',
        'glow-cyan': 'hsl(180, 100%, 50%)',
        'bright-red': '#ff004d',
        'light-gray-text': '#b0b0ff',
        'grad-pink': '#c026d3',
        'grad-violet': '#7b2cbf',
        'neon-blue': 'hsl(200, 100%, 50%)',
        'neon-pink': 'hsl(320, 100%, 50%)',
        'dark-purple-shadow': 'rgba(26, 0, 51, 0.5)',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        'exo-2': ['"Exo 2"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-2%)' },
          '50%': { transform: 'translateY(2%)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'draw-line': 'draw-line 1s ease-out 0.5s forwards',
      },
      boxShadow: {
        'glow-cyan': '0 0 15px 0px hsl(180, 100%, 50%)',
        'glow-cyan-light': '0 0 8px 0px hsla(180, 100%, 50%, 0.7)',
        'glow-pink': '0 0 15px 0px hsl(320, 100%, 50%)',
        'glow-button': '0 0 25px 0px #c026d3',
      },
      dropShadow: {
        'long-soft-purple': '0 50px 30px rgba(13, 0, 26, 0.4)',
        'neon-cyan': '0 0 10px hsla(180, 100%, 60%, 0.9)',
        'neon-pink': '0 0 10px hsla(320, 100%, 60%, 0.9)',
        'neon-gold': '0 0 10px hsla(50, 100%, 50%, 0.8)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
