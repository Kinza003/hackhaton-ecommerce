'use client';
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { Shop } from '../props';


function HeroSection3() {
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
    <div className='py-12'>

      {/* Header */}
      <div className='text-center space-y-4'>
        <h2 className='font-semibold text-3xl'>Top Picks For You</h2>
        <p className='text-[#9F9F9F] font-medium text-base px-2'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
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

export default HeroSection3
