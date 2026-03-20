/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        movebg: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-500px -500px' }, // slow diagonal movement
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        movebg: 'movebg 200s linear infinite', // very slow
      },
    },
  },
  plugins: [],
}
