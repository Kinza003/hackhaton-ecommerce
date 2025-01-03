import { Button } from '@/components/ui/button'
import React from 'react'

function HeroSection6() {
  return (
    <div className='bg-[#FAF4F4] text-center py-32 sm:py-28 bg-insta-image space-y-4'>
      <h1 className='font-semibold text-4xl sm:text-6xl'>Our Instagram</h1>
      <p className='font-extralight text-base'>Follow our store on Instagram</p>
      <Button variant={"ghost"} className='bg-[#FAF4F4] py-2 shadow-lg rounded-3xl w-[255px]'>Follow Us</Button>
    </div>
  )
}

export default HeroSection6
