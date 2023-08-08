/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Loader } from '../../components'
import { getAllAbilities } from '../../redux/actions'
export const AbilityPage = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const abilities = useSelector((state) => state.abilities)

  useEffect(() => {
    dispatch(getAllAbilities())
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  const [searchText, setSearchText] = useState('')
  const handleInputChange = (event) => {
    const searchText = event.target.value
    setSearchText(searchText)
  }
  const filteredAbilities = abilities.filter((ability) =>
    ability.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className='bg-veryDarkBlue '>
      {loading ? (
        <Loader />
      ) : (
        <div className='p-5'>
          <h3 className='text-4xl text-center mb-5 font-bold'>Abilities</h3>
          <div className='text-center mb-5'>
            <input
              type='text'
              className='bg-transparent border-b-2 border-white text-white  text-xl font-bold w-1/2 px-2'
              placeholder='Search...'
              value={searchText}
              onChange={handleInputChange}
            />
          </div>
          <div className='p-2 grid gap-5 '>
            {filteredAbilities.map((ability) => (
              <div className='p-2 mb-1 bg-blue rounded-3xl' key={ability.id}>
                <p className='capitalize text-center text-xl font-bold'>
                  {ability.name}:
                </p>
                <p className=''>{ability.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
