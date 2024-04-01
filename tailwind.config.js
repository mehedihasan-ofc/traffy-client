import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5F6D",
      },
      fontFamily: {
        primary: ["Ubuntu", "sans-serif"]
      }
    }
  },
  plugins: [],
})