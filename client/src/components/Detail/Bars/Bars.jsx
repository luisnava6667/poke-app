export const Bars = ({ numero, title, value = numero }) => {
  return (
    <div >
      <div className='flex justify-between px-2 mb-1'>
        <p>{title}</p>
        <p>{value}</p>
      </div>
      <div className='bg-gray-400 rounded-3xl'>
        <div
          className='h-3 transition-all 
        duration-500 ease-in-out
          bg-redStudy  rounded-3xl'
          style={{ width: `${numero}%` }}></div>
      </div>
    </div>
  )
}
