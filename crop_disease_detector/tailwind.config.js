/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // YE LINES CHECK KARO
        primary: "#2D5A27", 
        secondary: "#F4A460",
        background: "#F9FBF9",
      },
    },
  },
  extend: {
  keyframes: {
    'scan-line': {
      '0%': { top: '0%' },
      '100%': { top: '100%' },
    }
  },
  animation: {
    'scan-line': 'scan-line 2s linear infinite',
  }
},
  plugins: [],
}