
import React from 'react'
import SingleProductSection1 from './SingleProduct-sec1'
import SingleProductSection2 from './SingleProduct-sec2';
import SingleProductSection3 from './SingleProduct-sec3';

function SingleProduct() {
  const images = [
        "/assets/Asgaard-sofa.svg",
        "/assets/SingleProduct-img1.svg", 
        "/assets/SingleProduct-img2.svg", 
        "/assets/SingleProduct-img3.svg", 
        "/assets/SingleProduct-img4.svg"
      ];
  return (
    <div className='max-w-5xl mx-auto'>
      <SingleProductSection1 images={images}/>
      <SingleProductSection2/>
      <SingleProductSection3/>
      
    </div>
  )
}

export default SingleProduct
