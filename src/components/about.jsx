import React from 'react'
import './about.css'
import Nav from './nav'
import TrackRecord from './trackrecord'
import TeamSection from './teams'
import Footer from './footer'
import Values from './values'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const locations = [
  {
    name: "Bangalore",
    lat: 13.025903,
    lng: 77.667233,
    address: "No. 1, 1st Floor, Deepa Towers, Esther Enclave, Horamavu, Bangalore - 560043",
    phone: "+91 96630 00039",
    phone1: "+91 98450 57127"
  },
  {
    name: "Hyderabad",
    lat: 17.478146,
    lng: 78.338881,
    address: "#401, 4th Floor, Central Park Phase 2, Kondapur, Hyderabad - 500084",
    phone: "+91 98450 57127",
    phone1: ""
  }
]

// Calculate center for map (middle of both locations)
const mapCenter = {
  lat: (locations[0].lat + locations[1].lat) / 2,
  lng: (locations[0].lng + locations[1].lng) / 2
}

const About = () => {
  return (
    <div> 
      <Nav />
      
      {/* Hero Section */}
      <div className='bg-image2'>
        <h1 style={{fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold', color: "white"}}>ABOUT US</h1>
      </div>
      
      {/* Main Content */}
      <div className='bg-image3'>
        <h1 style={{marginBottom: "30px", textShadow: '2px 2px 8px #878282ff', fontFamily: 'san-serif'}}>
          RAINBOW LANDSCAPE INNOVATIONS INDIA PVT. LTD
        </h1>
        
        <p className='text-position'>
          Our company is involved in structural, hydraulic, and technical design of Swimming Pools,
          Fountain Technology, Jacuzzi Pools, and Irrigation Systems for the past 23 years. Apart 
          from design, we are extensively involved in the implementation of these services. Aesthetically
          and technologically advanced swimming pool designs are our core strength. We undertake projects for 
          both commercial and residential pools, ensuring each one is carefully designed and executed based 
          on the specific needs of our clients and architects.
        </p>
        <p className='text-position'>
          For enhanced comfort, we also design and execute Jacuzzi and Heating Pools. Water, being a vital 
          part of life, is also a source of calmness and beauty in any living space. Our fountain designs aim 
          to provide this peace while also adding aesthetic value. Backed by strong hydraulic knowledge, we 
          customize and recreate fountain systems to match the unique requirements of every customer.
        </p>
        <p className='text-position'>
          With water scarcity becoming a growing concern, we prioritize efficient planning and usage in all 
          our irrigation designs. Our landscape irrigation systems are developed with great care to ensure both 
          sustainability and functionality. For all your design, consultancy, and turnkey project needs, we are 
          at your service. We proudly undertake and successfully complete projects across entire South India. 
          <a href='/pool/RAINBOW 2022.pdf' target='_blank' rel="noopener noreferrer"> click here</a> for more about RLI
        </p>
        
        <Values />
        
        {/* Office Locations with Interactive Map */}
        <div className='locate-position'>
          <h1 style={{fontFamily: 'san-serif'}}>Office Locations</h1>
          <p style={{color: "grey"}}>
            We have strong presence across India with multiple branches in major cities. Our regional offices 
            ensure quick service, better coordination, and on-ground project support for every client
          </p>
          
          {/* Single Map with Multiple Markers */}
          <div className="office-map-container">
            <MapContainer
              center={[mapCenter.lat, mapCenter.lng]}
              zoom={6}
              scrollWheelZoom={true}
              style={{
                height: "400px",
                width: "100%",
                borderRadius: "20px",
                marginBottom: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
              }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((office, index) => (
                <Marker key={index} position={[office.lat, office.lng]}>
                  <Popup>
                    <div className="map-popup">
                      <strong>{office.name}</strong>
                      <br />
                      {office.address}
                      <br />
                      📞 {office.phone}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          
          {/* Location Cards */}
          <div className='locate1'>
            {locations.map((office, index) => (
              <div className='locate2' key={index}>
                <h4>{office.name}</h4>
                <p style={{color: "grey"}}>{office.address}</p>
                <p>{office.phone}</p>
                {office.phone1 && <p>{office.phone1}</p>}
                
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${office.lat},${office.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "12px",
                    padding: "6px 16px",
                    background: "#2c5282",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "6px",
                    fontSize: "13px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#1a365d";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#2c5282";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  📍 Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <TrackRecord />
        <TeamSection />
        
        <video width="100%" autoPlay muted controls loop style={{borderRadius: "20px"}}>
          <source src="https://res.cloudinary.com/dfzliqupz/video/upload/v1753162646/Rainbow_Company_Profile_pgqoa3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <Footer />
    </div>
  )
}

export default About