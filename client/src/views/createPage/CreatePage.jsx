/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  postPokemon,
  getAllAbilities,
  getAllGames,
  getAllMoves,
  getAllTypes
} from '../../redux/actions'
import { Inputs } from '../../components/Form/Inputs'
import {
  handleSelect,
  initialFormValues,
  inputForm,
  validateForm
} from '../../utils'
import { Loader, Type } from '../../components'
import { Selects } from '../../components/Form/Selects/Selects'
import { useNavigate } from 'react-router-dom'
export const CreatePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedAbility, setSelectedAbility] = useState([])
  const [selectedGames, setSelectedGames] = useState([])
  const [selectedMoves, setSelectedMoves] = useState([])
  const [errors, setErrors] = useState([])
  const [values, setValues] = useState(initialFormValues)
  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }
  const types = useSelector((state) => state.types)
  const abilities = useSelector((state) => state.abilities)
  const games = useSelector((state) => state.games)
  const moves = useSelector((state) => state.moves)
  useEffect(() => {
    dispatch(getAllAbilities())
    dispatch(getAllGames())
    dispatch(getAllMoves())
    dispatch(getAllTypes())
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  const handleSelectAbility = (e) => {
    setSelectedAbility((prevSelected) => handleSelect(prevSelected, e))
  }
  const handleSelectGames = (e) => {
    setSelectedGames((prevSelected) => handleSelect(prevSelected, e))
  }
  const handleSelectMoves = (e) => {
    setSelectedMoves((prevSelected) => handleSelect(prevSelected, e))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm(
      values,
      selectedTypes,
      selectedAbility,
      selectedGames,
      selectedMoves
    )
    if (Object.keys(errors).length > 0) {
      setErrors(errors)
    } else {
      const pokemon = {
        ...values,
        types: selectedTypes,
        abilities: selectedAbility,
        games: selectedGames,
        moves: selectedMoves
      }
      dispatch(postPokemon(pokemon))
      setValues(initialFormValues)
      setSelectedTypes([])
      setSelectedAbility([])
      setSelectedGames([])
      setSelectedMoves([])
      navigate('/')
    }
    setTimeout(() => {
      setErrors({})
    }, 3000)
  }

  return (
    <div className='bg-veryDarkBlue p-3'>
      {loading ? (
        <Loader />
      ) : (
        <div className=''>
          <h2 className='text-4xl text-center mb-4 font-semibold'>
            Create Your Pokemon
          </h2>
          <form onSubmit={handleSubmit} className='p-5 sm:p-10'>
            <div className=' grid gap-4 md:grid-cols-3 mb-5'>
              {inputForm.map((input) => (
                <Inputs
                  key={input.id}
                  label={input.label}
                  type={input.type}
                  name={input.name}
                  value={values[input.name]}
                  handleChange={handleChange}
                  error={errors[input.name]}
                />
              ))}
            </div>
            <div className='grid mb-5'>
              <h4 className='text-2xl grid text-center'>Types: </h4>

              <div className='grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 xl:grid-cols-[repeat(20,auto)] gap-2'>
                {types.map((type) => (
                  <Type
                    key={type.id}
                    name={type.name}
                    selectedTypes={selectedTypes}
                    setSelectedTypes={setSelectedTypes}
                  />
                ))}
              </div>
            </div>
            <div className='grid w-full '>
              <div className='grid  capitalize w-full '>
                <h4 className='text-2xl'>Abilities: </h4>

                <Selects
                  options={abilities.map((ability) => ability.name)}
                  handleSelect={handleSelectAbility}
                />
              </div>
              <div className='grid capitalize'>
                <h4 className='text-2xl'>Games: </h4>
                <Selects
                  options={games.map((game) => game.name)}
                  handleSelect={handleSelectGames}
                />
              </div>
              <div className='grid capitalize'>
                <h4 className='text-2xl'>Moves: </h4>
                <Selects
                  options={moves.map((move) => move.name)}
                  handleSelect={handleSelectMoves}
                />
              </div>
            </div>
            <div className='grid md:flex gap-4 w-full'>
              <button
                type='reset'
                className='bg-red-900 text-white font-bold py-2 px-4 rounded-full md:w-1/2'>
                Reset
              </button>
              <button
                type='submit'
                className='bg-blue text-white font-bold py-2 px-4 rounded-full md:w-1/2'>
                Created
              </button>
            </div>
            {Object.keys(errors).length > 0 ? (
              <div className='grid capitalize w-full bg-red-900 text-white font-bold py-2 px-4 mt-3 rounded-lg'>
                <p>{Object.values(errors).join(' ')}</p>
              </div>
            ) : null}
          </form>
        </div>
      )}
    </div>
  )
}
