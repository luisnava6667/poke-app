import { getDetail } from '../../redux/actions'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Detail, Loader } from '../../components/'
export const DetailPage = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const detail = useSelector((state) => state.detail)
  console.log(detail)
  const id = pathname.split('/')[2]
  useEffect(() => {
    dispatch(getDetail(id))
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [dispatch, id])
  return (
    <div className='bg-veryDarkBlue p-3'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=''>
            <h2 className='text-5xl capitalize text-center'>{detail.name}</h2>
            <div className='grid justify-items-center md:flex md:justify-evenly items-center mb-8 gap-4'>
              <div className='border-2 rounded-full p-4'>
                <img src={detail.image} alt={detail.name} className='' />
              </div>
              <div className=''>
                <Detail detail={detail} />{' '}
              </div>
            </div>
            <div className='bg-blue  rounded-xl text-center mb-5'>
              <h4 className='text-2xl'>Moves:</h4>
              <div className='bg-palerBlue p-3 rounded-xl'>
                {detail.moves.join(', ')}
              </div>
            </div>
            <div className='bg-blue  rounded-xl text-center'>
              <h4 className='text-2xl'>
                Games where it appears: <span>{detail.games.length}</span>
              </h4>
              <div className='bg-redLight rounded-lg flex gap-2 p-2 justify-evenly'>
                <p className='uppercase'>{detail.games.join(', ')}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
