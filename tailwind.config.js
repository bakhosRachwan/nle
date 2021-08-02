const themeColors = {
  primary: "#ef4f22",
  secondary: "#eaeaea",
  white: "#fff",
  black: "#1f1f1f",
  "dark-grey": "#1b1b1b",
  dark: "#000",
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["DaStreets"],
    },

    extend: {
      screens: {
        sm: "345px",
        "2sm": "560px",
      },

      textColor: themeColors,
      backgroundColor: themeColors,
      borderColor: themeColors,

      spacing: {
        17: "4.25rem",
        75: "19rem",
      },
      gridTemplateRows: {
        header: "minmax(60px,1fr) 2fr 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
