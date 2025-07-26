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
        <Route path='/pool' element={<Pool />}/>
        <Route path='/design' element={<Design/>} />
        <Route path='/landscape' element={<Landscape />} />
        <Route path='/fountain' element={<Fountain />} />
        <Route path='/bioponds' element={<Bioponds />} />
        <Route path='/newinnovation' element={<Newinnovation />} />
        <Route path='/pool/images' element={<Poolimages />} />
        <Route path="/bioponds/gallery" element={<BioImages />} />
        <Route path="/landscape/gallery" element={<LandscapeGallery />} />
        <Route path="/fountain/gallery" element={<FountainGallery />} />
      </Routes>
    </div>
  )
}

export default App