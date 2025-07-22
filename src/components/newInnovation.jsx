import React from 'react';
import './new1.css';
import Footer from './footer';
import Nav from './nav';

const products = [
  {
    name: 'Robotic Pool Cleaner',
    description: 'An automated cleaning solution that efficiently removes debris, algae, and dirt from pools, ensuring crystal-clear water with minimal effort.',
    videoUrl: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753161280/Robotic_Pool_Cleaner_dizolk.mp4',
  },
  {
    name: 'Counter-Current System',
    description: 'Counter current systems create a strong, adjustable water flow in pools, allowing users to swim continuously in place. Ideal for swim training, aquatic therapy, and fitness, they transform small pools into powerful workout zones.',
    videoUrl: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753161283/Counter_Current_xlwlba.mp4',
  },
  {
    name: 'Pool Threadmill',
    description: 'A pool treadmill is an underwater fitness device that enables low-impact walking or running in water. It’s perfect for rehabilitation, endurance training, and joint-friendly exercise, combining the benefits of hydrotherapy and cardio.',
    videoUrl: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753161271/Treadmill_vca9js.mp4',
  },
  {
    name: 'Trampoline',
    description: 'A trampoline adds fun and fitness to any space, offering an exciting way to stay active, improve balance, and enjoy low-impact exercise for all age groups.',
    videoUrl: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753161270/Trampoline_gawhy1.mp4',
  },
  {
    name: 'Automatic Pool Cover',
    description: 'An automatic pool cover provides effortless protection and safety, conserving heat, keeping debris out, and ensuring peace of mind with the push of a button.',
    videoUrl: 'https://res.cloudinary.com/dgzuiurhr/video/upload/v1753159627/Automatic_Pool_Cover_-_Above_Ground_Model_gnpnf5.mp4',
  },
  {
    name: 'Bubble Ring',
    description: 'The bubble ring feature creates mesmerizing circular waves and bubbles in the pool, enhancing visual appeal and providing a playful, relaxing experience for swimmers',
    videoUrl: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753161276/Bubble_Ring_aszkul.mp4',
  },
  {
    name: 'Laghetto',
    description: 'Laghetto is a renowned Italian brand known for its elegant and innovative above-ground pools, blending luxury design with advanced technology. Their pools are crafted with premium materials, offering quick installation, durability, and stylish aesthetics, making them a favorite for both residential and commercial spaces.',
    videoUrl: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753162114/Copy_of_LAGHETTO_tk95pu.mp4',
    
  }
  ,
  {
    name: 'Aqua Bike',
    description: 'Aqua Bike is a stationary cycle designed for use in a swimming pool. It combines the benefits of cycling and water resistance to provide a low-impact, full-body workout that improves cardiovascular health, tones muscles, and supports joint mobility — all while being gentle on the body',
    videoUrl: 'https://res.cloudinary.com/dfzliqupz/video/upload/v1753161270/Aqua_Bike_b2aanp.mp4',
  }
];

const ProductShowcase = () => {
  return (
    <div className="product-section">
      <div className='navbar-overlay'>
         <Nav />
      </div>
      <div className="hero-banner">
       
        <div className="hero-content">
          <h1>SmartTech Innovations</h1>
          <p>Discover the latest in landscape and pool technology.  From smart automation to <br />advanced fitness systems, our innovations are designed to enhance efficiency, sustainability, and user experience.</p>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-row1" key={index}>
            <div className={`video-container ${index % 2 === 0 ? '' : 'reverse'}`}>
              <video autoPlay muted loop controls>
                <source src={`${product.videoUrl}`} type="video/mp4" />
              </video>
            </div>
            <div className="text-container">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    

      <Footer />
     

    </div>
  );
};

export default ProductShowcase;
