import { useSelector } from 'react-redux'
import { DetailTypes, Loader } from '../../components'
import { useEffect, useState } from 'react'
export const TypePage = () => {
  const [loading, setLoading] = useState(true)
  const types = useSelector((state) => state.types)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className='bg-veryDarkBlue '>
      {loading ? (
        <Loader />
      ) : (
        <div className='grid p-3'>
          <h3 className='text-4xl text-center mb-4 font-semibold'>Types</h3>
          <div
            className=' grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          '>
            {types.map((type) => (
              <DetailTypes key={type.id} type={type} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
