export const Inputs = ({
  
  label,
  type = 'text',
  name,
  value,
  handleChange
}) => {
  return (
    <div className='grid '>
      <label htmlFor={name} className={``}>
        {label}: {type === 'range' && <span>{value}</span>}
      
      </label>
      <input
        id={name}
        type={type}
        className={`${
          type === 'text' &&
          'bg-transparent border-b-2 border-white text-white w-full text-xl font-bold px-2'
        }`}
        {...(type === 'range' ? { min: 0, max: 100 } : null)}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
