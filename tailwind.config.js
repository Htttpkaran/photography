/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#261F16',     // Dark warm background
        secondary: '#C92A42', // Logo Crimson Red
        ink: '#FFFBF1',       // Cream white for headings
        stone: '#C4B8A8',     // Warm light tan for body text
        line: '#3A3330',      // Subtle dark divider
        accent: '#EBA034',    // Gold from the logo
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'], // Map serif heading calls to Cormorant Garamond
        sans: ['Karla', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      fontSize: {
        xs: ['0.875rem', { lineHeight: '1.25rem' }],   // ~14px (default 12px)
        sm: ['1.05rem', { lineHeight: '1.5rem' }],     // ~17px (default 14px)
        base: ['1.15rem', { lineHeight: '1.75rem' }],   // ~18.5px (default 16px)
        lg: ['1.3rem', { lineHeight: '1.875rem' }],    // ~21px (default 18px)
        xl: ['1.55rem', { lineHeight: '2.25rem' }],    // ~25px (default 20px)
        '2xl': ['1.95rem', { lineHeight: '2.5rem' }],   // ~31px (default 24px)
        '3xl': ['2.4rem', { lineHeight: '2.75rem' }],   // ~38px (default 30px)
        '4xl': ['3.25rem', { lineHeight: '1.1' }],      // ~52px (default 36px)
        '5xl': ['4.75rem', { lineHeight: '1.1' }],      // ~76px (default 48px)
        '8xl': ['7.5rem', { lineHeight: '1' }],         // ~120px (default 96px)
      },
    },
  },
  plugins: [],
}
