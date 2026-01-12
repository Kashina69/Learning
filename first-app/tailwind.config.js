/** @type {import('tailwindcss').Config} */
module.exports = {
  // Paths to all files that contain NativeWind classNames
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};