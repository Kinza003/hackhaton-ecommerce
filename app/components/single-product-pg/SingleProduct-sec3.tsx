'use client';
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { Shop } from '../props';


function SingleProductSection3 () {
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
      price: 2500,
    },
  ]
  return (
    <div className='border-y border-[#D9D9D9] py-5'>

      {/* Header */}
      <div className='text-center'>
        <h2 className='font-semibold text-3xl'>Related Products</h2>
      </div>

      {/* Cards */}
      <div className='flex flex-col sm:flex-row justify-center gap-6 p-6'>
        {sofas.map((sofa, index) => (
          <Shop
          key={index}
          image={sofa.image}
          title={sofa.title}
          price={sofa.price}
          />
        ))}
      </div>

      {/* Button */}
      <div className='text-center my-4'>
        <Button 
        variant={"link"}
        onClick={() => route.push('/components/Shop')} 
        className='font-medium text-xl underline underline-offset-[12px] hover:text-gray-500 text-shadow-sm'>View More</Button>
      </div>

    </div>
  )
}

export default SingleProductSection3
