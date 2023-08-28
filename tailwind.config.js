/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
      fontFamily: {
        body: [
          "Helvetica Neue",
          "Arial",
        "Hiragino Kaku Gothic ProN",
        "Hiragino Sans",
        "Meiryo",
        "sans-serif"],
    },
      colors: {
        'yellow': '#FFD700',
        'white': "#FFFFFF",
        'bg_yellow': "#FFF8D4",
        'bg_pink': "#FFF1F0",
          /* Khaki */
          'khaki-100': '#fffbed',
          'khaki-200': '#fff5d6',
          'khaki-300': '#fff4d1',
          'khaki-400': '#eceadd',
          'khaki-500': '#fff5cb',
          'khaki-600': '#fff2ca',
          'khaki-700': '#ffe8a2',
          'khaki-800': '#d1ccbf',
          'khaki-900': '#ffe38e',
          'khaki-1000': '#ffcb70',
          'khaki-1100': '#ffc515',
          'khaki-1200': '#fcb900',
        
          /* Gray */
          'gray-100': '#ffffff',
          'gray-200': '#f8fafc',
          'gray-300': '#f8f8f8',
          'gray-400': '#f7f7f7',
          'gray-500': '#f3f4f5',
          'gray-600': '#f1f1f1',
          'gray-700': '#f0f0f0',
          'gray-800': '#eeeeee',
          'gray-900': '#e8e8e8',
          'gray-1000': '#e3e3e3',
          'gray-1100': '#dcdcdc',
          'gray-1200': '#d9d9d9',
          'gray-1300': '#cccccc',
          'gray-1400': '#c9c9c9',
          'gray-1500': '#c3c3c3',
          'gray-1600': '#999999',
          'gray-1700': '#949494',
          'gray-1800': '#737373',
          'gray-1900': '#707070',
          'gray-2000': '#444444',
          'gray-2100': '#32373c',
          'gray-2200': '#363535',
          'gray-2300': '#313131',
          'gray-2400': '#24292d',
          'gray-2500': '#262525',
          'gray-2600': '#1e1f26',
          'gray-2700': '#1e1e1e',
          'gray-2800': '#000000',
        
          /* Blue */
          'blue-100': '#eff9ff',
          'blue-200': '#e7f5fe',
          'blue-300': '#a0c3d9',
          'blue-400': '#8ed1fc',
          'blue-500': '#abb8c3',
          'blue-600': '#a9b8c3',
          'blue-700': '#55acee',
          'blue-800': '#4c9fd3',
          'blue-900': '#4680c2',
          'blue-1000': '#3288d4',
          'blue-1100': '#1da1f2',
          'blue-1200': '#1c7ebc',
          'blue-1300': '#1877f2',
          'blue-1400': '#1778f2',
          'blue-1500': '#1177b8',
          'blue-1600': '#1077b8',
          'blue-1700': '#0478d7',
          'blue-1800': '#225ab7',
          'blue-1900': '#0c6dab',
          'blue-2000': '#0d66c2',
          'blue-2100': '#0461dd',
          'blue-2200': '#0866a0',
          'blue-2300': '#1b568b',
          'blue-2400': '#40464d',
          'blue-2500': '#08578a',
          'blue-2600': '#103d59',
          'blue-2700': '#011835',
        
          /* Orange */
          'orange-100': '#fecda5',
          'orange-200': '#fdd79a',
          'orange-300': '#ff8315',
          'orange-400': '#ff7a17',
          'orange-500': '#ff6900',
          'orange-600': '#ec5b03',
          'orange-700': '#382110',
        
          /* Red */
          'red-100': '#fcf0ef',
          'red-200': '#faaca8',
          'red-300': '#fb6962',
          'red-400': '#ea4434',
          'red-500': '#d23d3d',
          'red-600': '#fe2d2d',
          'red-700': '#cf2e2e',
          'red-800': '#c72d2d',
          'red-900': '#f12323',
          'red-1000': '#d32422',
          'red-1100': '#ff1717',
          'red-1200': '#df1111',
          'red-1300': '#e70401',
          'red-1400': '#ff0000',
        
          /* Vermilion */
          'vermilion-100': '#ff5c0c',
          'vermilion-200': '#ec550a',
          'vermilion-300': '#f45800',
          'vermilion-400': '#ff5600',
          'vermilion-500': '#c24c0b',
          'vermilion-600': '#fe4500',
          'vermilion-700': '#bf4503',
          'vermilion-800': '#d92701',
        
          /* Bluish cyan */
          'bluishCyan-100': '#788b93',
          'bluishCyan-200': '#2aabee',
          'bluishCyan-300': '#3499cd',
          'bluishCyan-400': '#1eb7ea',
          'bluishCyan-500': '#1ea0c3',
          'bluishCyan-600': '#0693e3',
          'bluishCyan-700': '#0177b8',
          'bluishCyan-800': '#004a59',
        
          /* Scarlet red */
          'scarletRed-100': '#f78da7',
          'scarletRed-200': '#e65678',
          'scarletRed-300': '#f6405f',
          'scarletRed-400': '#ef4155',
          'scarletRed-500': '#ff424d',
          'scarletRed-600': '#d23d3e',
          'scarletRed-700': '#e21b24',
          'scarletRed-800': '#e60122',
        
          /* Greenish cyan */
          'greenishCyan-100': '#b6e3d4',
          'greenishCyan-200': '#00d084',
          'greenishCyan-300': '#00d082',
          'greenishCyan-400': '#02e49b',
          'greenishCyan-500': '#02ab6c',
        
          /* Blue violet */
          'blueViolet-100': '#4280ff',
          'blueViolet-200': '#2874fc',
          'blueViolet-300': '#4158d0',
          'blueViolet-400': '#3b5998',
          'blueViolet-500': '#305095',
          'blueViolet-600': '#0757fe',
        
          /* Grass green */
          'grassGreen-100': '#eff7eb',
          'grassGreen-200': '#e9fbe5',
          'grassGreen-300': '#cfe4c4',
          'grassGreen-400': '#3d9c27',
          'grassGreen-500': '#29621c',
        
          /* Scarlet */
          'scarlet-100': '#ffceec',
          'scarlet-200': '#e94c89',
          'scarlet-300': '#cf2e92',
          'scarlet-400': '#ee2c82',
          'scarlet-500': '#f00075',
          'scarlet-600': '#6b003e',
        
          /* Violet */
          'violet-100': '#9896f0',
          'violet-200': '#0000ff',
          'violet-300': '#000099',
          'violet-400': '#020381',
        
          /* Purple violet */
          'purpleViolet-100': '#dad0ec',
          'purpleViolet-200': '#9778d1',
          'purpleViolet-300': '#6440a4',
          'purpleViolet-400': '#4721fb',
        
          /* Bluish green */
          'bluishGreen-100': '#71ce7e',
          'bluishGreen-200': '#67a671',
          'bluishGreen-300': '#1bd760',
        
          /* Cyan */
          'cyan-100': '#4aeadc',
          'cyan-200': '#34e2e4',
          'cyan-300': '#31cdcf',
          'cyan-400': '#33a7b5',
        
          /* Purple */
          'purple-100': '#9b51e0',
          'purple-200': '#330968',
        
          /* Teal */
          'teal-100': '#7bdcb5',
          'teal-200': '#7adcb4',
        
          /* Yellow */
          'yellow-100': '#fafae1',
          'yellow-200': '#fef84c',
          'yellow-300': '#fefc00',
        
          /* Green */
          'green-100': '#336633',
          'green-200': '#006600',
        
          /* Crimson */
          'crimson-100': '#cf2aba',
        
          /* Magenta */
          'magenta-100': '#c751c0',
        
          /* Olive */
          'olive-100': '#caf880',
        
          /* Purple magenta */
          'purpleMagenta-100': '#ab1dfe',
        

      },
    },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require("tailwindcss-responsive-embed"),
  ],

}