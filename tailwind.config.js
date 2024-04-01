import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      serif: ["Ubuntu", "sans-serif"],
      body: ["Ubuntu", "sans-serif"],
      primary: ["Ubuntu", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#FF5F6D",
      },
      // fontFamily: {
      //   primary: ["Ubuntu", "sans-serif"]
      // }
    }
  },
  plugins: [],
})