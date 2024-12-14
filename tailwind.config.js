/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and JSX files in the src folder
    "./public/index.html",        // If you use Tailwind classes in your HTML file
  ],
  theme: {
    extend: {
      colors: {
        mango: "#FFC324", // Add your custom mango color
      },
    },
  },
  plugins: [],
};
