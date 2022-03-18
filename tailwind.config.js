module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": '#0B0D17',
        "blue-light": 'D0D6F9',
        "white": '#FFF',
        "black": '#000',
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        'home-desktop': 'url("./img/home/background-home-desktop.jpg")',
        'destination-desktop': 'url("./img/destination/background-destination-desktop.jpg")',
      },
    },
  },
  plugins: [],
}