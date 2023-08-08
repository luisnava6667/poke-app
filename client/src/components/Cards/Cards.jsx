import { getTypeColor } from '../../helpers'
import { Link } from 'react-router-dom'

export const Cards = ({ pokemon }) => {
  const { id, types, name, image, attack, defense } = pokemon
  const sliceId = id.toString().padStart(3, '0')
  if (sliceId.length > 3) sliceId.slice(1, 3)

  return (
    <Link
      className={` grid semi-bold  rounded-2xl shadow-2xl bg-blue `}
      to={`/pokemon/${id} `}>
      <div className='flex p-2 justify-between font-bold items-center'>
        <img
          src={image}
          alt={`${name}`}
          className='w-14 h-14 border-2 rounded-full'
        />
        <div>
          <p className='text-3xl transparent'>{'#' + sliceId}</p>
          <p className='text-xl  capitalize'>{name}</p>
        </div>
      </div>
      <div className={`${getTypeColor(types[0])} rounded-2xl p-3`}>
        <div className='gap-5 flex justify-evenly'>
          <p>Atk: {attack}</p>
          <p>Def: {defense}</p>
        </div>

        <div className='flex justify-evenly'>
          {types.map((type, i) => (
            <div key={i} className='flex gap-2'>
              <p className='type'>{type}</p>
              <img
                src={`./type/${type}.svg`}
                alt={`${type}`}
                key={i}
                className='w-5 h-5'
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
}

// {/* <div className='type'>
//   {types.map((type, i) => (
//     <p key={type}>{type}</p>
//   ))}
// </div> */}
