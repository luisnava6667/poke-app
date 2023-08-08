export const TypeDescription = ({ title, types }) => {
  return (
    <div className=''>
      <h4 className='text-xl'></h4>
      <div className='text-lg mb-2'>
        <p className=''>{title}:</p>
        {types.length > 0 ? (
          <div className={`grid `}>
            <p>{types.join(', ')}</p>
          </div>
        ) : (
          <p>unknown</p>
        )}
      </div>
    </div>
  )
}
