import React from 'react'
import './about.css'
import Nav from './nav'
import TrackRecord from './trackrecord'
import TeamSection from './teams'
import Footer from './footer'

const location = [
  {
    name:"Bangalore", 
    place:"Main office: No. 1, 1st Floor, Deepa Towers,Esther Enclave, Horamavu, Bangalore – 560043",
    number:"+91 96630 00039"
  },
  {
    name:"Hyderabad",
    place:"Branch Office : #401 ,4th Floor , Central Park -Phase 2 , Kondapur , Telangana, Pincode : 500084",
    number:"+91 98450 57127"
  },
   {
    name:"Mumbai",
    place:"Branch Office : b1 girikunj industrial estate Andheri east Mumbai , 400093",
    number:"+91 98450 57127"
  },
  {
    name:"Delhi",
    place:"Branch Office : SG-Alpha Tower, Tower, 1,504, Sector 9, Vasundhara, Ghaziabad, Uttar Pradesh 201012",
    number:"+91 98450 57127"
  }
  
]

const about = () => {
  return (
    <div> 
      <Nav />
      <div className='bg-image2'>
        
        <h1 style={{fontFamily: 'Arial, Helvetica, sans-serif',fontWeight: 'bold' , color:"white"}}>ABOUT US</h1>
      </div>
      <div className='bg-image3'>
        <h1 style={{marginBottom:"30px" , textShadow: '2px 2px 8px #878282ff', fontFamily:'san-serif'}}>RAINBOW LANDSCAPE INNOVATIONS PVT. LTD</h1>
        <p className='text-position'>Our company is involved in structural, hydraulic, and technical design of Swimming Pools,
            Fountain Technology,<br /> Jacuzzi Pools, and Irrigation Systems for the past 20 years. Apart 
            from design, we are extensively involved in the <br />implementation of these services. Aesthetically
          and technologically advanced swimming pool designs are our <br />core strength. We undertake projects for 
          both commercial
            and residential pools, ensuring each one is carefully
            designed <br />and executed based on the specific needs of our 
            clients and architects.
        </p>
        <p className='text-position'>
          For enhanced comfort, we also design and execute Jacuzzi and Heating 
          Pools. Water, being a vital part of life,<br /> is also a source of calmness 
          and beauty in any living space. Our fountain designs aim to provide this
          peace <br />while also adding aesthetic value. Backed by strong hydraulic knowledge, 
          we customize and recreate fountain<br /> systems to match the unique requirements 
          of every customer.
        </p>
        <p className='text-position'>
          With water scarcity becoming a growing concern, we prioritize efficient planning 
          and usage in all our irrigation designs.<br /> Our landscape irrigation systems are developed 
          with great care to ensure both sustainability and functionality. For all your <br />design, 
          consultancy, and turnkey project needs, we are at your service. We proudly undertake 
          and successfully complete <br />projects across entire South India.
        </p>
        <img src='/images/group-business-people-sitting-conference-table.jpg' className='img-2'/>
        <div style={{marginTop:"50px"}}>
          <h1 style={{fontFamily:'san-serif'}}>OUR CORE VALUES</h1>
          <p style={{color:"grey"}}>Our values shape the culture of our organization and define the character of company</p>
          <img src='/images/Untitled Diagram.drawio (2)-Photoroom.png'  className='img-1'/>
        </div>
        <div className='locate-position'>
          <h1 style={{fontFamily:'san-serif'}}>Office Locations</h1>
          <p style={{color:"grey"}}>We have strong presence across India with multiple branches in major cities. Our regional offices <br />ensure quick service, better coordination, 
            and on-ground project support for every client</p>
          <div className='locate1'>
            {
              location.map((u) => {
                return(
                  <div className='locate2'>
                    <h4>{u.name}</h4>
                    <p style={{color:"grey"}}>{u.place}</p>
                    <p>{u.number}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <TrackRecord />
        <TeamSection />
        <video width="100%" autoPlay muted controls loop style={{borderRadius:"20px"}}>
          <source src="https://res.cloudinary.com/dfzliqupz/video/upload/v1753162646/Rainbow_Company_Profile_pgqoa3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <Footer />
    </div>
  )
}

export default about