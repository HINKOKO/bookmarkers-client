/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robot: ['"Roboto"'],
        kanit: ['Kanit', 'sans-serif'],
      },
      backgroundImage: {
        'nav-texture': "url('/seahorse.png')",
      },
      colors: {
        deepblue: 'hsla(234, 100%, 17%, 1)',
        bookBlue: 'hsla(250, 79%, 66%, 1)',
        darkFoot: 'hsla(218, 64%, 9%, 1)',
        hypoViolet: 'hsla(287, 82%, 60%, 1)',
        mainViolet: 'rgb(150, 86, 166)',
        aboutGradientLeft: 'rgb(73, 182, 186)',
        aboutGradientVia: 'rgb(81, 163, 240)',
        aboutGradientRight: 'rgb(171, 81, 240)',
      },
    },
  },
  plugins: [],
};
