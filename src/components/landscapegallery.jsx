// Images.js
import React from 'react';
import './images.css';

const mediaItems = [
  { type: 'image', src: '/landscape/23112007175.jpg'},
  { type: 'image', src: '/landscape/DSC03449.JPG' },
  { type: 'image', src: '/landscape/DSC03448.JPG' },
  { type: 'image', src: '/landscape/25112007205.jpg' },
  { type: 'image', src: '/landscape/25112007204.jpg' },
  { type: 'image', src: '/landscape/25112007203.jpg' },
  { type: 'image', src: '/landscape/25112007199.jpg' },
  { type: 'image', src: '/landscape/23112007182.jpg' },
  { type: 'image', src: '/landscape/23112007181.jpg' },
  { type: 'image', src: '/landscape/23112007178.jpg ' },
  { type: 'image', src: '/landscape/23112007173.jpg' },
  { type: 'image', src: '/landscape/13102007104.jpg' },
  { type: 'image', src: '/landscape/13102007103.jpg' },
  { type: 'image', src: '/landscape/12102007088.jpg' },
  { type: 'image', src: '/landscape/12102007090.jpg' },
  { type: 'image', src: '/landscape/13102007094.jpg' },
  { type: 'image', src: '/landscape/13102007098.jpg' },
  { type: 'image', src: '/landscape/12102007089.jpg' },
  { type: 'image', src: '/landscape/06102007079.jpg' },
  { type: 'image', src: '/landscape/06102007078.jpg' },
  { type: 'image', src: '/landscape/05062008123.jpg' },
  { type: 'image', src: '/landscape/05062008120.jpg' },
  { type: 'image', src: '/landscape/05062008119.jpg ' },
  { type: 'image', src: '/landscape/05062008113.jpg' },
  { type: 'image', src: '/landscape/Image(1035).jpg' },
    
    { type: 'image', src: '/landscape/IMG_0079.JPG' },
    { type: 'image', src: '/landscape/IMG_0632.jpg' },
    { type: 'image', src: '/landscape/IMG_1016.jpg' },
    { type: 'image', src: '/landscape/IMG_0622.jpg' },
    { type: 'image', src: '/landscape/Image(966).jpg' },
    { type: 'image', src: '/landscape/DSC03493.JPG ' },
    { type: 'image', src: '/landscape/DSC03453.JPG' },
    { type: 'image', src: '/landscape/DSC03450.JPG' },
    { type: 'image', src: '/landscape/IMG_1014.jpg' },
];
function Images() {
  return (
    <div className="container">
      <h2 className="heading">Gallery</h2>
      <div className="gallery">
        {mediaItems.map((item, index) => (
          item.type === 'image' ? (
            <img
              key={index}
              src={item.src}
              alt={`Image ${index + 1}`}
              width="250"
              height="150"
            />
          ) : (
            <video
              key={index}
              width="250"
              height="150"
              controls
              muted
              autoPlay
              loop
              preload="metadata"
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        ))}
      </div>
    </div>
  );
}

export default Images;
