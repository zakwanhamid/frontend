/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['"JetBrains Mono"', 'monospace'], // Add JetBrains Mono font
      },
    },
  },
  plugins: [],
}

