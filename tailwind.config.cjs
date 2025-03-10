// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this line to include any file types that might contain Tailwind classes
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
};