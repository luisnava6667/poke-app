/* eslint-disable no-unused-vars */
// import { Loader, Cards, Footer, NavBar, Filters } from '../../components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getAllTypes } from '../../redux/actions'

import { Filters, Loader, Paginado, Cards } from '../../components'
export const HomePage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const { allPokemons } = useSelector((state) => ({
    allPokemons: state.pokemons
  }))
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
  const indexOfLastCharacter = currentPage * pokemonsPerPage
  const indexOfFirstCharacter = indexOfLastCharacter - pokemonsPerPage
  const currentPokemons = allPokemons.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  )
  const paginado = (pageNumber) => setCurrentPage(pageNumber)
  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getAllTypes())
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [dispatch])
  return (
    <div className='bg-veryDarkBlue '>
      {loading ? (
        <Loader />
      ) : (
        <div className='grid'>
          <h2 className='text-4xl text-center mb-4 font-semibold'>Pokedex</h2>
          <Filters setCurrentPage={setCurrentPage} />
          <Paginado
            charactersPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
          />
          <div className='p-5 gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 '>
            {currentPokemons?.map((pokemon, i) => (
              <Cards key={i} pokemon={pokemon} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
