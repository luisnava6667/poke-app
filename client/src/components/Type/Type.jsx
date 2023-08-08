
import { useState } from 'react'
import { handleCheckboxChange } from '../../utils/fn'

export const Type = ({ name, selectedTypes, setSelectedTypes }) => {
  const [imageOpacity, setImageOpacity] = useState(1)
  return (
    <div className='grid justify-items-center'>
      <label
        className={`grid  rounded-full h-10 w-10 justify-items-center items-center bg-${name}`}>
        <input
          className='hidden'
          type='checkbox'
          name={name}
          value={name}
          id={name}
          onChange={() =>
            handleCheckboxChange(
              name,
              selectedTypes,
              setSelectedTypes,
              setImageOpacity
            )
          }
        />
        <img
          src={`./type/${name}.svg`}
          alt={name}
          style={{ opacity: imageOpacity }}
          className='h-8 w-8'
        />
      </label>
      <label htmlFor={name} className='capitalize'>
        {name}
      </label>
    </div>
  )
}
