/* eslint-disable no-case-declarations */
import { filterCreated, filterPokemons, sortPokemons } from '../../utils'

const initialState = {
  pokemons: [],
  allPokemons: [],
  detail: [],
  types: [],
  abilities: [],
  games: [],
  moves: []
}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALLPOKEMONS':
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload
      }
    case 'GET_DETAIL':
      return {
        ...state,
        detail: action.payload
      }
    case 'GET_ALLTYPES':
      return {
        ...state,
        types: action.payload
      }
    case 'GET_ALLABILITIES':
      return {
        ...state,
        abilities: action.payload
      }
    case 'GET_ALLGAMES':
      return {
        ...state,
        games: action.payload
      }
    case 'GET_ALLMOVES':
      return {
        ...state,
        moves: action.payload
      }
    case 'FILTER_BY_TYPE':
      const filterType = filterPokemons(state.allPokemons, action.payload)
      return {
        ...state,
        pokemons: filterType
      }
    case 'FILTER_CREATED':
      const createdFilter = filterCreated(state.allPokemons, action.payload)
      return {
        ...state,
        pokemons: action.payload === 'All' ? state.allPokemons : createdFilter
      }
    case 'ORDER_BY_NAME':
      let orderByName = sortPokemons(state.pokemons, action.payload, 'name')
      return {
        ...state,
        pokemons: orderByName
      }
    case 'ORDER_BY_ID':
      const orderById = sortPokemons(state.pokemons, action.payload, 'id')
      return {
        ...state,
        pokemons: orderById
      }
    case 'CREATE_POKEMON':
      return {
        ...state
      }
    case 'ORDER_BY_ATTACK':
      const orderByAttack = sortPokemons(
        state.pokemons,
        action.payload,
        'attack'
      )
      return {
        ...state,
        pokemons: orderByAttack
      }
    case 'ORDER_BY_DEFENSE':
      const orderByDefense = sortPokemons(
        state.pokemons,
        action.payload,
        'defense'
      )
      return {
        ...state,
        pokemons: orderByDefense
      }
    case 'GET_NAMEPOKEMONS':
      return {
        ...state,
        pokemons: action.payload
      }
    default:
      return state
  }
}
export default rootReducer
