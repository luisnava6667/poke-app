import { Search } from './Search'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const NavBar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const handleLinkClick = () => {
    // Esto recargará la página
    navigate('/')
  }
  return (
    <div className='grid items-center justify-items-center pt-10 md:flex text-center w-full h-32 md:h-10 justify-evenly gap-5 md:gap-0 mb-10'>
      <Link
        to='/'
        className='flex items-center text-4xl'
        onClick={handleLinkClick}>
        Poke-App
      </Link>
      {pathname === '/' && <Search />}
      <div className='gap-5 flex items-center'>
        <Link
          to='/pokemonCreate'
          className={`navbar__link ${
            pathname === '/pokemonCreate' ? 'text-redLight' : ''
          }`}>
          New Pokemon
        </Link>
        <Link
          to='/types'
          className={`${pathname === '/types' ? 'text-redLight' : ''}`}>
          Type{' '}
        </Link>
        <Link
          to='/ability'
          className={`${pathname === '/ability' ? 'text-redLight' : ''}`}>
          Abilities
        </Link>
        <Link to='/' className={`${pathname === '/' ? 'text-redLight' : ''}`}>
          Home
        </Link>
      </div>
    </div>
  )
}
