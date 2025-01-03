"use client";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

function HeroSection2() {
  const router = useRouter();
  return (
    <div className='bg-[#FAF4F4] '>
      <div className='max-w-4xl mx-auto py-7 flex flex-col gap-5 justify-center sm:flex-row'>

        {/* Side Table 1 */}
        <div className='relative flex justify-center'>
            <Image
            src={"/assets/hero-table-1.png"}
            alt={"Side Table"}
            width={500}
            height={450}
            className='object-contain'
            priority
            />
            <span className='absolute top-52 sm:top-[202px] md:top-64 left-12 text-center sm:text-left'>
            <h2 className='font-medium font-serif text-3xl'>Side Table</h2>
            <Button 
            variant={"link"}
            onClick={() => router.push("/components/Shop")} 
            className='underline underline-offset-8 hover:text-gray-500 text-shadow-sm'>View More</Button>
            </span>
        </div>

        {/* Side Table 2 */}
        <div className='relative flex justify-center'>
        <Image
        src={"/assets/hero-table-2.png"}
        alt={"Side Table"}
        width={500}
        height={450}
        className='object-contain'
        priority
        />
        <span className='absolute top-52 sm:top-[202px] md:top-64 left-12 text-center sm:text-left'>
            <h2 className='font-medium font-serif text-3xl'>Side Table</h2>
            <Button
             variant={"link"}
             onClick={() => router.push("/components/Shop")}  
             className='underline underline-offset-8 hover:text-gray-500 text-shadow-sm'>View More</Button>
        </span>
        </div>

      </div>
    </div>
  )
}

export default HeroSection2
