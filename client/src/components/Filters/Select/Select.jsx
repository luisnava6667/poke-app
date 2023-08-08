export const Select = ({
  legend,
  value = 'All',
  value1 = 'asc',
  value2 = 'desc',
  handler
}) => {
  return (
    <div className='grid my-2 text-base w-full px-5'>
      <label htmlFor='ml-10'>{legend}</label>
      <select
        onChange={(e) => handler(e)}
        className='text-black capitalize
        p-2 rounded-md bg-white
      '>
        <option value='' disabled>
          -- Selected --
        </option>
        <option value={value}>{value}</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
      </select>
    </div>
  )
}
