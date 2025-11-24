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
        dmsans: ["var(--font-dm-sans)", "Helvetica"],
        dmserif: ["var(--font-dm-serif)", "Roboto"],
        nunitosans: ["var(--font-nunito)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
    },
    safelist: ["md:rotate-[-5deg]", "md:rotate-[5deg]", "md:rotate-[0deg]"],
    plugins: [],
  }
}
