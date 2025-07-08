/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Elegant Color Palette
        'ivory': '#FEFCF8',
        'warm-beige': '#F5F0E8',
        'dusty-pink': '#E8D5D5',
        'wood-brown': '#8B6F47',
        'ceramic-taupe': '#B8A898',
        
        // Dark Mode - Sunset Tones
        'sunset-brown': '#6B4E3D',
        'sunset-pink': '#D4A574',
        'sunset-warm': '#8B5A3C',
        
        // Accent colors
        'pearl-white': '#FCFAF7',
        'soft-gold': '#D4AF37',
        'misty-gray': '#E5E0DB',
        
        // Primary palette with gradients
        primary: {
          50: '#FEFCF8',
          100: '#F5F0E8',
          200: '#E8D5D5',
          300: '#D4C4B8',
          400: '#B8A898',
          500: '#8B6F47',
          600: '#6B5537',
          700: '#4B3E2A',
          800: '#2F2720',
          900: '#1A1815',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'handwritten': ['Dancing Script', 'cursive'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'tilt': 'tilt 0.3s ease-out',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.5', filter: 'brightness(1)' },
          '100%': { opacity: '1', filter: 'brightness(1.1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'bounce-soft': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.1)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'elegant': '0 4px 20px 0 rgba(139, 111, 71, 0.15)',
        'elegant-hover': '0 8px 25px 0 rgba(139, 111, 71, 0.25)',
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.5)',
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #FEFCF8 0%, #F5F0E8 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #6B4E3D 0%, #D4A574 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)',
        'gradient-pearl': 'linear-gradient(135deg, #FCFAF7 0%, #E8D5D5 50%, #B8A898 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'elegant': '20px',
        'soft': '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 