import React from 'react'
import Home from './components/home'
import Nav from './components/nav'
import About from './components/about'
import {Routes , Route} from 'react-router-dom'
import Services from './components/services'
import Enquiry from './components/serviceenquiry'
import Contact from './components/contact'
import Feed from './components/feedback'
import Careers from './components/careers'
import Pool from './components/pool'
import Design from './components/design'
import Landscape from './components/Landscape'
import Fountain from './components/fountain'
import Bioponds from './components/bioponds'
import Newinnovation from './components/newInnovation'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/feedback' element={<Feed />}/>
        <Route path='/pool' element={<Pool />}/>
        <Route path='/design' element={<Design/>} />
        <Route path='/landscape' element={<Landscape />} />
        <Route path='/fountain' element={<Fountain />} />
        <Route path='/bioponds' element={<Bioponds />} />
        <Route path='/newinnovation' element={<Newinnovation />} />
      </Routes>
    </div>
  )
}

export default App