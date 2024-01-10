module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700_00: "#ffffff00", A700: "#ffffff" },
        blue: {
          A700_19: "#0a56f119",
          A700: "#0a56f1",
          A700_7f: "#0a56f17f",
          A700_3f: "#0a56f13f",
        },
        gray: { 900: "#121212", "700_3f": "#6565653f", "700_59": "#65656559" },
        blue_gray: { 800: "#36454f" },
        deep_orange: { 300: "#e68f50", "300_19": "#e68f5019" },
      },
      fontFamily: { outfit: "Outfit" },
      boxShadow: {
        bs2: "0px 4px  10px 0px #0a56f13f",
        bs: "0px 4px  10px 0px #6565653f",
        bs3: "0px 8px  10px 0px #6565653f",
        bs1: "0px 4px  10px 0px #65656559",
      },
      backgroundImage: {
        gradient: "linear-gradient(270deg ,#e68f5019,#0a56f119)",
        gradient1: "linear-gradient(90deg ,[object Object])",
        gradient2: "linear-gradient(180deg ,#ffffff,#ffffff00)",
        gradient3: "linear-gradient(270deg ,#ffffff7f,#0a56f17f)",
        gradient4: "linear-gradient(135deg ,#ffffff,#ffffff00)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
