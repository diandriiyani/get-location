/** @type {import('tailwindcss').Config} */
export default {
    content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue"],
    theme: {
      extend: {},
      container: {
        center: true,
        screens: {
          sm: "600px",
        },
      },
      screens: {
        sm: "768px",
        lg: "1024px",
      },
    },
    //#202020 is black 200
  };
  