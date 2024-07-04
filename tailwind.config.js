module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontsize: {
      s: "12px",
      m: "14px",
      l: "16px",
    },
    height: {
      s: "24px",
      m: "32px",
      l: "40px",
    },
    width: {
      s: "28px",
      m: "46px",
      l: "64px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
