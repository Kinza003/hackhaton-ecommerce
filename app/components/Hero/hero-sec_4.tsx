"use client";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

function HeroSection4() {
  const route = useRouter();
  return (
    <div className='bg-[#FFF9E5] w-full flex flex-col sm:flex-row items-center justify-evenly '>

        {/* Image */}
        <div>
            <Image 
            src={"/assets/Asgaard-sofa.png"}
            alt='Asgaard Sofa'
            width={1000}
            height={639}
            className='h-full w-full'/>
        </div>

        {/* Text */}
        <div className='space-y-3 text-center mb-6 sm:mb-0'>
            <h5 className='font-medium text-2xl'>New Arrivals</h5>
            <h2 className='font-bold text-5xl'>Asgaard sofa</h2>
            <Button
            onClick={() => route.push("/components/single-product-pg")} 
            variant={"outline"} 
            className='shadow-md hover:bg-[#f1ecdc] rounded '>Order Now</Button>
        </div>

    </div>
  )
}

export default HeroSection4
