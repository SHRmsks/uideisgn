module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx},, './demo.html', './Button/**/*.js'"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      btn_s: "12px",
      btn_m: "14px",
      btn_l: "16px",
    },
    fontWeight: {
      btn_weight: "400",
    },
    height: {
      btn_s: "24px",
      btn_m: "32px",
      btn_l: "40px",
    },
    width: {
      btn_s: "64px",
      btn_m: "88px",
      btn_l: "112px",
    },
    fontFamily: {
      btn: "PingFangSC",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
