import React from 'react';
import './services.css';
import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Design and Consultancy',
    description: 'With our vast experience in both design and execution filed, we are equipped to well serve your needs. Our design and planning emphasis on the importance of proper planning of available resources and how they can be optimized by state of art products that we recommend to be used. Our products are imported from across the globe to serve you best and make our implementation effective both cost wise and aesthetically.',
    image: '/images/Screenshot 2025-07-19 233358.png',
    path:'/design'
  },
  {
    id: 2,
    name: 'Swimming Pool',
    description: 'Planning and execution of Swimming Pools, We take up turnkey Swimming solutions, from Shell work to Complete Filtration, Jacuzzi Pools, Heating Systems, Pool Covers, automatic Pool cleaning etc. We also undertake Electro Mechanical works only. Our Swimming Pool scope of work includes, Civil Works, Filtration Works, Electrical Works, Plumbing Works, and Under Water Lighting.',
    image: '/images/Screenshot 2025-07-20 010936.png',
    path:'/pool'
  },
  {
    id: 3,
    name: 'Landscape Irrigation',
    description: 'Complete Design and planning for large/small areas of landscape irrigation. Our Landscape Engineering products, include Sprinklers, Micro Drippers, Rotors, sub-soil drainage products, Storm water management, rain water harvesting etc.',
    image: '/images/istockphoto-480651803-612x612.jpg',
    path:'/landscape'
  },
  {
    id: 4,
    name: 'Fountain Technology',
    description: 'Our Strengths being strong engineering skills in hydraulics, Fountain technology is our best trait. We include Design, planning and execution. Our Nozzle effects use the best Fountain Technology products across the globe. The Underwater lights we use are IP65 certified. Fountain Nozzles, under water lights, filtration systems, underwater cabling, plumbing are all included in our scope.',
    image: '/Screenshot 2025-07-21 004518.png',
    path:'/fountain'
  },
  {
    id: 5,
    name: 'Bio Ponds',
    description: 'Water Bodies/ Ponds with Plant and Aquatic life is a treat to everyone’s eyes. We specialize in providing right kind of Bio Filtration for your ponds with the specialized products we have to serve the very purpose imported from across the globe.',
    image: '/Screenshot 2025-07-21 010814.png',
    path:'/bioponds'
  }
];

const ProductsPage = () => {
  return (
    <div style={{
      backgroundImage: `url('/images/ombre-blue-curve-light-blue-background-vector.jpg')`,
      backgroundSize: 'cover'
    }}>
      <div className="product-page">
        <div className='navbar-overlay'>
          <Nav />
        </div>
        <div className="background-overlay">
          <h1 style={{ color: "black", marginTop: "30px" }}>Our Services</h1>

          {products.map((product, index) => {
            const productButtons = Object.keys(product)
              .filter(key => key.startsWith('product'))
              .map(key => (
                <button key={key} className="button1">{product[key]}</button>
              ));

            return (
              <div
                key={product.id}
                className={`product-row ${index % 2 === 1 ? 'reverse' : ''}`}
              >
                <div className="product-content">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <a href={`${product.path}`} style={{color:"white"}}><button className='button'>Know more</button></a>
                   {productButtons.length > 0 && (
                    <div className="button-group">
                      {productButtons}
                    </div>
                  )}
                  
                </div>

                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
