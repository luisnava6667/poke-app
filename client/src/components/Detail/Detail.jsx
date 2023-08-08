import { Bars } from './Bars/Bars'
export const Detail = ({ detail }) => {
  const abilities = detail.abilities.join(', ')
  const weight = detail.weight / 10 + ' kg'
  const height = detail.height / 10 + ' Mts'
  //   1 milla es aproximadamente igual a 1.609 kilómetros.
  const speed = (detail.speed * 1.609).toFixed(2) + 'km/h'
  return (
    <div className=' '>
      <h3 className='text-5xl text-center mb-3'>Information</h3>
      <div className='grid md:flex gap-4 w-full'>
        <div className='grid md:w-1/3  bg-blue text-center rounded-xl'>
          <h3 className='text-2xl'>Base Stats</h3>
          <div className='bg-palerBlue p-2 rounded-xl'>
            <Bars numero={detail.speed} title={'Speed'} />
            <Bars numero={detail.hp} title={'Hp'} />
            <Bars numero={detail.special_defense} title={'Special Defense'} />
            <Bars numero={detail.special_attack} title={'Special Attack'} />
            <Bars numero={detail.defense} title={'Defence'} />
            <Bars numero={detail.attack} title={'Attack'} />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 md:w-2/3 lg:gap-4 md:gap-2 lg:h-14 lg:mt-10'>
          <div className='bg-blue  rounded-xl text-center grid '>
            <h3 className='text-2xl text-center '>Details</h3>
            <div className='bg-softOrangeSelfCare px-2 flex items-center justify-evenly rounded-xl '>
              <p className='text-lg'>Height: {height}</p>
              <p className='text-lg'>Weight: {weight}</p>
              <p className='text-lg'>Speed: {speed}</p>
            </div>
          </div>
          <div className='bg-blue  rounded-xl text-center grid lg:h-14'>
            <h4 className='text-2xl'>Characteristic: </h4>
            <div className='bg-limeGreenExercise py-3 rounded-xl grid items-center'>
              <p className='text-2xl'>{detail.characteristic}</p>
            </div>
          </div>
          <div className='bg-blue  rounded-xl text-center lg:h-14'>
            <h3 className='text-2xl '>Type: </h3>
            <div className='bg-violetSocial rounded-xl flex p-2 text-center justify-evenly'>
              {detail.types.map((type) => (
                <>
                  <p className='text-xl' key={type.id}>
                    {type}
                  </p>
                  <img
                    src={`/type/${type}.svg`}
                    alt={`${type}`}
                    className='w-6'
                  />
                </>
              ))}
            </div>
          </div>
          <div className='bg-blue  rounded-xl text-center lg:h-14'>
            <h4 className='text-2xl'>Abilities: </h4>
            <div className='bg-desaturatedBlue  grid justify-evenly p-2 rounded-xl '>
              <p className='text-xl capitalize'>{abilities}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
