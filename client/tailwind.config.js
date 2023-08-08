/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // pokemons
        normal: '#aaa67f',
        fighting: '#c12239',
        flying: '#a891ec',
        poison: '#a43e9e',
        ground: '#dec16b',
        bug: '#a7b723',
        ghost: '#70559b',
        steal: '#b7b9d0',
        rock: '#b69e31',
        fire: '#f57d31',
        water: '#6493eb',
        grass: '#74cb48',
        electric: '#f9cf30',
        psychic: '#fb5584',
        ice: '#9ad6df',
        dragon: '#7037ff',
        dark: '#75574c',
        fairy: '#e69eac',
        unknown: '#68a090',
        shadow: '#707070',
        steel: '#b7b9d0',
        blue: 'hsl(246, 80%, 60%)',
        redLight: 'hsl(15, 100%, 70%)',
        bluePlay: 'hsl(195, 74%, 62%)',
        redStudy: 'hsl(348, 100%, 68%)',
        limeGreenExercise: 'hsl(145, 58%, 55%)',
        violetSocial: 'hsl(264, 64%, 52%)',
        softOrangeSelfCare: 'hsl(43, 84%, 65%)',
        veryDarkBlue: 'hsl(226, 43%, 10%)',
        darkBlue: 'hsl(235, 46%, 20%)',
        desaturatedBlue: 'hsl(235, 45%, 61%)',
        paleBlue: 'hsl(236, 100%, 87%)',
        palerBlue: 'hsl(238, 36%, 60%)'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
}
