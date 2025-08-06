import React from 'react'
import './App.css'
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
import ScrollToTop from './scrolltop'
import Poolimages from './components/poolimages'
import BioImages from './components/biogallery'
import LandscapeGallery from './components/landscapegallery'
import FountainGallery from './components/fountaingallery'





const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/feedback' element={<Feed />}/>
        <Route path='/services/pool' element={<Pool />}/>
        <Route path='/services/design' element={<Design/>} />
        <Route path='/services/landscape' element={<Landscape />} />
        <Route path='/services/fountain' element={<Fountain />} />
        <Route path='/services/bioponds' element={<Bioponds />} />
        <Route path='/newinnovation' element={<Newinnovation />} />
        <Route path='/services/pool/images' element={<Poolimages />} />
        <Route path="/services/bioponds/gallery" element={<BioImages />} />
        <Route path="/services/landscape/gallery" element={<LandscapeGallery />} />
        <Route path="/services/fountain/gallery" element={<FountainGallery />} />
      </Routes>
    </div>
  )
}

export default App