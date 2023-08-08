/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterCreated,
  filterPokemonsByType,
  getAllTypes,
  orderById,
  orderByAttack,
  orderByDefense,
  orderByName
} from '../../redux/actions'
import { Select } from './Select/Select'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { Type } from '../Type/Type'
export const Filters = ({ setCurrentPage }) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState([])

  const types = useSelector((state) => state.types)
  useEffect(() => {
    dispatch(getAllTypes())
  }, [dispatch])
  useEffect(() => {
    if (selectedTypes.length === 0 || selectedTypes.includes('all')) {
      dispatch(filterPokemonsByType('all'))
    } else {
      dispatch(filterPokemonsByType(selectedTypes))
    }
  }, [dispatch, selectedTypes])
  const [orden, setOrden] = useState('')
  const clearFilters = () => {
    selectedTypes.length = 0
    dispatch(filterPokemonsByType('all'))
    dispatch(filterCreated('all'))
    dispatch(orderByName('all'))
    dispatch(orderById('all'))
    setCurrentPage(1)
  }
  const handleFilterCreate = (e) => {
    dispatch(filterCreated(e.target.value))
  }
  const handleFilterByName = (e) => {
    e.preventDefault()
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }
  const handleFilterId = (e) => {
    e.preventDefault()
    dispatch(orderById(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }
  const handleFilterByAttack = (e) => {
    e.preventDefault()
    dispatch(orderByAttack(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }
  const handleFilterByDefense = (e) => {
    e.preventDefault()
    dispatch(orderByDefense(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }

  return (
    <div className=''>
      <div className='flex items-center place-content-center'>
        <h2>Filters</h2>
        {visible ? (
          <MdKeyboardArrowUp
            className='icon'
            size={30}
            onClick={() => setVisible(!visible)}
          />
        ) : (
          <MdKeyboardArrowDown
            className='icon'
            size={30}
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
      {visible ? (
        <div className=''>
          <div
            className='grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 xl:grid-cols-[repeat(20,auto)] gap-2
          '>
            {types.map((type) => (
              <Type
                key={type.id}
                name={type.name}
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
              />
            ))}
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5'>
            <Select legend={'Order by Name'} handler={handleFilterByName} />
            <Select legend={'Order by Id'} handler={handleFilterId} />
            <Select
              legend={'Create or API'}
              value1='create'
              value2='api'
              handler={handleFilterCreate}
            />
            <Select legend={'Order by Attack'} handler={handleFilterByAttack} />
            <Select
              legend={'Order by Defense'}
              handler={handleFilterByDefense}
            />
            {/* <button className='' onClick={clearFilters}>
              Clean Filters
            </button> */}
          </div>
        </div>
      ) : null}
    </div>
  )
}
