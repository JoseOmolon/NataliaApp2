/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC0CB",   // Corrected: colors should be an object
        secondary: "#ADD8E6", // Added secondary correctly within the colors object
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        happy: [
          '"Happy Monkey"',
          '"Poppins"',          // Custom font from Google Fonts
          'system-ui',          // System font fallback
          '-apple-system',      // macOS and iOS
          '"Segoe UI"',         // Windows
          'Roboto',             // Android
          '"Helvetica Neue"',   // macOS pre-installed
          '"Noto Sans"',        // Fallback for internationalization
          '"Liberation Sans"',  // Linux
          'Arial',              // General fallback
          'sans-serif',         // Generic fallback
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}
