module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./src/assets/login.png')",
        register: "url('./src/assets/register.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
      },
      backgroundPosition: {
        bottom: "bottom",
        center: "center",
        loginX: "-31.25rem",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
