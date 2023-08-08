import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './views/homePage'
import { NavBar } from './components'
import { AbilityPage } from './views/abailiyPage'
import { CreatePage } from './views/createPage'
import { TypePage } from './views/typePage'
import { DetailPage } from './views/detailsPage'

function App() {
  return (
    <BrowserRouter>
      <div className='bg-veryDarkBlue  h-screen font-rubik text-white gap-20 w-full'>
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ability' element={<AbilityPage />} />
          <Route path='/pokemonCreate' element={<CreatePage />} />
          <Route path='/types' element={<TypePage />} />
          <Route path='/pokemon/:id' exact element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
