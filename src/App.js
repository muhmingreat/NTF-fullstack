import React from 'react'
import { Navbar,Footer } from './components/componentIndex'
import {Routes, Route} from 'react-router-dom'
import { HeroSection} from './pages/indexPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
     <Route path='/' element={<HeroSection/>}></Route>
     
     </Routes>
    
     <Footer/>
    </div>
  )
}

export default App