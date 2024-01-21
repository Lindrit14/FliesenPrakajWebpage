/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#313638",
      white: "#ffffff",
      concord: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#7d7d7d",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#262626",
      },
      coral: {
        50: "#fef4ee",
        100: "#fee6d6",
        200: "#fbc9ad",
        300: "#f8a379",
        400: "#f57a4d",
        500: "#f14e1e",
        600: "#e23414",
        700: "#bc2512",
        800: "#951f17",
        900: "#781d16",
        950: "#410b09",
      },
      pearl: {
        50: "#f2f6fd",
        100: "#e5ecf9",
        200: "#c4d7f3",
        300: "#90b6e9",
        400: "#5590db",
        500: "#2f72c8",
        600: "#2058a9",
        700: "#1b4689",
        800: "#1a3d72",
        900: "#1b355f",
        950: "#091120",
      },
      wood: {
        50: "#faf6f0",
        100: "#f5ede0",
        200: "#e9d7bf",
        300: "#dbbc96",
        400: "#cb9b6c",
        500: "#c0824f",
        600: "#b36f43",
        700: "#955839",
        800: "#784834",
        900: "#623c2d",
        950: "#341e16",
      },
      concrete: {
        50: "#f8f8f8",
        100: "#f2f2f2",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
        950: "#292929",
      },
      olive: {
        50: "#f2f6ef",
        100: "#e3ebdc",
        200: "#c9d9bd",
        300: "#a7c195",
        400: "#87a972",
        500: "#698c54",
        600: "#516f41",
        700: "#405635",
        800: "#36462e",
        900: "#303d2a",
        950: "#172013",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
