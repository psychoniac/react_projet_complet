/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        myfont: ["my-font-badG", "sans-serif"],
        myfontVariant: ["my-font-28", "sans-serif"]
      }
    },
  },
  plugins: [],
};
