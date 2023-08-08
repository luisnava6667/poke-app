export const handleCheckboxChange = (
  typeName,
  selectedTypes,
  setSelectedTypes,
  setImageOpacity
) => {
  if (selectedTypes.includes(typeName)) {
    setSelectedTypes(selectedTypes.filter((type) => type !== typeName))
    setImageOpacity(1)
  } else {
    setSelectedTypes([...selectedTypes, typeName])
    setImageOpacity(0.5)
  }
}
export const handleSelect = (state, option) => {
  if (state.includes(option)) {
    return state.filter((item) => item !== option)
  } else {
    return [...state, option]
  }
}
