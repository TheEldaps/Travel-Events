/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["var(--font-dm-sans)", "sans-serif"],
        dmserif: ["var(--font-dm-serif)", "sans-serif"],
      },
    },
    safelist: ["sm:rotate-[-5deg]", "sm:rotate-[5deg]", "sm:rotate-[0deg]"],
    plugins: [],
  }
}
