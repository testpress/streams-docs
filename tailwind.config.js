/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Your React components
    "./docs/**/*.{md,mdx}",        // Docusaurus docs
    "./blog/**/*.{md,mdx}",        // Blog pages
    "./pages/**/*.{js,jsx,ts,tsx}" // Any custom pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
