import React, { useState } from 'react';
import './landscapegallery.css';

const mediaItems = [
  { type: 'image', src: '/landscape/23112007175.jpg' },
  { type: 'image', src: '/landscape/DSC03449.JPG' },
  { type: 'image', src: '/landscape/DSC03448.JPG' },
  { type: 'image', src: '/landscape/25112007205.jpg' },
  { type: 'image', src: '/landscape/25112007204.jpg' },
  { type: 'image', src: '/landscape/25112007203.jpg' },
  { type: 'image', src: '/landscape/25112007199.jpg' },
  { type: 'image', src: '/landscape/23112007182.jpg' },
  { type: 'image', src: '/landscape/23112007181.jpg' },
  { type: 'image', src: '/landscape/23112007178.jpg' },
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
  { type: 'image', src: '/landscape/05062008119.jpg' },
  { type: 'image', src: '/landscape/05062008113.jpg' },
  { type: 'image', src: '/landscape/Image(1035).jpg' },
  { type: 'image', src: '/landscape/IMG_0079.JPG' },
  { type: 'image', src: '/landscape/IMG_0632.jpg' },
  { type: 'image', src: '/landscape/IMG_1016.jpg' },
  { type: 'image', src: '/landscape/IMG_0622.jpg' },
  { type: 'image', src: '/landscape/Image(966).jpg' },
  { type: 'image', src: '/landscape/DSC03493.JPG' },
  { type: 'image', src: '/landscape/DSC03453.JPG' },
  { type: 'image', src: '/landscape/DSC03450.JPG' },
];





function Images() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scale, setScale] = useState(1);

  const openImage = (src) => {
    setSelectedImage(src);
    setScale(1); // reset zoom when opening a new image
  };

  const closeImage = () => {
    setSelectedImage(null);
    setScale(1);
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3)); // limit to 3x
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5)); // limit to 0.5x
  const resetZoom = () => setScale(1);

  return (
    <div className="images-gallery-container">
      <h2 className="gallery-heading">Gallery</h2>
      <div className="media-gallery">
        {mediaItems.map((item, index) => (
          <div key={index} className="media-card">
            <img
              src={item.src}
              alt={`Image-${index}`}
              loading="lazy"
              onClick={() => openImage(item.src)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeImage}>
          <span className="close" onClick={closeImage}>&times;</span>
          <div className="zoom-container" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-image"
              src={selectedImage}
              alt="Full View"
              style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.2s ease'
              }}
            />
          </div>
          <div className="zoom-controls" onClick={(e) => e.stopPropagation()}>
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>-</button>
            <button onClick={resetZoom}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
