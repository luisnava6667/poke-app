import { getTypeColor } from '../../helpers'
import { TypeDescription } from './TypesDescription/TypeDescription '
export const DetailTypes = ({ type }) => {
  const {
    name,
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_to,
    no_damage_from
  } = type
  console.log(double_damage_from)
  return (
    <div className='bg-blue rounded-lg  capitalize grid'>
      <h3
        className={` ${getTypeColor(
          name
        )} rounded-lg h-10 font-bold text-2xl text-center`}>
        {name}
      </h3>
      <div className='px-3'>
        <TypeDescription title='Weak to' types={double_damage_from} />
        <TypeDescription title='Strong to' types={double_damage_to} />
        <TypeDescription title='Half damage from' types={half_damage_from} />
        <TypeDescription title='Half damage to' types={half_damage_to} />
        <TypeDescription title='No damage from' types={no_damage_from} />
        <TypeDescription title='No damage to' types={no_damage_to} />
      </div>
    </div>
  )
}
