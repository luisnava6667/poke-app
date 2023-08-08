import { AiOutlineSearch } from 'react-icons/ai'
import { getAllPokemons, getNamePokemons } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
export const Search = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
 useEffect(() => {
   dispatch(getAllPokemons())
   
 }, [dispatch])
  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
     if (name.trim() !== '') {
       dispatch(getNamePokemons(name))
     } else {
       dispatch(getAllPokemons()) // Llamar a la acción para obtener todos los Pokémon
     }
     setName('')
  }

  return (
    <div className='flex'>
      <input
        type='text'
        placeholder='Search Pokemon'
        className='bg-transparent border-b-2 border-white text-white text-xl font-bold px-2 h-7'
        value={name}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type='button' onClick={handleSubmit}>
        <AiOutlineSearch size={25} />
      </button>
    </div>
  )
}
