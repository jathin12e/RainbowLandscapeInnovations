// Gallery.jsx
import React, { useState } from "react";
import './biogallery.css';

const mediaList = [
  { type: "image", src: '/BioPonds/Screenshot 2025-07-21 003347.png' },
  { type: "image", src: '/BioPonds/Screenshot 2025-07-21 010146.png' },
  { type: "image", src: '/BioPonds/Screenshot 2025-07-21 010420.png' },
  { type: "image", src: '/BioPonds/Screenshot 2025-07-21 010559.png' },
  { type: "image", src: '/BioPonds/Screenshot 2025-07-21 010814.png' },
  { type: "image", src: '/BioPonds/WhatsApp Image 2024-03-05 at 18.24.54.jpeg' },
  { type: "image", src: '/BioPonds/WhatsApp Image 2024-09-05 at 13.50.56.jpeg' },
  { type: "image", src: '/BioPonds/WhatsApp Image 2024-09-05 at 13.55.02 (1).jpeg' },
  { type: "video", src: "https://res.cloudinary.com/dfzliqupz/video/upload/v1753508152/WhatsApp_Video_2024-09-05_at_13.50.55_sxgjwk.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dfzliqupz/video/upload/v1753689206/WhatsApp_Video_2024-03-05_at_18.24.50_h1esoy.mp4" },
  { type: "video", src: "/BioPonds/bio pond.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dfzliqupz/video/upload/v1753508660/VID_20211229_115620_whbh8t.mp4" }
];

const Gallery = () => {
  const [modalItem, setModalItem] = useState(null);
  const [scale, setScale] = useState(1);

  const openModal = (item) => {
    setModalItem(item);
    setScale(1); // Reset zoom when opening
  };

  const closeModal = () => {
    setModalItem(null);
    setScale(1);
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3)); // max 3x
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5)); // min 0.5x
  const resetZoom = () => setScale(1);

  return (
    <div className="gallery-container">
      <h2 className="section-title">Gallery</h2>
      <div className="media-grid">
        {mediaList.map((item, index) =>
          item.type === "image" ? (
            <img
              key={index}
              src={item.src}
              alt={`media-${index}`}
              onClick={() => openModal(item)}
            />
          ) : (
            <video
              key={index}
              src={item.src}
              muted
              autoPlay
              loop
              preload="metadata"
              onClick={() => openModal(item)}
            />
          )
        )}
      </div>

      {modalItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>

            {modalItem.type === "image" ? (
              <div className="zoom-container">
                <img
                  src={modalItem.src}
                  alt="Full View"
                  style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.2s ease'
                  }}
                />
              </div>
            ) : (
              <video src={modalItem.src} controls autoPlay />
            )}

            {modalItem.type === "image" && (
              <div className="zoom-controls">
                <button onClick={zoomIn}>+</button>
                <button onClick={zoomOut}>-</button>
                <button onClick={resetZoom}>Reset</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
