import { useState } from 'react'

export const Selects = ({ options, handleSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleRemoveOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((selectedOption) => selectedOption !== option)
    )
    handleSelect(option, false)
  }

  const handleSelectChange = (e) => {
    const option = e.target.value
    setSelectedOptions((prevSelected) => [...prevSelected, option])
    handleSelect(option, true)
  }

  return (
    <div className='grid text-black'>
      <div className=''>
        <select
          onChange={handleSelectChange}
          value=''
          className='w-full rounded-2xl text-lg p-2 mb-2'>
          <option value=''>Select an option</option>
          {options.map((option) => (
            <option
              key={option}
              value={option}
              disabled={selectedOptions.includes(option)}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div
        className='text-white mb-5 grid gap-2
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-[repeat(20,auto)]
      '>
        {selectedOptions.map((option) => (
          <p key={option} className='flex gap-2'>
            {option}{' '}
            <button
              className='rounded-3xl px-2 bg-red-900 '
              onClick={() => handleRemoveOption(option)}>
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  )
}
