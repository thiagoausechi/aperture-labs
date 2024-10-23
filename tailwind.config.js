/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        portal:
          "linear-gradient(90deg, rgba(27,92,182,1) 0%, rgba(92,157,196,1) 33%, rgba(214,154,108,1) 67%, rgba(204,129,58,1) 100%)",
      },
    },
  },
  plugins: [],
};
