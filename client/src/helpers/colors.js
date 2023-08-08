export const getTypeColor = (type) => {
  let color = ''
  switch (type) {
    case 'normal':
      color = 'bg-normal'
      break
    case 'fighting':
      color = 'bg-fighting'
      break
    case 'flying':
      color = 'bg-flying'
      break
    case 'poison':
      color = 'bg-poison'
      break
    case 'ground':
      color = 'bg-ground'
      break
    case 'bug':
      color = 'bg-bug'
      break
    case 'ghost':
      color = 'bg-ghost'
      break
    case 'steal':
      color = 'bg-steal'
      break
    case 'rock':
      color = 'bg-rock'
      break
    case 'fire':
      color = 'bg-fire'
      break
    case 'water':
      color = 'bg-water'
      break
    case 'grass':
      color = 'bg-grass'
      break
    case 'electric':
      color = 'bg-electric'
      break
    case 'psychic':
      color = 'bg-psychic'
      break
    case 'ice':
      color = 'bg-ice'
      break
    case 'dragon':
      color = 'bg-dragon'
      break
    case 'dark':
      color = 'bg-dark'
      break
    case 'fairy':
      color = 'bg-fairy'
      break
    case 'unknown':
      color = 'bg-unknown'
      break
    case 'shadow':
      color = 'bg-shadow'
      break
    case 'steel':
      color = 'bg-steel'
      break
    default:
      color = 'bg-normal'
  }
  return color
}
