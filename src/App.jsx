import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './scrolltop'

// Import all page components
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Enquiry from './components/serviceenquiry'
import Contact from './components/contact'
import Feed from './components/feedback'
import Careers from './components/careers'
import Newinnovation from './components/newInnovation'
import ClientsPage from './components/clientspage'

// Import service specific components
import Pool from './components/pool'
import Design from './components/design'
import Landscape from './components/Landscape'
import Fountain from './components/fountain'
import Bioponds from './components/bioponds'

// Import gallery components
import Poolimages from './components/poolimages'
import BioImages from './components/biogallery'
import LandscapeGallery from './components/landscapegallery'
import FountainGallery from './components/fountaingallery'

const App = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Routes>
        {/* Main Pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/feedback' element={<Feed />} />
        <Route path='/newinnovation' element={<Newinnovation />} />
        
        {/* Clients Page */}
        <Route path='/clients' element={<ClientsPage />} />
        
        {/* Service Pages */}
        <Route path='/services/pool' element={<Pool />} />
        <Route path='/services/design' element={<Design />} />
        <Route path='/services/landscape' element={<Landscape />} />
        <Route path='/services/fountain' element={<Fountain />} />
        <Route path='/services/bioponds' element={<Bioponds />} />
        
        {/* Gallery Pages */}
        <Route path='/services/pool/images' element={<Poolimages />} />
        <Route path='/services/bioponds/gallery' element={<BioImages />} />
        <Route path='/services/landscape/gallery' element={<LandscapeGallery />} />
        <Route path='/services/fountain/gallery' element={<FountainGallery />} />
        
        {/* 404 - Not Found (Optional) */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

// Optional 404 Component
const NotFound = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '72px', margin: '0', color: '#3498db' }}>404</h1>
      <h2 style={{ color: '#1a2332' }}>Page Not Found</h2>
      <p style={{ color: '#64748b' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ 
        marginTop: '20px',
        padding: '12px 32px',
        background: '#3498db',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '600',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.background = '#2980b9';
        e.target.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = '#3498db';
        e.target.style.transform = 'translateY(0)';
      }}
      >
        Go Back Home
      </a>
    </div>
  );
}

export default App