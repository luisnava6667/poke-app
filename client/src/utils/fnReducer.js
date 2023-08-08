export const sortPokemons = (pokemons, sortOrder, sortBy = 'name') => {
  return pokemons.sort(function (a, b) {
    const valueA = a[sortBy]
    const valueB = b[sortBy]

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      if (sortOrder === 'asc') {
        return valueA.localeCompare(valueB)
      } else {
        return valueB.localeCompare(valueA)
      }
    } else {
      if (sortOrder === 'asc') {
        return valueA - valueB
      } else {
        return valueB - valueA
      }
    }
  })
}
export const filterPokemons = (allPokemons, selectedTypes) => {
  let typeFilter

  if (selectedTypes === 'All') {
    typeFilter = [...allPokemons] // Hacer una copia del arreglo original
  } else if (Array.isArray(selectedTypes)) {
    typeFilter = allPokemons.filter((p) =>
      selectedTypes.every((t) => p?.types?.includes(t))
    )
  } else {
    typeFilter = allPokemons
  }

  return typeFilter
}
export const filterCreated = (allPokemons, filterOption) => {
  if (filterOption === 'created') {
    return allPokemons.filter((p) => p.createDB)
  } else if (filterOption === 'notCreated') {
    return allPokemons.filter((p) => !p.createDB)
  } else {
    return allPokemons
  }
}
