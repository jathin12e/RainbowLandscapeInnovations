// Images.js
import React from 'react';
import './images.css';

const imageUrls = [
  '/pool/Rainbow PIX 8.jpg',
  '/pool/Screenshot 2025-07-25 125250.png',
  '/pool/Screenshot 2025-07-25 123826.png',
 '/pool/20210708_060508.jpg', 
 '/pool/banner5.jpg',
 '/pool/Screenshot 2025-07-20 000751.png' ,
 
 '/pool/Screenshot 2025-07-20 000944.png ',
 '/pool/Screenshot 2025-07-20 001054.png',
  '/pool/Screenshot 2025-07-20 010936.png',
   '/pool/WhatsApp Image 2024-05-22 at 15.12.53 (1).jpeg', 
   '/pool/WhatsApp Image 2024-07-15 at 15.29.58 (1).jpeg ',
   
   '/pool/WhatsApp Image 2024-07-15 at 15.29.58 (2).jpeg ',
   '/pool/WhatsApp Image 2024-11-27 at 6.18.42 PM (1).jpeg',
    '/pool/WhatsApp Image 2024-11-27 at 6.18.42 PM (2).jpeg',
     '/pool/WhatsApp Image 2025-05-07 at 2.07.03 PM.jpeg ',
     '/pool/WhatsApp Image 2025-05-07 at 2.07.06 PM.jpeg',
      '/pool/WhatsApp Image 2025-05-07 at 2.07.09 PM.jpeg',
       '/pool/WhatsApp Image 2025-05-07 at 2.07.15 PM.jpeg', 
       '/pool/WhatsApp Image 2025-06-27 at 12.58.49 PM (1).jpeg',
        '/pool/WhatsApp Image 2025-06-27 at 12.58.53 PM.jpeg',
         '/pool/WhatsApp Image 2025-06-27 at 12.59.35 PM.jpeg',
          '/pool/WhatsApp Image 2025-06-27 at 12.59.36 PM (1).jpeg',
           '/pool/WhatsApp Image 2025-06-27 at 12.59.37 PM (1).jpeg',
            '/pool/WhatsApp Image 2025-06-27 at 12.59.38 PM (2).jpeg', 
            '/pool/WhatsApp Image 2024-11-27 at 6.18.44 PM (1).jpeg',
]
function Images() {
  return (
    <div className="container">
      <h2 className="heading">All Images</h2>
      <div className="gallery">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} width="250" height="150" />
        ))}
      </div>
    </div>
  );
}

export default Images;
