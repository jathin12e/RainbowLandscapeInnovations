import React, { useState } from 'react';
import './images.css';

const mediaItems = [
  { type: 'image', src: 'https://res.cloudinary.com/dfzliqupz/image/upload/v1754116397/Rainbow_PIX_8_10000_vpxptk.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479092/20210708_060508_y6owp9.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479091/banner5_rbu0n8.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479169/WhatsApp_Image_2025-07-19_at_1.10.11_PM_vseqwn.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479168/WhatsApp_Image_2025-06-27_at_12.59.37_PM_1_e3hhcf.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479168/WhatsApp_Image_2025-06-27_at_12.59.35_PM_j7okhv.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479168/WhatsApp_Image_2025-06-27_at_12.59.38_PM_2_p8o5dw.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479168/WhatsApp_Image_2025-06-27_at_12.59.36_PM_1_pwsqml.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479168/WhatsApp_Image_2025-05-07_at_2.07.15_PM_rdyflc.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479168/WhatsApp_Image_2025-06-27_at_12.58.49_PM_1_vakigm.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479168/WhatsApp_Image_2025-05-07_at_2.07.09_PM_grql8j.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479167/WhatsApp_Image_2025-05-07_at_2.07.06_PM_gnkzzp.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479167/WhatsApp_Image_2025-05-07_at_2.07.03_PM_juchbq.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479167/WhatsApp_Image_2024-11-27_at_6.18.42_PM_2_jzypth.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479167/Screenshot_2025-07-25_123826_rak8xx.png' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479167/WhatsApp_Image_2024-11-27_at_6.18.42_PM_1_aiph3e.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479167/Screenshot_2025-07-25_125250_y9ecdf.png' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479166/Screenshot_2025-07-20_010936_qdksb1.png' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479166/WhatsApp_Image_2024-05-22_at_15.12.53_1_vpywga.jpg' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479165/Screenshot_2025-07-20_000944_glnois.png' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479165/Screenshot_2025-07-20_001054_dvgeif.png' },
  { type: 'image', src: 'https://res.cloudinary.com/dx70bv381/image/upload/v1754479164/Screenshot_2025-07-20_000751_qquacd.png' },
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
