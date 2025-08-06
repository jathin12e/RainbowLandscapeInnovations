// Gallery.jsx
import React, { useState } from "react";
import './biogallery.css';

const mediaList = [
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480011/banner3_qxcdfu.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480011/Image023_yqn70p.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480011/Fountain-1_mvqg6k.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480011/banner6_mpngzv.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480011/frp_circulat_gyyx1l.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480012/IMG-20150120-WA0001_uwkmc8.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480012/IMG-20141122-WA0008_qrrh4g.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480012/IMG-20160126-WA0040_hy5ymq.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480012/IMG-20150220-WA0034_bew5nx.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480012/IMG-20160126-WA0041_rvofh8.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480013/Screenshot_2025-07-20_233709_gdudoa.png' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480013/Screenshot_2025-07-21_003958_ppzvlo.png' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480013/Screenshot_2025-07-20_235513_bqali0.png' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480013/Screenshot_2025-07-20_233911_epxtaa.png' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480013/Screenshot_2025-07-20_235234_att9le.png' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480014/Screenshot_2025-07-21_004023_qkms20.png' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480014/WhatsApp_Image_2025-07-20_at_23.26.15_fedf3317_inlazs.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480014/WhatsApp_Image_2024-11-25_at_10.34.44_AM_orkd2p.jpg' },
  { type: "image", src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754480014/Screenshot_2025-07-21_004518_ubwsix.png' },
  { type: "video", src: "https://res.cloudinary.com/dfzliqupz/video/upload/v1753266060/Jumping_jets_1_ofqdz6.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dfzliqupz/video/upload/v1753162480/Dry_Deck_Fountain_rajazt.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dfzliqupz/video/upload/v1753508660/VID_20211229_115620_whbh8t.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dx70bv381/video/upload/v1754480012/Cosmos_Jet_vpnhj9.mp4" }
];

const Gallery = () => {
  const [modalItem, setModalItem] = useState(null);

  const openModal = (item) => setModalItem(item);
  const closeModal = () => setModalItem(null);

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
              <img src={modalItem.src} alt="Full View" />
            ) : (
              <video src={modalItem.src} controls autoPlay />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
