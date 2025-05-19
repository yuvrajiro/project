/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        electric: '#007BFF',
        neon: '#00FF9F',
        slate: '#8892B0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        DEFAULT: "0.75rem", // ✅ Moderate, not extreme rounding
        lg: "1rem",
        xl: "1.5rem",
        '2xl': "2rem",
        full: "9999px",
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
