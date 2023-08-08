export const validateForm = (
  values,
  selectedTypes,
  selectedAbility,
  selectedGames,
  selectedMoves
) => {
  console.log(selectedTypes)
  console.log(selectedAbility)
  const errors = {}
  if (!values.name) {
    errors.name = 'Name is required.'
  }
  if (!values.hp) {
    errors.hp = 'Hp is required.'
  }
  if (!values.attack) {
    errors.attack = 'Attack is required.'
  }
  if (!values.defense) {
    errors.defense = 'Defense is required.'
  }
  if (!values.speed) {
    errors.speed = 'Speed is required.'
  }
  if (!values.height) {
    errors.height = 'Height is required.'
  }
  if (!values.weight) {
    errors.weight = 'Weight is required.'
  }
  if (!values.image) {
    errors.image = 'Image is required.'
  }
  if (!values.description) {
    errors.description = 'Description is required.'
  }
  if (!values.special_attack) {
    errors.special_attack = 'Special Attack is required.'
  }
  if (!values.special_defense) {
    errors.special_defense = 'Special Defense is required.'
  }
  if (selectedTypes.length === 0) {
    errors.types = 'Types is required.'
  }
  if (selectedAbility.length === 0) {
    errors.abilities = 'Abilities is required.'
  }
  if (selectedGames.length === 0) {
    errors.games = 'Games is required.'
  }
  if (selectedMoves.length === 0) {
    errors.moves = 'Moves is required.'
  }
  return errors
}
