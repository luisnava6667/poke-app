
import { pokeApi } from '../../config/pokeApi'

export function getAllPokemons() {
  return async function (dispatch) {
    const { data } = await pokeApi.get('/pokemons')
    return dispatch({
      type: 'GET_ALLPOKEMONS',
      payload: data
    })
  }
}
export function getAllTypes() {
  return async function (dispatch) {
    const { data } = await pokeApi.get('/types')
    return dispatch({
      type: 'GET_ALLTYPES',
      payload: data
    })
  }
}
export function getAllAbilities() {
  return async function (dispatch) {
    const { data } = await pokeApi.get('/ability')

    return dispatch({
      type: 'GET_ALLABILITIES',
      payload: data
    })
  }
}
export function getAllGames() {
  return async function (dispatch) {
    const { data } = await pokeApi.get('/games')
    return dispatch({
      type: 'GET_ALLGAMES',
      payload: data
    })
  }
}
export function getAllMoves() {
  return async function (dispatch) {
    const { data } = await pokeApi.get('/moves')
    console.log(data)
    return dispatch({
      type: 'GET_ALLMOVES',
      payload: data
    })
  }
}
export function getDetail(id) {
  return async function (dispatch) {
    const { data } = await pokeApi.get(`/pokemons/${id}`)
    return dispatch({
      type: 'GET_DETAIL',
      payload: data
    })
  }
}
export function postPokemon(payload) {
  return async function () {
    const { data } = await pokeApi.post('/pokemons', payload)
    return data
  }
}
export function filterPokemonsByType(payload) {
  return {
    type: 'FILTER_BY_TYPE',
    payload
  }
}
export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload
  }
}
export function orderByName(payload) {
  return {
    type: 'ORDER_BY_NAME',
    payload
  }
}
export function orderById(payload) {
  return {
    type: 'ORDER_BY_ID',
    payload
  }
}
export function orderByAttack(payload) {
  return {
    type: 'ORDER_BY_ATTACK',
    payload
  }
}
export function orderByDefense(payload) {
  return {
    type: 'ORDER_BY_DEFENSE',
    payload
  }
}
export function getNamePokemons(name) {
  return async function (dispatch) {
    const { data } = await pokeApi.get(`/pokemons?name=${name}`
    )
    return dispatch({
      type: 'GET_NAMEPOKEMONS',
      payload: data
    })
  }
}
