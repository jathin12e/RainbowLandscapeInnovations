// Gallery.jsx
import React from "react";
import './biogallery.css'

const mediaList = [ 
  {type: "image", src:'/fountain/banner3.jpg'},
  {type: "image", src:'/fountain/banner6.jpg'},
   {type: "image", src:'/fountain/Fountain-1.jpg'},
    {type: "image", src:'/fountain/frp circulat.jpg'},
     {type: "image", src:'/fountain/Image023.jpg'} ,
     {type: "image", src:'/fountain/IMG-20150120-WA0001.jpg'} ,
     {type: "image", src:'/fountain/IMG-20150220-WA0034.jpg'},
     {type: "image", src:'/fountain/IMG-20160126-WA0040.jpg'},
     {type: "image", src:'/fountain/IMG-20160126-WA0041.jpg'},
     {type:"image" , src:'/fountain/Screenshot 2025-07-20 233709.png'},
     {type:"image" , src:'/fountain/Screenshot 2025-07-20 233911.png'},
     {type:"image" , src:'/fountain/Screenshot 2025-07-20 235234.png'},
     {type:"image" , src:'/fountain/Screenshot 2025-07-20 235513.png'},
     {type:"image" , src:'/fountain/Screenshot 2025-07-21 003958.png'},
     {type:"image" , src:'/fountain/Screenshot 2025-07-21 004023.png'},
     {type:"image" , src:'/fountain/Screenshot 2025-07-21 004518.png'},
     {type:"image" , src:'/fountain/WhatsApp Image 2024-11-25 at 10.34.44 AM.jpeg'},
     {type:"image" , src:'/fountain/WhatsApp Image 2025-07-20 at 23.26.15_fedf3317.jpg'},
     {type:"image" , src:'/fountain/IMG-20141122-WA0008.jpg'},
  { type: "video", src: "https://res.cloudinary.com/dfzliqupz/video/upload/v1753266060/Jumping_jets_1_ofqdz6.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dfzliqupz/video/upload/v1753162480/Dry_Deck_Fountain_rajazt.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dfzliqupz/video/upload/v1753508660/VID_20211229_115620_whbh8t.mp4"},
  {type:"video" , src:"/fountain/Cosmos Jet.mp4"}
  // Add more media as needed
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="section-title">Gallery</h2>
      <div className="media-grid">
        {mediaList.map((item, index) => (
          item.type === "image" ? (
            <img key={index} src={item.src} alt={`media-${index}`} />
          ) : (
            <video key={index} controls loop  autoPlay muted>
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        ))}
      </div>
    </div>
  );
};

export default Gallery;
