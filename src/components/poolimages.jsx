import React, { useState } from 'react';
import './images.css';

const mediaItems = [
  { type: 'image', src: 'https://res.cloudinary.com/dfzliqupz/image/upload/v1754116397/Rainbow_PIX_8_10000_vpxptk.jpg' },
  { type: 'image', src: '/pool/Screenshot 2025-07-25 125250.png' },
  { type: 'image', src: '/pool/Screenshot 2025-07-25 123826.png' },
  { type: 'image', src: '/pool/20210708_060508.jpg' },
  { type: 'image', src: '/pool/banner5.jpg' },
  { type: 'image', src: '/pool/Screenshot 2025-07-20 000751.png' },
  { type: 'image', src: '/pool/Screenshot 2025-07-20 000944.png' },
  { type: 'image', src: '/pool/Screenshot 2025-07-20 001054.png' },
  { type: 'image', src: '/pool/Screenshot 2025-07-20 010936.png' },
  { type: 'image', src: '/pool/WhatsApp Image 2024-05-22 at 15.12.53 (1).jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2024-07-15 at 15.29.58 (1).jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2024-11-27 at 6.18.42 PM (1).jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2025-05-07 at 2.07.03 PM.jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2025-05-07 at 2.07.06 PM.jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2025-05-07 at 2.07.09 PM.jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2025-05-07 at 2.07.15 PM.jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2025-06-27 at 12.58.49 PM (1).jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2025-06-27 at 12.59.35 PM.jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2025-06-27 at 12.59.36 PM (1).jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2025-06-27 at 12.59.37 PM (1).jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2025-06-27 at 12.59.38 PM (2).jpeg' },
  { type: 'image', src: '/pool/WhatsApp Image 2024-11-27 at 6.18.44 PM (1).jpeg' },
  { type: 'video', src: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753509268/WhatsApp_Video_2020-12-25_at_00.05.48_1_zai7fq.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753509268/WhatsApp_Video_2023-08-15_at_09.14.06_wl568p.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753509269/WhatsApp_Video_2022-10-21_at_14.37.16_gmcuer.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753509269/WhatsApp_Video_2022-06-08_at_11.24.00_AM_1_xvteod.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753509270/WhatsApp_Video_2022-11-24_at_17.12.01_-_Copy_tzcbpi.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753509271/WhatsApp_Video_2024-07-04_at_12.13.23_PM_1_sccecl.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753509271/WhatsApp_Video_2023-08-15_at_09.30.23_rjzcwc.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753509315/WhatsApp_Video_2025-07-19_at_1.10.11_PM_1_umytjs.mp4' },
  { type: 'video', src: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753509315/WhatsApp_Video_2025-05-07_at_5.03.34_PM_wqjux4.mp4' }
];

function Images() {
  const [modalItem, setModalItem] = useState(null);

  const openModal = (item) => setModalItem(item);
  const closeModal = () => setModalItem(null);

  return (
    <div className="container">
      <h2 className="heading">Gallery</h2>
      <div className="gallery">
        {mediaItems.map((item, index) =>
          item.type === 'image' ? (
            <img key={index} src={item.src} alt={`Image ${index}`} onClick={() => openModal(item)} />
          ) : (
            <video
              key={index}
              src={item.src}
              autoPlay
              muted
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
            {modalItem.type === 'image' ? (
              <img src={modalItem.src} alt="Full View" />
            ) : (
              <video src={modalItem.src} controls autoPlay loop />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
