module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'tall': { 'raw': '(min-height: 900px)' }
    },
    extend: {
      colors: {
        'main': '#111827',
        'secondary': '#1B2533',
        'grad-start': '#1e88e5',
        'grad-end': '#00bcd4',
        'imp-text': '#2196f3',
        'imp-text-2': '#26c6da',
        'text-normal': '#bdbdbd'
      }
    }
  },
  plugins: [require("daisyui")],
}