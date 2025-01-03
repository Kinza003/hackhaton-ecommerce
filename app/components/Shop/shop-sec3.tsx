"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { Shop } from '../props'

function ShopSection3() {
   const route = useRouter();
    const sofas = [
        {
            image: "/assets/Trenton-modular.png",
            title: "Trenton modular sofa_3",
            price: 25000,
          },
          {
            image: "/assets/Granite-dining-table.png",
            title: "Granite dining table with dining chair",
            price: 25000,
          },
          {
            image: "/assets/Outdoor-table-stool.png",
            title: "Outdoor bar table and stool",
            price: 25000,
          },
          {
            image: "/assets/Plain-console-mirror.png",
            title: "Plain console with teak mirror",
            price: 25000,
          },
        {
           image: "/assets/Grain-coffee-table-1.png",
           title: "Grain coffee table",
           price: 15000, 
        },
        {
           image: "/assets/Kent-coffee-table-1.png",
           title: "Kent coffee table",
           price: 225000, 
        },
        {
           image: "/assets/Round-coffee-table.png",
           title: "Round coffee table_color 2",
           price: 251000, 
        },
        {
           image: "/assets/Reclaimed-coffee.png",
           title: "Reclaimed teak coffee table",
           price: 25200, 
        },
        {
           image: "/assets/Plain-console-mirror.png",
           title: "Plain console_",
           price: 258200, 
        },
        {
           image: "/assets/Reclaimed-Sideboard.png",
           title: "Reclaimed teak Sideboard",
           price: 20000, 
        },
        {
           image: "/assets/SJP.png",
           title: "SJP_0825 2",
           price: 200000, 
        },
        {
           image: "/assets/Bella-chair-table.png",
           title: "Bella chair and table",
           price: 100000, 
        },
        {
           image: "/assets/Granite-table.png",
           title: "Granite square side table",
           price: 25800, 
        },
        {
           image: "/assets/Asgaard-sofa.png",
           title: "Asgaard sofa",
           price: 25000, 
        },
        {
           image: "/assets/Maya-sofa.png",
           title: "Maya sofa three seater",
           price: 115000, 
        },
        {
           image: "/assets/Outdoor-sofa.png",
           title: "Outdoor sofa set",
           price: 244000, 
        },
    ]

    const handleProductClick = (title : string) => {
      if (title === "Asgaard sofa") {
         route.push("/components/single-product-pg")  // Navigate to single product page
    }
   //  else {
   //    console.log(`No action for ${title}`)  // Log Message for other products
   //  }
   }


  return (
    <div className='pb-3'>

    <div className='grid grid-cols-1 sm:grid-cols-4 flex-col sm:flex-row space-x-9 space-y-10  py-6 px-5'>
    {/* <div className='grid grid-cols-1 sm:grid-cols-4 flex-col sm:flex-row gap-x-6 gap-y-8 py-6 px-5'> */}
            {sofas.map((sofa, index) => (
               <div 
               key={index} 
               onClick={() => handleProductClick(sofa.title)} 
               className="cursor-pointer">
               
              <Shop
               key={index}
              image={sofa.image}
              title={sofa.title}
              price={sofa.price}
              />
              
              </div>
            ))}
          </div>

          <div className='flex justify-center items-center gap-3 my-4'>
           <span className='bg-[#FBEBB5] rounded-[6px] w-8 h-8 flex justify-center items-center font-thin'>1</span>
           <span className='bg-[#FFF9E5] rounded-[6px] w-8 h-8 flex justify-center items-center font-thin'>2</span>
           <span className='bg-[#FFF9E5] rounded-[6px] w-8 h-8 flex justify-center items-center font-thin'>3</span>
           <span className='bg-[#FFF9E5] rounded-[6px] w-16 h-8 flex justify-center items-center font-thin'>Next</span>
          </div>

          </div>
  )
}

export default ShopSection3;
