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
        'home-desktop': 'url("./public/img/home/background-home-desktop.jpg")',
        'destination-desktop': 'url("./public/img/destination/background-destination-desktop.jpg")',
        'crew-desktop': 'url("./public/img/crew/background-crew-desktop.jpg")',
        'technology-desktop': 'url("./public/img/technology/background-technology-desktop.jpg")',
      },
    },
  },
  plugins: [],
}