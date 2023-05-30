import { Routes, Route } from 'react-router-dom'

import { Navbar } from './components'

import { MotPage, FinishPage } from './pages'

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className='mainText'>
        <Routes>
          <Route path='/mot' element={ <MotPage /> } />


          
          <Route path='/finish' element={ <FinishPage /> } />
        </Routes>
      </main>

    </>
  )
}

export default App