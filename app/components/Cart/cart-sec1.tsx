import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CartSection1() {
  return (
    <div className='w-full bg-banner  flex flex-col items-center py-20 sm:pt-5 sm:pb-8'>
      
      {/* Logo */}
      <div>
        <Image 
        src={"/assets/banner-logo.png"} 
        alt='logo'
        width={60}
        height={60}
        />
      </div>

      {/* Heading */}
      <div>
        <h1 className='font-medium text-5xl'>Cart</h1>
      </div>

      {/* Links */}
      <div className='flex mt-3'>
        <Link href={"/"} className='font-medium text-base'>Home</Link>
        <ChevronRight/>
        <Link href={"Cart"} className='font-thin text-base text-gray-500'>Cart</Link>
      </div>

    </div>
  )
}

export default CartSection1
