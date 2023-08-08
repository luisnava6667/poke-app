import axios from "axios";


export const pokeApi = axios.create({
  baseURL: 'http://localhost:3001/api'
})

